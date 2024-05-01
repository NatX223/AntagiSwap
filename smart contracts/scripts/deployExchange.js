const hre = require("hardhat");

async function main() {
  const exchange = await hre.ethers.deployContract("Exchange");

  await exchange.waitForDeployment();

  console.log(
    `deployed to ${exchange.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
