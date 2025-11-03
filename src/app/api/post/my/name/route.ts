import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

// site name 수정
export async function POST(request: Request) {
  const { name } = await request.json();
  if (!name) {
    return NextResponse.json(
      { message: "사이트명을 입력해주세요." },
      { status: 400 }
    );
  }
  const filePath = path.join(process.cwd(), "data.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  data.name = name;
  fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
  return NextResponse.json({ message: "저장되었습니다." });
}