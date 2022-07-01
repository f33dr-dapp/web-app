import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Multicall, Multicall__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Multicall__factory.abi)
const ContractInstance = new Contract(
  manifest.Multicall,
  Interface,
) as Multicall

export type MulticallFunctions = ContractFunctionNames<Multicall>
export function useMulticallFunction(
  name: MulticallFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type MulticallMethodNames = ContractMethodNames<Multicall>
export type MulticallParams = Params<Multicall, MulticallMethodNames>
export function useMulticallCall(
  method: MulticallMethodNames,
  args?: MulticallParams,
) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<Multicall, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
