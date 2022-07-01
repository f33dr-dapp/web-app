import { Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import Form from 'formact'

import {
  useMinterCall,
  useMinterFunction,
} from '../../hooks/contracts/useMinter'
import { useTokenCall } from '../../hooks/contracts/useToken'
import useIsTransactionLoading from '../../hooks/useIsTransactionLoading'
import useProfileValue from '../../hooks/useProfileValue'
import AlertContainer from '../AlertContainer'
import SubmitButton from '../Form/SubmitButton'
import TextArea from '../Form/TextArea'
import TextField from '../Form/TextField'

type Props = {
  account: string
}

type ProfileFormType = {
  name: string
  username: string
  imageUrl: string
  bio: string
  isNft: boolean
  nftContract?: string
  nftTokenId?: string
}

export default function ProfileForm(props: Props) {
  const { value: profileValue, error: profileError } = useProfileValue(
    props.account,
  )

  const { value: priceValue, error: priceError } = useMinterCall('profilePrice')
  const { value: balanceValue, error: balanceError } = useTokenCall(
    'balanceOf',
    [props.account],
  )

  const updateProfile = useMinterFunction(
    'setProfile(string,string,string,string)',
  )

  const isLoading = useIsTransactionLoading(updateProfile.state)

  if (profileError || priceError || balanceError) {
    return (
      <AlertContainer title="Error">
        {(profileError || priceError || balanceError)?.message}
      </AlertContainer>
    )
  }

  if (!profileValue || !priceValue || !balanceValue) {
    return <Skeleton minH={400} />
  }

  const price = priceValue[0] as BigNumber
  const balance = balanceValue[0] as BigNumber

  return (
    <Form<ProfileFormType>
      initialValues={{
        ...profileValue,
        nftTokenId: profileValue.nftTokenId.toString(),
      }}
      onSubmit={(payload) => {
        const { values } = payload
        if (payload.valid) {
          updateProfile.send(
            values.name,
            values.username,
            values.bio || '',
            values.imageUrl,
          )
        }
      }}>
      <TextField name="username" label="Username" required />
      <TextField name="name" label="Name" required />
      <TextField name="imageUrl" label="Profile Picture" required />
      <TextArea name="bio" label="Bio" maxLength={128} />
      <SubmitButton
        mt={4}
        disabledInvalid
        disabled={price.gt(balance)}
        isLoading={isLoading}>
        Update Profile ({formatUnits(price)} F33D)
      </SubmitButton>
    </Form>
  )
}
