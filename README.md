# Token and Tools for INVESABLEAI token

## Deploying

Try running some of the following tasks to deploy upgredeable contract:

```shell
npx hardhat run --network <chain_name> scripts/deploy.ts
```

Get deployed proxy address from this log: `Deploy successful: 0xa234ffd...`

```
npx hardhat verify --network <chain_name> <proxy_address>
```

In case you get timeout error, go ahead on etherscan and verify proxy contract manually. It's possible since implementation has been verified already.

Then, set owner as whitelist to exclude it from transaction fee.

Next, call opentrading method to create pair.

Finally, add liquidity calling addLiquidityETH function of uniswap V2.

## Contracts deployed

### Sepolia

- V1 Proxy: [0xEdfc2eaAAc7a66293531AbE2f293909f48576D23](https://sepolia.etherscan.io/address/0xEdfc2eaAAc7a66293531AbE2f293909f48576D23#readProxyContract)
- V1 Implementation: [0xba1DFA5bbad20392d46033F38041Fd0563f5Ed4c](https://sepolia.etherscan.io/address/0xba1DFA5bbad20392d46033F38041Fd0563f5Ed4c#code)
- Presale Contract: [0x4f9591d4A215e3Fe024C9E273872fDFf3edd5002](https://sepolia.etherscan.io/address/0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067#code)
- Vesting: [0xA46267826DBE5780607868F0790d353F6e12651F](https://sepolia.etherscan.io/address/0xA46267826DBE5780607868F0790d353F6e12651F#code)

### Goerli

- Proxy: [0x4d20C7DFb6D9ABbF4800Df410a502dcFDE991532](https://goerli.etherscan.io/address/0x4d20C7DFb6D9ABbF4800Df410a502dcFDE991532#readProxyContract)
- Implementation: [0xA2fAD80442fC07A6f90DA472b981253B3e8805fB](https://goerli.etherscan.io/address/0xA2fAD80442fC07A6f90DA472b981253B3e8805fB#code)

### Mainnet

- V1 Proxy: [0x2986c15C72D8BB76d7f97c701350779A00169138](https://etherscan.io/address/0x2986c15C72D8BB76d7f97c701350779A00169138#readProxyContract)
- V1 Implementation: [0x9446b2060c6254938a03AdC10EbD9fc81D714d6C](https://etherscan.io/address/0x9446b2060c6254938a03AdC10EbD9fc81D714d6C#code)
