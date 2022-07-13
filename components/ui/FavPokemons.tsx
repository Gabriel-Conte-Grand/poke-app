import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const FavPokemons = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>No favorites</Text>

      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
        alt='favorite'
        width={250}
        height={250}
      />
    </Container>
  )
}
