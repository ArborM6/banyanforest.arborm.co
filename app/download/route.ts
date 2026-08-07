import { NextResponse } from "next/server"

const DOWNLOAD_URL = "https://apps.apple.com/app/%E7%8D%A8%E6%9C%A8%E6%88%90%E6%9E%97/id6760972773"

export function GET() {
  return NextResponse.redirect(DOWNLOAD_URL, 302)
}
