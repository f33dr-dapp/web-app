import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { Token, Token__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface(Token__factory.abi)
const ContractInstance = new Contract(manifest.Token, Interface) as Token

export type TokenFunctions = ContractFunctionNames<Token>
export function useTokenFunction(
  name: TokenFunctions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type TokenMethodNames = ContractMethodNames<Token>
export type TokenParams = Params<Token, TokenMethodNames>
export function useTokenCall(method: TokenMethodNames, args?: TokenParams) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<Token, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
