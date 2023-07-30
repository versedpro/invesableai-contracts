# Token and Tools for INVESABLEAI token

## Deploying the token

1. Deploy the token smart contract.

   Try running some of the following tasks to deploy upgredeable contract:

   ```shell
   npx hardhat run --network <chain_name> scripts/deploy.ts
   ```

   Get deployed proxy address from this log: `Deploy successful: 0xa234ffd...`

   ```
   npx hardhat verify --network <chain_name> <proxy_address>
   ```

   In case you get timeout error, go ahead on etherscan and verify proxy contract manually. It's possible since implementation has been verified already.

2. Then, set owner as whitelist to exclude it from transaction fee.

3. Next, call opentrading method to create pair.

4. Finally, add liquidity calling addLiquidityETH function of uniswap V2.

## Presale

1. Deploy the presale contract.

2. Add presale contract address into token whitelist to enable transfer transactions before adding liquidity.

3. Set whitelist with purchasers' address registered.

4. Don't forget enable claim whenever you determine to send sold token to purchasers.

## Contracts deployed

### Sepolia

- Proxy: [0x75D744dAfd57EC36A2B92e05Dd08F4Bda3Bc95cb](https://sepolia.etherscan.io/address/0x75D744dAfd57EC36A2B92e05Dd08F4Bda3Bc95cb#readProxyContract)
- V1 Implementation: [0x51Ee10c0ff455D5025686CA209AC0481EF783c11](https://sepolia.etherscan.io/address/0x51ee10c0ff455d5025686ca209ac0481ef783c11#code)
- Presale Contract: [0x4f9591d4A215e3Fe024C9E273872fDFf3edd5002](https://sepolia.etherscan.io/address/0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067#code)
- Vesting: [0xA46267826DBE5780607868F0790d353F6e12651F](https://sepolia.etherscan.io/address/0xA46267826DBE5780607868F0790d353F6e12651F#code)

### Goerli (tested)

- Proxy: [0xC6d77b465f23969aB122937F113FfF5dE7a16b7f](https://goerli.etherscan.io/address/0xC6d77b465f23969aB122937F113FfF5dE7a16b7f#readProxyContract)
- V1 Implementation: [0x49d8F9C2B372CEA6055dfAD2009883146813b870](https://goerli.etherscan.io/address/0x49d8f9c2b372cea6055dfad2009883146813b870#code)
- Persale [0x9303FC9175146e6d93264D632bB4aE82E69dfD0e](https://goerli.etherscan.io/address/0x9303FC9175146e6d93264D632bB4aE82E69dfD0e#code)

### Mainnet

- Proxy: [0x9Ddfb2C0C7d334D8F7B1227169482f13E26f2191](https://etherscan.io/address/0x9Ddfb2C0C7d334D8F7B1227169482f13E26f2191#readProxyContract)
- V1 Implementation: [0x43e39C125c13E3Ff1674faF70A38458a54019b80](https://etherscan.io/address/0x43e39C125c13E3Ff1674faF70A38458a54019b80#code)
- Presale: [0x0853f55EaFaC68467cb116b9ac9E9Af644831095](https://etherscan.io/address/0x0853f55EaFaC68467cb116b9ac9E9Af644831095#code)
