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

- V1 Proxy: [0xEdfc2eaAAc7a66293531AbE2f293909f48576D23](https://sepolia.etherscan.io/address/0xEdfc2eaAAc7a66293531AbE2f293909f48576D23#readProxyContract)
- V1 Implementation: [0xba1DFA5bbad20392d46033F38041Fd0563f5Ed4c](https://sepolia.etherscan.io/address/0xba1DFA5bbad20392d46033F38041Fd0563f5Ed4c#code)
- Presale Contract: [0x4f9591d4A215e3Fe024C9E273872fDFf3edd5002](https://sepolia.etherscan.io/address/0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067#code)
- Vesting: [0xA46267826DBE5780607868F0790d353F6e12651F](https://sepolia.etherscan.io/address/0xA46267826DBE5780607868F0790d353F6e12651F#code)

### Goerli (tested)

- Proxy: [0xC6d77b465f23969aB122937F113FfF5dE7a16b7f](https://goerli.etherscan.io/address/0xC6d77b465f23969aB122937F113FfF5dE7a16b7f#readProxyContract)
- Implementation: [0x49d8F9C2B372CEA6055dfAD2009883146813b870](https://goerli.etherscan.io/address/0x49d8f9c2b372cea6055dfad2009883146813b870#code)
- Persale [0x8b8b2a04F45c128E2915442cBC16EBa86743d633](https://goerli.etherscan.io/address/0x8b8b2a04F45c128E2915442cBC16EBa86743d633#code)

### Mainnet

- V1 Proxy: [0x2986c15C72D8BB76d7f97c701350779A00169138](https://etherscan.io/address/0x2986c15C72D8BB76d7f97c701350779A00169138#readProxyContract)
- V1 Implementation: [0x9446b2060c6254938a03AdC10EbD9fc81D714d6C](https://etherscan.io/address/0x9446b2060c6254938a03AdC10EbD9fc81D714d6C#code)
