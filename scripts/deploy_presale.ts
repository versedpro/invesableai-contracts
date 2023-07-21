import { ethers } from "hardhat";

async function main() {
  const presale = await ethers.deployContract("Presale", [
    "0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6", // AIF on Sepolia
    1690847999, // end of July
    "0xD0dF82dE051244f04BfF3A8bB1f62E1cD39eED92", // WETH address on Sepolia
    "0xEEa85fdf0b05D1E0107A61b4b4DB1f345854B952", // USDC address on Sepolia
    "0x694AA1769357215DE4FAC081bf1f309aDC325306", // ETH-USD price feed on Sepolia
  ]);

  await presale.waitForDeployment();

  console.log("Presale has been deployed successfully: ", presale.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
