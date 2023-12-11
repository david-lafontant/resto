import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {

  const menu = await prisma.menuItem.findMany({
    where: {
      menuId: parseInt(menuId, 10),
    }
  })

  return NextResponse.json(menu)

}

export async function POST(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {
  const json = await request.json();
  const created = await prisma.menuItem.create({
    data: {
      ...json,
      menuId: parseInt(menuId,10)


    }
  });
  return new NextResponse(JSON.stringify(created), { status: 201 });

}


