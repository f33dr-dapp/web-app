import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { Likes, Likes__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Likes__factory.abi)

export type LikesFunctions = ContractFunctionNames<Likes>
export function useLikesFunction(
  name: LikesFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<Likes>('Likes', Interface)

  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type LikesMethodNames = ContractMethodNames<Likes>
export type LikesParams = Params<Likes, LikesMethodNames>
export function useLikesCall(method: LikesMethodNames, args: LikesParams) {
  const ContractInstance = useContract<Likes>('Likes', Interface)

  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<Likes, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
