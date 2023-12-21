import { Web3Auth } from "@web3auth/modal";

const clientId = import.meta.env.VITE.CLIENT_ID
const web3AuthNetwork = import.meta.env.VITE_ENVIRONMENT_WEB
const web3auth = new Web3Auth({
  clientId, // Get your Client ID from the Web3Auth Dashboard
  web3AuthNetwork, // Web3Auth Network
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x1",
    rpcTarget: "https://rpc.ankr.com/eth",
    displayName: "Ethereum Mainnet",
    blockExplorer: "https://goerli.etherscan.io",
    ticker: "ETH",
    tickerName: "Ethereum",
  },
});

await web3auth.initModal();
