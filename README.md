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

## Contracts deployed

### Sepolia

- V1 Proxy: [0xB26502507C35c6C46F8A04b4c38BCfF97dC38bB9](https://sepolia.etherscan.io/address/0xB26502507C35c6C46F8A04b4c38BCfF97dC38bB9#readProxyContract)
- V1 Implementation: [0xc9f446aC1891Ee2A44BeDdA969d33b3fb4df3f3a](https://sepolia.etherscan.io/address/0xc9f446aC1891Ee2A44BeDdA969d33b3fb4df3f3a#code)
- Presale Contract: [0x4f9591d4A215e3Fe024C9E273872fDFf3edd5002](https://sepolia.etherscan.io/address/0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067#code)
- Vesting: [0xA46267826DBE5780607868F0790d353F6e12651F](https://sepolia.etherscan.io/address/0xA46267826DBE5780607868F0790d353F6e12651F#code)

### Goerli

- Proxy: [0x2fE423Ae9836694f81Ad2B4b1eddD090cC4c8e01](https://goerli.etherscan.io/address/0x2fE423Ae9836694f81Ad2B4b1eddD090cC4c8e01#code)
- Implementation: [0x5305Da266778eA4b349Ee670a9c10E56190E1369](https://goerli.etherscan.io/address/0x5305Da266778eA4b349Ee670a9c10E56190E1369#code)
