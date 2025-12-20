import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, eventType, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Email functionality will be implemented once Resend API key is provided
    // For now, just log the submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      eventType,
      message,
    })

    return NextResponse.json(
      { message: 'Form submitted successfully. Email functionality pending API key setup.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process form submission. Please try again later.',
        details: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.message : 'Unknown error')
          : undefined
      },
      { status: 500 }
    )
  }
}

