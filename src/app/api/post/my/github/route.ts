import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

// github 경로 수정
export async function POST(request: Request) {
  const { github } = await request.json();
  if (!github) {
    return NextResponse.json(
      { message: "주소를 입력해주세요." },
      { status: 400 }
    );
  }
  // 경로 설정
  const filePath = path.join(process.cwd(), "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  // 값 업데이트
  data.github = github.indexOf('https://') > -1 || github.indexOf('http://') > -1 ? github : `https://${github}`;
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
  return NextResponse.json({ message: "저장되었습니다." });
}