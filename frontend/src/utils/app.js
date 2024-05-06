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
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "targetNFT",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "offeredNFT",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "_offeredIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "targetNumber",
          "type": "uint256"
        }
      ],
      "name": "createBarter",
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
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]

const providerUrl = "https://canto-testnet.plexnode.wtf";
const provider = new ethers.JsonRpcProvider(providerUrl);

const exchangeAddress = "0xFD986EFd85B1F0EaeeCb7cD12f629DF3951e5360";

const nftAddresses = ["0xb7083e647240AeD427b6869A5E84962B4DDEc30c", "0xB07Ad6e27d4Cf9a1D2bCf965F1eC66B20276c312"];

export const getUserNFTs = async (address) => {
  var userNFTs = [];
  // run through all contracts
  for (let i = 0; i < nftAddresses.length; i++) {
    const nftContract = new ethers.Contract(nftAddresses[i], nftAbi, provider);
    for (let j = 0; j < 3; j++) {
      const owner = await nftContract.ownerOf(j);
      console.log(owner);
      const uri = await nftContract.tokenURI(j);
      if (address === owner) {
        const nft = {
          id: j,
          nftAddress: nftAddresses[i],
          src: uri
        }
        userNFTs.push(nft);
        console.log(nft);
      } else {
        continue;
      }
    }
  }
  return userNFTs;
} 

export const createBarter = async (targetNFTAddress, offeredNFTAddress, offeredIds, targetNumber, signer) => {
  const offeredNFTContract = new ethers.Contract(offeredNFTAddress, nftAbi, signer);
  await offeredNFTContract.setApprovalForAll(exchangeAddress, true);
  const exchangeContract = new ethers.Contract(exchangeAddress, exchangeAbi, signer);
  const createTx = await exchangeContract.createBarter(targetNFTAddress, offeredNFTAddress, offeredIds, targetNumber);
  await createTx.wait();
  console.log();
}

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