import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params: { id, menuId,menuItemId } }: { params: { id: string; menuId: string; menuItemId:string  } }){

  const menuItem = await prisma.menuItem.findFirst({
    where: {
      id: parseInt(menuItemId, 10),
    }
  })

  return NextResponse.json(menuItem)

}


export async function PUT(request: Request, { params: { id, menuId,menuItemId } }: { params: { id: string; menuId: string; menuItemId:string  } }) {

  const json = await request.json();

  const updated = await prisma.menuItem.update({
    where: {
      id: parseInt(menuItemId, 10)
    },
    data: {
      name: json.name || null,
      description: json.description || null,
      price: json.price || null
    }
  })

  return NextResponse.json(updated)
}