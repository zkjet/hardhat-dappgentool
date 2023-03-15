import { HardhatUserConfig } from "hardhat/config";
import { ethers } from "ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

// WALLET
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// INFRASTRUCTURE
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const INFURA_API_SECRET = process.env.INFURA_API_SECRET;
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// BLOCKEXPLORERS
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const SNOWTRACE_API_KEY = process.env.POLYGONSCAN_API_KEY;

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    // ETHEREUM
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
    // ETHEREUM
    goerli: {
      url: "https://goerli.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
    // POLYGON
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
    // AVALANCHE
    fuji: {
      url: "https://avalanche-fuji.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // Toggle if switching to other BLOCKCHAIN BLOCKEXPLORER
    // apiKey: POLYGONSCAN_API_KEY,
    // apiKey: SNOWTRACE_API_KEY
    customChains: [
      {
        network: "base-goerli",
        chainId: 8453,
        urls: {
          apiURL: "https://goerli.base.org",
          browserURL: "https://goerli.basescan.org/",
        },
      },
    ],
  },
};
export default config;
