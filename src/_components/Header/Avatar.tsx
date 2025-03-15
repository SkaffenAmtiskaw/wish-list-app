import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StyledAvatar from '@mui/material/Avatar'

import Image from 'next/image'

import { auth } from '@/auth'

export const Avatar = async () => {
  const session = await auth()

  if (!session?.user) {
    return (
      <StyledAvatar sx={{ height: '48px', width: '48px' }}>
        <AccountCircleIcon />
      </StyledAvatar>
    )
  }

  return (
    <StyledAvatar sx={{ height: '48px', width: '48px' }}>
      <Image
        alt={`${session.user.name} avatar}`}
        fill
        src={session.user.image as string}
        style={{
          borderRadius: '50%',
        }}
      />
    </StyledAvatar>
  )
}
