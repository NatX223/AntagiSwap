const { ethers } = require("ethers");

// Ethereum provider URL
const providerUrl = "https://canto-testnet.plexnode.wtf";
// Your contract address and ABI
const contractAddress = "0xfAE79F8782dD49c379676AE9F928bE3C444014E3";
const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
];

// Wallet private key
const privateKey = "";

async function main() {
  // Connect to Ethereum provider
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // Create wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Mint NFT
  const tx = await contract.mint(0);
  console.log("Transaction hash:", tx.hash);

  // Wait for the transaction to be mined
  await tx.wait();
  console.log("NFT minted");

  const tx_ = await contract.mint(1);
  console.log("Transaction hash:", tx_.hash);

  // Wait for the transaction to be mined
  await tx_.wait();
  console.log("NFT minted");

  const tx__ = await contract.mint(2);
  console.log("Transaction hash:", tx_.hash);

  // Wait for the transaction to be mined
  await tx__.wait();
  console.log("NFT minted");

  const _tx_ = await contract.mint(3);
  console.log("Transaction hash:", tx_.hash);

  // Wait for the transaction to be mined
  await _tx_.wait();
  console.log("NFT minted");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
