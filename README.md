<img src="./assets/logo.png"  width="60%" height="30%">

# Hardhat-Dapp-Gentools

This project was created out of needing a quick way to generate a prewired hardhat project connected to the blockchain in order to get the configuration out of the way early.
Whether you're in class, at a hackathon, or just testing smart contracts. You want to be able to focus on the code, and not get bogged down configuration.

Configurations:

```shell
hardhat.config.ts
.env
```

```shell
MNEMONIC=""
PRIVATE_KEY=""
INFURA_API_KEY=""
INFURA_API_SECRET=""
ALCHEMY_API_KEY=""
ETHERSCAN_API_KEY=""
POLYGONSCAN_API_KEY=""
SNOWTRACE_API_KEY=""
```

```shell
npm install
npx hardhat run scripts/deploy.ts --network sepolia
npx hardhat verify --network sepolia <0xaddress>
```

## Roadmap/Todo List

[x] Add Sepolia support
[x] Add Goerli support
[x] Add Polygon support
[ ] Add Arbitrum support
[ ] Add Optimism support
[ ] Add Coinbase Base L2 support

Donate mainnet real funds: zkjet.eth

```shell
0x778075Ad26817050BF209B10C5CaFD7595502e74
```

Donate testnet funds to help out devs!:

```shell
0x92ba1EF8A82667FcC12B9975cd32fcA171C8d6CF
```
