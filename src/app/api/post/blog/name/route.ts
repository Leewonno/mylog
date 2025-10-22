import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

// info.json name 수정
export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json(
      { message: "사이트명을 입력해주세요." },
      { status: 400 }
    );
  }
  const filePath = path.join(process.cwd(), "blog", "info.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const infoData = JSON.parse(fileData);
  infoData.name = name;
  fs.writeFileSync(filePath, JSON.stringify(infoData), "utf-8");
  return NextResponse.json({ message: "저장되었습니다." });
}