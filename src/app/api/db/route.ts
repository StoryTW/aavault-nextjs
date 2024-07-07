import dbConnect from '@/app/lib/dbConnection';
import Email from '@/app/models/Email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await dbConnect().catch(err => {
    console.error('Database connection failed:', err);
    return NextResponse.error();
  });
  
  try {
    const email = (await req.json()).email;
    const newDocEmail = await Email.create(email);
    return NextResponse.json(newDocEmail);
  } catch (error) {
    console.error('Error during email creation:', error);
    return NextResponse.error();
  }
}
