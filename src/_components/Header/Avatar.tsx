import { Box, DropButton } from 'grommet';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from '@/auth';

const ALIGNMENT = {
  right: 'right' as const,
  bottom: 'top' as const,
};

export const Avatar = async () => {
  const session = await auth();

  return (
    <DropButton
      dropAlign={ALIGNMENT}
      dropContent={<Box>FOO</Box>}
      dropProps={{
        margin: {
          top: 'xsmall',
        },
      }}
      icon={
        session?.user ? (
          <Image
            alt={`${session.user.name} avatar}`}
            fill
            src={session.user.image as string}
            style={{
              borderRadius: '50%',
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{ height: '100%', opacity: 0.75 }}
          />
        )
      }
      margin="small"
      plain
      style={{ position: 'relative', height: '48px' }}
    />
  );
};
