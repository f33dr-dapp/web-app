import { TransactionStatus } from '@usedapp/core'

export default function useIsTransactionLoading(state: TransactionStatus) {
  return !['Exception', 'Fail', 'None', 'Success'].includes(state.status)
}
