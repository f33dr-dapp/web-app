import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { Profile, Profile__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Profile__factory.abi)

export type ProfileFunctions = ContractFunctionNames<Profile>
export function useProfileFunction(
  name: ProfileFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<Profile>('Profile', Interface)

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
  const ContractInstance = useContract<Profile>('Profile', Interface)

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
