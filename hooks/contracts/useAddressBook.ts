import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { AddressBook, AddressBook__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(AddressBook__factory.abi)

export type AddressBookFunctions = ContractFunctionNames<AddressBook>
export function useAddressBookFunction(
  name: AddressBookFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<AddressBook>('AddressBook', Interface)

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
  args: AddressBookParams = [],
) {
  const ContractInstance = useContract<AddressBook>('AddressBook', Interface)

  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<AddressBook, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
