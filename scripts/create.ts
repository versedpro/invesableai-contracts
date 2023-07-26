import { ethers, upgrades } from "hardhat";

async function main() {
  const gas = await ethers.provider.getFeeData();
  const tokenV1 = await ethers.getContractFactory("InvesableaiToken");
  console.log("Deploying V1 Token contract...");
  const tokenV1Contract = await upgrades.deployProxy(
    tokenV1,
    [
      "0xf925cDFD4806342d9dc1D5c7Ae09e3A43a02B053",
      "0xf925cDFD4806342d9dc1D5c7Ae09e3A43a02B053",
      "0xf925cDFD4806342d9dc1D5c7Ae09e3A43a02B053",
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
