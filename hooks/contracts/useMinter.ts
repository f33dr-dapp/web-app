import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { Minter, Minter__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Minter__factory.abi)

export type MinterFunctions = ContractFunctionNames<Minter>
export function useMinterFunction(
  name: MinterFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<Minter>('Minter', Interface)

  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type MinterMethodNames = ContractMethodNames<Minter>
export type MinterParams = Params<Minter, MinterMethodNames>
export function useMinterCall(
  method: MinterMethodNames,
  args: MinterParams = [],
) {
  const ContractInstance = useContract<Minter>('Minter', Interface)

  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<Minter, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
