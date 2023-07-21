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

## Contracts deployed

### Sepolia

- Proxy: [0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6](https://sepolia.etherscan.io/address/0xd69c5bd501a9c6df079c1ce59dc0484404e5e7d6#code)
- Implementation: [0x5f3eda2a057beb63448ff4d2845ebd059fe5cc41](https://sepolia.etherscan.io/address/0x5f3eda2a057beb63448ff4d2845ebd059fe5cc41#code)
- Presale Contract: [0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067](https://sepolia.etherscan.io/address/0xCd1C8505db1ADD99A1dcc759d7257cCdB7A11067#code)

### Goerli

- Proxy: [0x2fE423Ae9836694f81Ad2B4b1eddD090cC4c8e01](https://goerli.etherscan.io/address/0x2fE423Ae9836694f81Ad2B4b1eddD090cC4c8e01#code)
- Implementation: [0x5305Da266778eA4b349Ee670a9c10E56190E1369](https://goerli.etherscan.io/address/0x5305Da266778eA4b349Ee670a9c10E56190E1369#code)
