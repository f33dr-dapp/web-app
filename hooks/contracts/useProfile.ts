import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Profile, Profile__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Profile__factory.abi)
const ContractInstance = new Contract(manifest.Profile, Interface) as Profile

export type ProfileFunctions = ContractFunctionNames<Profile>
export function useProfileFunction(
  name: ProfileFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type ProfileMethodNames = ContractMethodNames<Profile>
export type ProfileParams = Params<Profile, ProfileMethodNames>
export function useProfileCall(
  method: ProfileMethodNames,
  args: ProfileParams,
) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<Profile, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
