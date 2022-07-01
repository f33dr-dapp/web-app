import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Likes, Likes__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Likes__factory.abi)
const ContractInstance = new Contract(manifest.Likes, Interface) as Likes

export type LikesFunctions = ContractFunctionNames<Likes>
export function useLikesFunction(
  name: LikesFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type LikesMethodNames = ContractMethodNames<Likes>
export type LikesParams = Params<Likes, LikesMethodNames>
export function useLikesCall(method: LikesMethodNames, args: LikesParams) {
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
