const hre = require("hardhat");

async function main() {
  const digitaldreams = await hre.ethers.deployContract("DigitalDreams");

  await digitaldreams.waitForDeployment();

  const cantoverse = await hre.ethers.deployContract("CantoVerse");

  await cantoverse.waitForDeployment();

  const cantart = await hre.ethers.deployContract("CantArt");

  await cantart.waitForDeployment();

  console.log(
    `CantArt to ${cantart.target}, CantoVerse to ${cantoverse.target}, DigitalDreams to ${digitaldreams.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});