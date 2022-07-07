import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

import { useContract } from '../../context/DAppProvider'
import { Token, Token__factory } from '../../contracts'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Token__factory.abi)

export type TokenFunctions = ContractFunctionNames<Token>
export function useTokenFunction(
  name: TokenFunctions,
  notificationTitle?: string,
) {
  const ContractInstance = useContract<Token>('Token', Interface)

  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type TokenMethodNames = ContractMethodNames<Token>
export type TokenParams = Params<Token, TokenMethodNames>
export function useTokenCall(method: TokenMethodNames, args: TokenParams = []) {
  const ContractInstance = useContract<Token>('Token', Interface)

  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<Token, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
