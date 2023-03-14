import { HardhatUserConfig } from "hardhat/config";
import { ethers } from "ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const INFURA_API_SECRET = process.env.INFURA_API_SECRET;

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  polygonscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
    }
  },
};
export default config;
