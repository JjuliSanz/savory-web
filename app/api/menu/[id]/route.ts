import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: `obteniendo item del menu: ${params.id}`,
  });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: `borrando item del menu: ${params.id}`,
  });
}
export function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({
    message: `actualizando item del menu: ${params.id}`,
  });
}