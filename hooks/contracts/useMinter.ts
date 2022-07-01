import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Minter, Minter__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Minter__factory.abi)
const ContractInstance = new Contract(manifest.Minter, Interface) as Minter

export type MinterFunctions = ContractFunctionNames<Minter>
export function useMinterFunction(
  name: MinterFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type MinterMethodNames = ContractMethodNames<Minter>
export type MinterParams = Params<Minter, MinterMethodNames>
export function useMinterCall(method: MinterMethodNames, args?: MinterParams) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<Minter, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
