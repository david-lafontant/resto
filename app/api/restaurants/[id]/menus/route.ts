import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request, {params}:{params:{id:string}}) {
  const menus = await prisma.menu.findMany({
    where: {
      restaurantId: Number(params.id)
    }
  });
  return NextResponse.json(menus);
}

