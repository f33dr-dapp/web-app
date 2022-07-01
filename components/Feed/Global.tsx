import { useState } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import { useItemCall } from '../../hooks/contracts/useItem'
import AlertContainer from '../Alerts/AlertContainer'
import Loader from '../Layout/Loader'
import FeedItem from './Item'

const PAGE_SIZE = 10

export default function GlobalFeed() {
  const [page, setPage] = useState(1)

  const { value: maxSupplyValue, error } = useItemCall('maxSupply')

  if (error) {
    return (
      <AlertContainer title="Error" status="error">
        {error.message}
      </AlertContainer>
    )
  }

  if (!maxSupplyValue) {
    return <Loader />
  }

  const maxSupply = maxSupplyValue[0] as BigNumber
  const totalItems = Math.min(PAGE_SIZE * page, maxSupply.toNumber())
  const lastItem = maxSupply.toNumber() - totalItems
  const arraySize = maxSupply.toNumber() - lastItem

  const itemsArray = Array.from(Array(arraySize).keys())

  return (
    <>
      {itemsArray.map((item, index) => {
        return (
          <FeedItem
            isLast={index === itemsArray.length - 1}
            key={`item-${item}`}
            id={maxSupply.sub(index)}
          />
        )
      })}
      {totalItems < maxSupply.toNumber() ? (
        <Box mt={4} display="flex" alignItems="center" justifyContent="center">
          <Button onClick={() => setPage(page + 1)}>Load More</Button>
        </Box>
      ) : null}
    </>
  )
}
