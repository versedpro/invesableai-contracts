import { ethers } from "hardhat";

async function main() {
  // Sepolia
  // const presale = await ethers.deployContract("Presale", [
  //   "0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6", // token on Sepolia
  //   1690847999, // end of July
  //   "0xD0dF82dE051244f04BfF3A8bB1f62E1cD39eED92", // WETH address on Sepolia
  //   "0xEEa85fdf0b05D1E0107A61b4b4DB1f345854B952", // USDC address on Sepolia
  //   "0x694AA1769357215DE4FAC081bf1f309aDC325306", // ETH-USD price feed on Sepolia
  // ]);

  // Goerli
  const presale = await ethers.deployContract("Presale", [
    "0xC6d77b465f23969aB122937F113FfF5dE7a16b7f", // token on Goerli
    1690597730, // Saturday, August 5, 2023 11:59:59 PM
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", // WETH address on Goerli
    "0xEEa85fdf0b05D1E0107A61b4b4DB1f345854B952", // USDC address on Goerli
    "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e", // ETH-USD price feed on Goerli
  ]);

  // Mainnet
  // const presale = await ethers.deployContract("Presale", [
  //   "0x9Ddfb2C0C7d334D8F7B1227169482f13E26f2191", // token address
  //   1691279999, // Saturday, August 5, 2023 11:59:59 PM
  //   "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH address on ETH
  //   "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC address on ETH
  //   "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419", // ETH-USD price feed on ETH
  // ]);

  await presale.waitForDeployment();

  console.log("Presale has been deployed successfully: ", presale.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
