import React from 'react'
import { HStack,Text } from '@chakra-ui/react'

const Item = ({title,value}) => {
  return (
    <HStack flexDirection={['column','row']} justifyContent={'space-between'}  w={'full'} my={'4'}>
        <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
        <Text>{value}</Text>
    </HStack>
  )
}

export default Item