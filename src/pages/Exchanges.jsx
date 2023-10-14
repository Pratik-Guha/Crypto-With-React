import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import { ErrorComponent, ExchangeCard, Loader } from "../components";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true)
        setLoading(false)
      }
      
    };
    fetchExchanges();
  }, [setLoading,setExchanges]);

  if(error)return <ErrorComponent massege={'Error while fetching details'}/>
  return (
    <Container maxW={"container.xl"}>{loading ? <Loader /> :
     <>
      <HStack wrap={'wrap'} flex={'flex'} textAlign={'center'} justifyContent={'center'}>
        {exchanges.map((e)=>(
            <ExchangeCard key={e.id} name={e.name} img={e.image} rank={e.trust_score_rank} url={e.url}/>
            
        ))}
      </HStack>
     </>
     }
    </Container>
  );
};

export default Exchanges;
