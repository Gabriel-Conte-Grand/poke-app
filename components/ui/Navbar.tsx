import { useTheme, Text, Spacer, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        width={70}
        height={70}
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
        alt='Logo'
      />
      <NextLink href='/'>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: '1' }} />
      <NextLink href='/favorites'>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
