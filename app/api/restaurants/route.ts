import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const restaurants = await prisma.restaurant.findMany();
  return NextResponse.json(restaurants);
}
