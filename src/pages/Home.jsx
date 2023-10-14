import React from 'react'
import {Box,Image,Text} from '@chakra-ui/react'
import bitC from '../assets/btc.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.600'} w={'full'} h={'90vh'} display={'flex'} flexDirection={'column'}>
      <motion.div
       style={{
          height:'80vh',
      }}
      animate={{
        translateY:'30px',
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:'reverse'
      }}
       >
      <Image w={'full'} h={'full'} objectFit={'contain'} src={bitC} filter={'grayscale(2)'} />

      </motion.div>
      
      <Text fontSize={['4xl','6xl']} textAlign={'center'}  fontWeight={'thin'} color={'whiteAlpha.700'} mt={['-30','-15']}>
          Cypto with React
      </Text>

      
    </Box>
  )
}

export default Home