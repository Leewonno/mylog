import { NextResponse } from "next/server";
import path from "path";

// auth.json password 수정
export async function POST(request: Request) {
  const { password } = await request.json();

  if (!password) {
    return NextResponse.json(
      { message: "비밀번호를 입력해주세요." },
      { status: 400 }
    );
  }

  // auth.json 경로 — 필요에 따라 경로를 수정하세요.
  const filePath = path.join(process.cwd(), "blog/auth.json");
  console.log(filePath)

  return NextResponse.json({ message: "저장되었습니다.", path: filePath });
}