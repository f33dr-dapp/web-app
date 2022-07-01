import { useEffect, useRef } from 'react'

import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Jazzicon from '@metamask/jazzicon'

import useProfileValue from '../hooks/useProfileValue'

const StyledIdenticon = styled.div<{ size: number }>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: black;
`

type Props = {
  account: string
  size?: number
  border?: number
}

function JazzIcon({ account, size = 32 }: Props) {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(
        Jazzicon(size, parseInt(account.slice(2, 10), 16)),
      )
    }
  }, [account])

  return <StyledIdenticon size={size} ref={ref as any} />
}

export default function AccountIcon({ account, size = 32, border = 2 }: Props) {
  const { value } = useProfileValue(account)

  let icon = <JazzIcon account={account} size={size} />

  if (value && value.imageUrl) {
    icon = <Image src={value.imageUrl} objectFit="cover" alt={value.name} />
  }

  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      border="2px solid white"
      overflow="hidden"
      background="black"
      borderWidth={border}
      borderRadius={size}>
      {icon}
    </Box>
  )
}
