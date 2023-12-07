import { prisma } from "@/lib/prisma";
import { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

function Example({user}:Props) {

  const [client, setClient] = useState(user);
     
  useEffect( () => { 
    async function fetchData() {
        try {

            setClient(user);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, []);
  return (
    <h1>Hello, {user?.name}</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
  const user = await prisma.user.findFirst();
  return {
    props:{
      user:  JSON.parse(JSON.stringify(user)) 
    }
  }

  
}





export default Example;