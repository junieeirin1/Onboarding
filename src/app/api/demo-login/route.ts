import { NextRequest, NextResponse } from 'next/server'
import { demoUsers } from '@/data/demo-data'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = String(formData.get('email') ?? '')
  const user = demoUsers.find((item) => item.email === email)
  const response = NextResponse.redirect(new URL('/', request.url))

  if (!user) return NextResponse.redirect(new URL('/login', request.url))

  response.cookies.set('hycast_user', user.email, { httpOnly: true, path: '/' })
  return response
}
