import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

// email 수정
export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json(
      { message: "이메일을 입력해주세요." },
      { status: 400 }
    );
  }
  const filePath = path.join(process.cwd(), "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  data.email = email;
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
  return NextResponse.json({ message: "저장되었습니다." });
}