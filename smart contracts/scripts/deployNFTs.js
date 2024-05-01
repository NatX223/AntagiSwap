const hre = require("hardhat");

async function main() {
  // const digitaldreams = await hre.ethers.deployContract("DigitalDreams");

  // await digitaldreams.waitForDeployment();

  // const shardverse = await hre.ethers.deployContract("ShardVerse");

  // await shardverse.waitForDeployment();

  const shardart = await hre.ethers.deployContract("ShardArt");

  await shardart.waitForDeployment();

  console.log(
    `ShardArt to ${shardart.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});