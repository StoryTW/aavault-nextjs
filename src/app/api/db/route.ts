import dbConnect from '@/app/lib/dbConnection';
import Email from '@/app/models/Email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  const email = (await req.json()).email;

  const newDocEmail = await Email.create(req.body);

  return NextResponse.json(newDocEmail);
}
