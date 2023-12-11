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


