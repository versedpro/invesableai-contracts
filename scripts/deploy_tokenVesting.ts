import { ethers } from "hardhat";

async function main() {
  const tokenVesting = await ethers.deployContract("TokenVesting", [
    "0xB26502507C35c6C46F8A04b4c38BCfF97dC38bB9", // AIF on Sepolia
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
