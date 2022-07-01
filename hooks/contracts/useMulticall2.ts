import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Multicall2, Multicall2__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Multicall2__factory.abi)
const ContractInstance = new Contract(
  manifest.Multicall2,
  Interface,
) as Multicall2

export type Multicall2Functions = ContractFunctionNames<Multicall2>
export function useMulticall2Function(
  name: Multicall2Functions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type Multicall2MethodNames = ContractMethodNames<Multicall2>
export type Multicall2Params = Params<Multicall2, Multicall2MethodNames>
export function useMulticall2Call(
  method: Multicall2MethodNames,
  args?: Multicall2Params,
) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<Multicall2, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
