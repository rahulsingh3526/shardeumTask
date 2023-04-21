import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { Chain, polygonMumbai, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const shardeumLiberty = {
  id: 8081,
  name: "Shardeum Liberty 2.X",
  network: "Shardeum Liberty 2.X",
  iconUrl: "https://img.api.cryptorank.io/coins/shardeum1665056595732.png",
  nativeCurrency: {
    decimals: 18,
    name: "Shardeum",
    symbol: "SHM",
  },
  rpcUrls: {
    default: {
      http: ["https://liberty20.shardeum.org/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Liberty",
      url: "https://explorer-liberty20.shardeum.org/",
    },
  },
};

const { chains, provider, webSocketProvider } = configureChains(
  [shardeumLiberty, polygonMumbai, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Shardeum Next.js Boilerplate",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
