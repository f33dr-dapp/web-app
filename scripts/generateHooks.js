const TEMPLATE = `
import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { {{CONTRACT}}, {{CONTRACT}}__factory } from '../../contracts'
import manifest from '../../contracts/manifest.json'
import useTransactionNotification from '../useTransactionNotification'

const Interface = new utils.Interface({{CONTRACT}}__factory.abi)
const ContractInstance = new Contract(manifest.{{CONTRACT}}, Interface) as {{CONTRACT}}

export type {{CONTRACT}}Functions = ContractFunctionNames<{{CONTRACT}}>
export function use{{CONTRACT}}Function(
  name: {{CONTRACT}}Functions,
  notificationTitle?: string,
) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  useTransactionNotification(notificationTitle || name, transaction.state)

  return transaction
}

export type {{CONTRACT}}MethodNames = ContractMethodNames<{{CONTRACT}}>
export type {{CONTRACT}}Params = Params<{{CONTRACT}}, {{CONTRACT}}MethodNames>
export function use{{CONTRACT}}Call(
  method: {{CONTRACT}}MethodNames,
  args?: {{CONTRACT}}Params,
) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args: args || [],
    }) as CallResult<{{CONTRACT}}, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}

`

const fs = require('fs')
const path = require('path')

const manifest = require('../contracts/manifest.json')

const hooksPath = path.join(__dirname.replace('scripts', ''), 'hooks/contracts')

function checkDir(dir) {
  const subDirs = dir.split('/')
  let last = ''
  subDirs.forEach((s) => {
    const current = last + s + '/'
    if (!fs.existsSync(current)) {
      fs.mkdirSync(current)
    }
    last = current
  })
}

function writeFile(name, content) {
  if (fs.existsSync(name)) {
    fs.unlinkSync(name)
  }
  fs.writeFileSync(name, content)
}

function generateHook(contract) {
  const content = TEMPLATE.split('{{CONTRACT}}').join(contract)
  writeFile(path.join(hooksPath, `use${contract}.ts`), content)
}

function generateHooks() {
  checkDir(hooksPath)
  fs.rmdirSync(hooksPath, { recursive: true })
  checkDir(hooksPath)
  Object.keys(manifest).forEach((contract) => {
    generateHook(contract)
  })
}

generateHooks()
