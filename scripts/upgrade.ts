import { ethers, upgrades } from "hardhat";

async function main() {
  const tokenV1 = "0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6";
  const tokenV2 = await ethers.getContractFactory("InvesableaiToken");
  console.log("Deploying V2 Token contract...");
  const tokenV2Contract = await upgrades.upgradeProxy(tokenV1, tokenV2);
  await tokenV2Contract.waitForDeployment();
  const address = tokenV2Contract.target;
  console.log("Upgrade successful: ", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
