import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'

import { FavoritePokemons, FavPokemons } from '../../components/ui'
import { getFavourites } from '../../utils'

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(getFavourites())
  }, [])

  return (
    <Layout title='Favorites'>
      {favorites.length > 0 ? (
        <FavoritePokemons favorites={favorites} />
      ) : (
        <FavPokemons />
      )}
    </Layout>
  )
}

export default Favorites
