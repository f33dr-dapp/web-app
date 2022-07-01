import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { AddressBook, AddressBook__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(AddressBook__factory.abi)
const ContractInstance = new Contract(
  manifest.AddressBook,
  Interface,
) as AddressBook

export type AddressBookFunctions = ContractFunctionNames<AddressBook>
export function useAddressBookFunction(
  name: AddressBookFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type AddressBookMethodNames = ContractMethodNames<AddressBook>
export type AddressBookParams = Params<AddressBook, AddressBookMethodNames>
export function useAddressBookCall(
  method: AddressBookMethodNames,
  args?: AddressBookParams,
) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<AddressBook, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
