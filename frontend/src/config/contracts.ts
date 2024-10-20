import BITToken from "artifacts/contracts/BITToken.sol/BITToken.json";
import BrainNFT from "artifacts/contracts/BrainNFT.sol/BrainNFT.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";

export enum ChainId {
  Morph = 2810,
  Hardhat = 31337,
}

const bitTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
  [ChainId.Morph]: "0xA9B981fd48b2A9Dd9075B088d05393d80479b2b0", // contract address on Morph network, add after contract creation
};

const nftTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
  [ChainId.Morph]: "0xee5D2d7A07a256FCfB21E7D216Ace77FC0CbC90D", // contract address on Morph network, add after contract creation
};

export const BITContract = {
  abi: BITToken.abi,
  address: bitTokenAddresses[TARGET_CHAIN],
};

export const NFTContract = {
  abi: BrainNFT.abi,
  address: nftTokenAddresses[TARGET_CHAIN],
};
