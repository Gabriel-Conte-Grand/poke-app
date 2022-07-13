import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'
import confetti from 'canvas-confetti'
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { PokemonDetail } from '../../interfaces'
import { Grid, Card, Image, Text, Button, Container } from '@nextui-org/react'
import { isInFavs, localFavorite } from '../../utils'
import { useEffect, useState } from 'react'

interface Props {
  pokemon: PokemonDetail
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter()

  const [isFav, setIsFav] = useState(isInFavs(pokemon.id))

  const toggleFavorite = () => {
    localFavorite(pokemon.id)
    setIsFav(!isFav)

    if (isFav) return
    confetti({
      zIndex: 999,
      particleCount: 500,
      spread: 500,
      angle: -150,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  useEffect(() => {
    isInFavs(pokemon.id)
  }, [isFav, pokemon.id])

  return (
    <>
      <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable isPressable>
              <Card.Body>
                <Image
                  src={
                    pokemon.sprites.other?.dream_world.front_default ||
                    'no-image'
                  }
                  alt={pokemon.name}
                  width='100%'
                  height='200px'
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Text h1 transform='capitalize'>
                  {pokemon.name}
                </Text>

                <Button onPress={toggleFavorite} color='gradient' ghost>
                  {isFav ? 'Borrar de favoritos' : 'Guardar en Favoritos'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>

                <Container display='flex'>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${id}`)

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

  return {
    props: {
      pokemon,
    },
  }
}

export default PokemonPage
