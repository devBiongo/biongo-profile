import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = body.data.data;
    await db.accessLog.create({
      data: {
        ip: data.ip,
        hostname: data.hostname,
        city: data.city,
        region: data.region,
        country: data.country,
        postal: data.postal,
        timezone: data.timezone,
        org: data.org,
      },
    });
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({});
  }
}
