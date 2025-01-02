import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { Box, Header as StyledHeader, Heading } from 'grommet';
import Image from 'next/image';

import { auth } from '@/auth';

export const Header = async () => {
  const session = await auth();

  return (
    <StyledHeader background="main" gridArea="header">
      <Heading margin="medium" size="small">
        Wish Lists
      </Heading>
      <Box
        margin="medium"
        height="xxsmall"
        width="xxsmall"
        style={{ position: 'relative' }}
      >
        {session?.user ? (
          <Image
            alt={`${session.user.name} avatar}`}
            fill
            src={session.user.image as string}
            style={{
              borderRadius: '50%',
            }}
          />
        ) : (
          <FontAwesomeIcon icon={faCircleUser} />
        )}
      </Box>
    </StyledHeader>
  );
};
