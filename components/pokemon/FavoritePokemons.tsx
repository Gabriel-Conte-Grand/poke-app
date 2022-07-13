import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
  favorites: number[]
}

export const FavoritePokemons = ({ favorites }: Props) => {
  const router = useRouter()
  const onFavClick = (id: number) => {
    router.push(`pokemon/${id}`)
  }

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorites.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card isHoverable isPressable onPress={() => onFavClick(id)}>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
              width={100}
              height={140}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  )
}
