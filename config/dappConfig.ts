import { Localhost, DAppProviderProps, Mainnet, Mumbai } from '@usedapp/core'

// import manifest from './contracts/manifest.json'

const IS_MUMBAI = true

export const READ_ONLY_URLS = {
  [Mumbai.chainId]:
    'https://polygon-mumbai.infura.io/v3/3501aa525fb74a6ba7823aaeed096e99',
}

const mumbai: DAppProviderProps['config'] = {
  autoConnect: true,
  readOnlyChainId: Mumbai.chainId,

  readOnlyUrls: READ_ONLY_URLS,
  networks: [Mumbai],
}

const config: DAppProviderProps['config'] = {
  autoConnect: true,
  readOnlyChainId: Localhost.chainId,
  readOnlyUrls: {
    [Localhost.chainId]: 'http://127.0.0.1:8545',
  },

  multicallAddresses: {
    // [Localhost.chainId]: manifest.Multicall,
  },

  networks: [
    {
      ...Localhost,
      // multicall2Address: manifest.Multicall,
      // multicallAddress: manifest.Multicall2,
    },
    Mainnet,
  ],
}

export default IS_MUMBAI ? mumbai : config
