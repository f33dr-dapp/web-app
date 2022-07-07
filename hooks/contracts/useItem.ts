import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { Item, Item__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Item__factory.abi)

export type ItemFunctions = ContractFunctionNames<Item>
export function useItemFunction(
  name: ItemFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<Item>('Item', Interface)

  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type ItemMethodNames = ContractMethodNames<Item>
export type ItemParams = Params<Item, ItemMethodNames>
export function useItemCall(method: ItemMethodNames, args: ItemParams = []) {
  const ContractInstance = useContract<Item>('Item', Interface)

  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<Item, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
