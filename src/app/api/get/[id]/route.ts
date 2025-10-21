import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await context.params; // 👈 Promise로부터 구조분해

  try {
    const filePath = path.join(process.cwd(), "tmp", `${id}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { message: "파일을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: meta, content } = matter(fileContent);

    return NextResponse.json({ meta, content });
  } catch (error) {
    console.error("파일 읽기 오류:", error);
    const message =
      error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}