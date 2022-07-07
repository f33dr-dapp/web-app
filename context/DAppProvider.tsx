import { createContext, useContext, useMemo } from 'react'

import {
  DAppProvider as UseDAppProvider,
  useCall,
  useEthers,
  Web3Ethers,
} from '@usedapp/core'
import { Contract, utils } from 'ethers'

import AlertContainer from '../components/Alerts/AlertContainer'
import NetworkAlert from '../components/Alerts/NetworkAlert'
import Loader from '../components/Layout/Loader'
import dappConfig from '../config/dappConfig'
import { AddressBook, AddressBook__factory } from '../contracts'
import MANIFEST from './manifest.json'

const ADDRESS_BOOK = MANIFEST.AddressBook
const Interface = new utils.Interface(AddressBook__factory.abi)
const AddressBookContract = new Contract(ADDRESS_BOOK, Interface) as AddressBook

export type ContractTypes = keyof typeof MANIFEST.contracts
export type ContractNames = Record<ContractTypes, string>

type ContextType = Web3Ethers & {
  contracts: ContractNames
}

const Context = createContext<ContextType>({
  activate: async () => {},
  setError: () => {},
  deactivate: () => {},
  activateBrowserWallet: () => {},
  switchNetwork: async () => {},
  connector: undefined,
  active: false,
  isLoading: true,
  contracts: {
    Token: '',
    Item: '',
    Minter: '',
    Likes: '',
    Profile: '',
    AddressBook: ADDRESS_BOOK,
  },
})

function useContractAddress(
  contractName: string,
): [string | undefined, Error | undefined] {
  const { value, error } = useCall({
    contract: AddressBookContract,
    method: 'addressOf',
    args: [contractName],
  }) ?? {
    value: undefined,
    error: undefined,
  }

  return [value ? value[0] : undefined, error]
}

function ContractsLoader(props: { children: any }) {
  const ethers = useEthers()

  const [Minter, MinterError] = useContractAddress('Minter')
  const [Token, TokenError] = useContractAddress('Token')
  const [Item, ItemError] = useContractAddress('Item')
  const [Likes, LikesError] = useContractAddress('Likes')
  const [Profile, ProfileError] = useContractAddress('Profile')

  const error =
    MinterError || TokenError || ItemError || LikesError || ProfileError

  if (error) {
    return (
      <AlertContainer title="Error" status="error">
        {error.message}
      </AlertContainer>
    )
  }

  const loading = !Minter || !Token || !Item || !Likes || !Profile
  if (loading) {
    return <Loader />
  }

  return (
    <Context.Provider
      value={{
        ...ethers,
        contracts: {
          Token,
          Item,
          Minter,
          Likes,
          Profile,
          AddressBook: ADDRESS_BOOK,
        },
      }}>
      {props.children}
    </Context.Provider>
  )
}

function DAppProviderContent(props: { children: any }) {
  const ethers = useEthers()

  if (!ethers.chainId) {
    return <NetworkAlert />
  }

  return <ContractsLoader>{props.children}</ContractsLoader>
}

export function useDapp() {
  return useContext(Context)
}

export function useContract<T extends Contract>(
  name: ContractTypes,
  Interface: utils.Interface,
) {
  const { contracts } = useDapp()
  return useMemo(
    () => new Contract(contracts[name], Interface) as T,
    [contracts.Item],
  )
}

export default function DAppProvider(props: { children: any }) {
  return (
    <UseDAppProvider config={dappConfig}>
      <DAppProviderContent>{props.children}</DAppProviderContent>
    </UseDAppProvider>
  )
}
