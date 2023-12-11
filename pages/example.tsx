import { prisma } from "@/lib/prisma";
import { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

function Example({user}:Props) {

  const [client, setClient] = useState(user);
     
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