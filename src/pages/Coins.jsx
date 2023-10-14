import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import { HStack,Container, Button, RadioGroup, Radio } from '@chakra-ui/react';
import { CoinCard, ErrorComponent,  Loader } from '../components';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [pages, setPages] = useState(1)
  const [currency, setCurrency] = useState('inr')

  const changePage=(page)=>{
    setPages(page);
    setLoading(true)
  }
  const currencySymbol=currency=== 'inr'?'₹':currency==='eur'?'€':'$';

  const btns=new Array(132).fill(1)
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${pages}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false)
      }
      
    };
    fetchCoins();
  }, [currency,pages]);

  if(error)return <ErrorComponent massege={'Error while fetching details'}/>
  return (
    <Container maxW={"container.xl"}>{loading ? <Loader /> :
     <>
     <RadioGroup value={currency} onChange={setCurrency}>
      <HStack spacing={'4'}>
        <Radio value='inr'>₹INR</Radio>
        <Radio value='usd'>$USD</Radio>
        <Radio value='eur'>€EUR</Radio>
      </HStack>
     </RadioGroup>
      <HStack wrap={'wrap'} flex={'flex'} textAlign={'center'} justifyContent={'center'}>
        {coins.map((e)=>(
            <CoinCard id={e.id} key={e.id} price={e.current_price} name={e.name} img={e.image} symbol={e.symbol} url={e.url} currencySymbol={currencySymbol}/>
            
        ))}
      </HStack>
      <HStack w={'full'} overflowX={'scroll'} p={'8'}>
        {
          btns.map((item,index)=>(
            <Button key={index} bgColor={'blackAlpha.700'} color={'white'} onClick={()=>changePage(index+1)}>{index+1}</Button>
          ))
        }
      </HStack>
     </>
     }
    </Container>
  );
}

export default Coins