import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ⚙️ Next.js 15 빌드 호환 버전
export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const filePath = path.join(process.cwd(), "posts", `${params.id}.md`);

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