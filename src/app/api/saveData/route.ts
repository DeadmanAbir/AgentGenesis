import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../Model/Schema';
import { connect } from 'mongoose';

const uri: string = process.env.DATABASE_URL || '';

export async function POST(request: NextRequest) {
  try {
    await connect(uri);
    const { name, email } = await request.json();
    const person = new User({
      name,
      email,
    });
    await person.save();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in POST: ', err);
    return NextResponse.json({ success: false });
  }
}
