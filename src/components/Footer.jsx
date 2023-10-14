import { Box,Stack,VStack,Avatar,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={['16','8']}>
      <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center','flex-start']}>
        <Text fontWeight={'bold'}>About Us</Text>
        <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>
          We are here to provide you guidience about future of Crypto with that you can save your time and money more efficient way.
        </Text>
        </VStack> 
        <VStack >
          <Avatar boxSize={'28'} mt={['4','0']} /> */
          <Text> Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer