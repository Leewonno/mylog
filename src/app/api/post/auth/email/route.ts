import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

// auth.json email 수정
export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { message: "이메일을 입력해주세요." },
      { status: 400 }
    );
  }

  // auth.json 경로 설정
  const filePath = path.join(process.cwd(), "blog", "auth.json");

  // 기존 auth.json 읽기
  const fileData = fs.readFileSync(filePath, "utf-8");
  const authData = JSON.parse(fileData);

  // id 값 업데이트
  authData.email = email;

  // 수정된 내용 다시 쓰기 (들여쓰기 2칸 유지)
  fs.writeFileSync(filePath, JSON.stringify(authData), "utf-8");

  return NextResponse.json({ message: "저장되었습니다." });
}