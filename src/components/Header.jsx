import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={['1','2']}  shadow={'base'} bgColor={'blackAlpha.700'}>
      <Button variant={'unstyled'} m={'3'} color={'whiteAlpha.800'}>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyled'} m={'3'} color={'whiteAlpha.800'}>
        <Link to={'/exchanges'}>Exchanges</Link>
      </Button>
      <Button variant={'unstyled'} m={'3'} color={'whiteAlpha.800'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>
      
    </HStack>
  )
}

export default Header