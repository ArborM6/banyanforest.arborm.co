import { NextResponse } from "next/server"

const DOWNLOAD_URL = "https://testflight.apple.com/join/RUyn4qC5"

export function GET() {
  return NextResponse.redirect(DOWNLOAD_URL, 302)
}
