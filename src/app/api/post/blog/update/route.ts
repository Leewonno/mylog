import { NextResponse } from "next/server";
import { writeFile, mkdir, access } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const { id, title, content, date } = await request.json();

  if (!id) {
    return NextResponse.json(
      { message: "수정할 파일의 ID가 없습니다." },
      { status: 400 }
    );
  }

  if (!title || !content) {
    return NextResponse.json(
      { message: "제목과 내용을 입력해주세요." },
      { status: 400 }
    );
  }

  const dir = path.join(process.cwd(), "post");
  await mkdir(dir, { recursive: true });
  const filePath = path.join(dir, `${id}.json`);

  try {
    // 파일 존재 여부 확인
    await access(filePath);
  } catch {
    return NextResponse.json(
      { message: "수정할 파일이 존재하지 않습니다." },
      { status: 404 }
    );
  }

  // 수정할 내용
  const fileContent = {
    title,
    content,
    date,
  };

  try {
    await writeFile(filePath, JSON.stringify(fileContent, null, 2), {
      encoding: "utf-8",
    });
    return NextResponse.json({
      message: "수정되었습니다.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "파일 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}