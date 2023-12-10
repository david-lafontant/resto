import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(request: Request, {params}: {params: {id:string}}){

const id = params.id;
const restaurant = await prisma.restaurant.findUnique({
  where: {
    id: parseInt(id, 10)
  }
})

return NextResponse.json(restaurant)


}