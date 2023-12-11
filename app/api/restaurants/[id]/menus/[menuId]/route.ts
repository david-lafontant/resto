import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {

  const menu = await prisma.menu.findFirst({
    where: {
      id: parseInt(menuId, 10),
    }
  })

  return NextResponse.json(menu)

}

export async function PUT(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {

  const json = await request.json();

  const updated = await prisma.menu.update({
    where: {
      id: parseInt(menuId, 10)
    },
    data: {
      name: json.name || null,
      description: json.description || null
    }
  })

  return NextResponse.json(updated)
}


export async function PATCH(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {
  const json = await request.json();
  
  const updated = await prisma.menu.update({
    where: {
      id: parseInt(menuId, 10),
    },
    data: json
  });
  
  return NextResponse.json(updated);
}


export async function DELETE(request: Request, { params: { id, menuId } }: { params: { id: string; menuId: string } }) {
  const deleted = await prisma.menu.delete({
    where: {
      id: parseInt(menuId, 10),
    },
  });
  return NextResponse.json(deleted);
}
