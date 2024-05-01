const { ethers } = require("ethers");

const exchangeAbi = [
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "barters",
        "outputs": [
          {
            "internalType": "address",
            "name": "lister",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "targetNFT",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "targetNumber",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "offeredNFT",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "sold",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "_barterCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "barterId",
            "type": "uint256"
          },
          {
            "internalType": "uint256[]",
            "name": "tokenIds",
            "type": "uint256[]"
          }
        ],
        "name": "fulfilBarter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
]

const nftAbi = [
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
]

const providerUrl = "http://18.185.76.64:8080";
const provider = new ethers.JsonRpcProvider(providerUrl);

const exchangeAddress = "0x595CeE49356f6260D9D3290f7C052183260314ef";

export const getBarters = async () => {
    var barters = [];
    const exchangeContract = new ethers.Contract(exchangeAddress, exchangeAbi, provider);
    // get counter
    const barterCount = await exchangeContract._barterCount();
    for (let i = 0; i < barterCount; i++) {
        const barter = await exchangeContract.barters(i);
        const offeredNFTAddress = barter[3];
        const targetNFTAddress = barter[1];
        const offeredNFTContract = new ethers.Contract(offeredNFTAddress, nftAbi, provider);
        const targetNFTContract = new ethers.Contract(targetNFTAddress, nftAbi, provider);
        const nftImage = await offeredNFTContract.tokenURI(0);
        const offeredNftName = await offeredNFTContract.name();
        const targetNftName = await targetNFTContract.name();
        const _barter = {
            image: nftImage,
            offeredCollection: offeredNftName,
            targetCollection: targetNftName,
            number: Number(barter[2]),
            barterId: i
        }
        barters.push(_barter);
    }
    console.log(barters);
    return barters;
}

export const getBarter = async (id) => {
    var offeredImages = [];
    var targetImages = [];

    const exchangeContract = new ethers.Contract(exchangeAddress, exchangeAbi, provider);
        const barter = await exchangeContract.barters(id);
        const offeredNFTAddress = barter[3];
        const targetNFTAddress = barter[1];
        const offeredNFTContract = new ethers.Contract(offeredNFTAddress, nftAbi, provider);
        const targetNFTContract = new ethers.Contract(targetNFTAddress, nftAbi, provider);
        // get offered images
        for (let i = 0; i < 2; i++) {
            const nftImage = await offeredNFTContract.tokenURI(i);
            offeredImages.push(nftImage);
        }
        // get target images
        for (let i = 0; i < Number(barter[2]); i++) {
            const nftImage = await targetNFTContract.tokenURI(i);
            targetImages.push(nftImage);
        }

        const _barter = {
            offeredImages: offeredImages,
            targetImages: targetImages,
        }
        return _barter;
}

export const executeBarter = async (id, signer, targetLength) => {
    var targetIds = [];
    // get Token Id - get number then get ids from 0 to number
    for (let i = 0; i < targetLength; i++) {
        targetIds.push(i);
    }

    // await new Promise((resolve) => {
    //     if (signer) {
    //         resolve();
    //     } else {
    //         const intervalId = setInterval(() => {
    //             if (signer) {
    //                 clearInterval(intervalId);
    //                 resolve();
    //             }
    //         }, 100);
    //     }
    // });

    const exchangeContract = new ethers.Contract(exchangeAddress, exchangeAbi, signer);
    const barter = await exchangeContract.barters(id);
    const targetNFTAddress = barter[1];
    const targetNFTContract = new ethers.Contract(targetNFTAddress, nftAbi, signer);
    
    const tx_ = await targetNFTContract.setApprovalForAll(exchangeAddress, true);
    await tx_.wait();
    console.log("Approval set");

    const tx = await exchangeContract.fulfilBarter(id, targetIds);
    await tx.wait();
    console.log("Barter Completed");
}
