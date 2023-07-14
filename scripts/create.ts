import { ethers, upgrades } from "hardhat";

async function main() {
  const gas = await ethers.provider.getFeeData();
  const tokenV1 = await ethers.getContractFactory("InvesableaiToken");
  console.log("Deploying V1 Token contract...");
  const tokenV1Contract = await upgrades.deployProxy(
    tokenV1,
    [
      "0x7089e7a1e4d34faf7ab487ce599ce27d97d340cb",
      "0x7089e7a1e4d34faf7ab487ce599ce27d97d340cb",
      "0x7089e7a1e4d34faf7ab487ce599ce27d97d340cb",
    ],
    {
      initializer: "initialize(address, address, address)",
    }
  );
  await tokenV1Contract.waitForDeployment();
  const address = tokenV1Contract.target;
  console.log("Deploy successful: ", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
