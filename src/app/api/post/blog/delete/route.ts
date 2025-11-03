import { NextResponse } from "next/server";
import { access, unlink } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ message: "삭제할 ID가 없습니다." }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "post");
  const filePath = path.join(dir, `${id}.json`);

  try {
    // 파일 존재 여부 확인
    await access(filePath);
    // 파일 삭제
    await unlink(filePath);
    return NextResponse.json({ message: "삭제되었습니다." });
  } catch (error) {
    return NextResponse.json(
      { message: "파일을 찾을 수 없거나 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}