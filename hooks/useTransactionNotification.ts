import { useEffect } from 'react'

import { TransactionStatus } from '@usedapp/core'

import useNotification from './useNotification'

export default function useTransactionNotification(
  name: string,
  state: TransactionStatus,
) {
  const notify = useNotification()

  useEffect(() => {
    if (state.status === 'Success') {
      notify(`Transaction ${name} succeeded.`)
    }
    if (['Exception', 'Fail'].includes(state.status)) {
      notify(`Transaction ${name} failed.`, 'Error', 'error')
    }
  }, [state])
}
