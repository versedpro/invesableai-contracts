import { ethers } from "hardhat";

async function main() {
  const tokenVesting = await ethers.deployContract("TokenVesting", [
    "0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6", // AIF on Sepolia
  ]);

  await tokenVesting.waitForDeployment();

  console.log("TokenVesting has been deployed successfully: ", tokenVesting.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
