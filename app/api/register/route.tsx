import { schema } from '@/app/registrationSchema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parased = schema.safeParse(data);

  if (parased.success) {
    return NextResponse.json({ message: 'User registered' });
  } else {
    return NextResponse.json(
      { message: 'Invalid data', error: parased.error },
      { status: 400 }
    );
  }
}
