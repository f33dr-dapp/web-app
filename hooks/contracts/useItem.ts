import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Item, Item__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Item__factory.abi)
const ContractInstance = new Contract(manifest.Item, Interface) as Item

export type ItemFunctions = ContractFunctionNames<Item>
export function useItemFunction(
  name: ItemFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type ItemMethodNames = ContractMethodNames<Item>
export type ItemParams = Params<Item, ItemMethodNames>
export function useItemCall(method: ItemMethodNames, args?: ItemParams) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<Item, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
