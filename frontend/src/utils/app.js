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

const factoryABI = [
  {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_router",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_curve",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "createPair",
      "outputs": [
        {
          "internalType": "address",
          "name": "pair",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getPoolCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allPairs",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getPairs",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "pairs",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
]

const pairABI = [
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      }
    ],
    "name": "addLiquidity",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "swap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
      "inputs": [],
      "name": "reserve0",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "reserve1",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
  },
]

const routerABI = [
  {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "pairAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "swapETHforNFT",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "pairAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "swapNFTforETH",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
]

const providerUrl = "https://canto-testnet.plexnode.wtf";
const provider = new ethers.JsonRpcProvider(providerUrl);

const exchangeAddress = "0x4971C16Ad4Dd04ED489A249145A27F1d42af2420";
const routerAddress = "0xefa3cF0d51f17cD823799E03f72BcE2a2DE61083";
const factoryAddress = "0xd5d8CAF0B742CE82e9A3C1D3fA2278fdF5b93DaF";
const curveAddress = "0x068307a6645465468a411a09AB8fde651567B37D";

const nftAddresses = ["0x434aD648975CBd38dFcc7381E0b2b15079bB7dE1", "0xe462B2Bd44853a3Ab56b5b0C7Db76Bc27306f19E", "0x5474C94152DFeB642607758dECF156f590D092dD", "0xfAE79F8782dD49c379676AE9F928bE3C444014E3"];

export const createPool = async(ids, nftAddress, liquidity, fee, signer) => {
  const userAddress = await signer.getAddress();

  const _fee = fee * 10;
  const factoryContract = new ethers.Contract(factoryAddress, factoryABI, signer);
  const createTx = await factoryContract.createPair(nftAddress, routerAddress, curveAddress, _fee, {gasLimit: 50000});

  await createTx.wait();
  console.log("pool created");

  const _poolCount = await factoryContract.getPoolCount();
  const poolCount = (Number(_poolCount)) - 1;

  const pairAddress = await factoryContract.allPairs(poolCount);

  const nftContract = new ethers.Contract(nftAddress, nftAbi, signer);

  const approveTx = await nftContract.setApprovalForAll(pairAddress, true);
  await approveTx.wait();
  console.log("contract approved");

  const Liq = ethers.parseEther(liquidity);

  const pairContract = new ethers.Contract(pairAddress, pairABI, signer);
  const addLiqTx = await pairContract.addLiquidity(ids, userAddress, {value: Liq});

  await addLiqTx.wait();
  console.log("liquidity added");
}

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
        const isSold = barter[4];
        const offeredNFTContract = new ethers.Contract(offeredNFTAddress, nftAbi, provider);
        const targetNFTContract = new ethers.Contract(targetNFTAddress, nftAbi, provider);
        const nftImage = await offeredNFTContract.tokenURI(0);
        const offeredNftName = await offeredNFTContract.name();
        const targetNftName = await targetNFTContract.name();
        if (!isSold) {
          const _barter = {
            image: nftImage,
            offeredCollection: offeredNftName,
            targetCollection: targetNftName,
            number: Number(barter[2]),
            barterId: i
        }
        barters.push(_barter);
        } else {
          continue;
        }
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
    console.log(barter);
    const targetNFTAddress = barter[1];
    const targetNFTContract = new ethers.Contract(targetNFTAddress, nftAbi, signer);
    
    const tx_ = await targetNFTContract.setApprovalForAll(exchangeAddress, true);
    await tx_.wait();
    console.log("Approval set");
    console.log(id, targetIds);

    const tx = await exchangeContract.fulfilBarter(id, targetIds, {gasLimit: 30000});
    await tx.wait();
    console.log("Barter Completed");
}

export const buyNFT = async(ids_, signer) => {
  const ids = ids_.map(obj => obj.id);
  const poolAddress = "0xc10C365ec87e77C9cc20cF32005BA37570fC5133";
  const userAddress = await signer.getAddress();

  // calculate the buy price for each pool
  const curveContract = new ethers.Contract(deploymentAddresses.curve[chainId], curveABI, signer);

  // get reserve0 and reserve1
  const pairContract = new ethers.Contract(poolAddress, pairABI, signer);
  const reserve0 = await pairContract.reserve0();
  const reserve1 = await pairContract.reserve1();
  console.log(reserve0, reserve1);

  const price = await curveContract.getBuyPriceSingle(ids.length, reserve0, reserve1, poolAddress);
  console.log(price);

  const routerContract = new ethers.Contract(routerAddress, routerABI, signer);
  const buyTx = await routerContract.swapETHforNFT(ids, poolAddress, userAddress, {value: price});
  await buyTx.wait();
  console.log("bought");
}