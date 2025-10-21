import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { readdirSync } from "fs";

export async function POST(request: Request) {
  const { filename, content, meta } = await request.json();

  if (!filename || !content) {
    return NextResponse.json({ message: "제목과 내용을 입력해주세요." }, { status: 400 });
  }

  const dir = path.join(process.cwd(), "tmp");
  await mkdir(dir, { recursive: true });

  // posts 폴더 안 파일 목록 확인
  const files = readdirSync(dir);

  // 숫자 파일명 추출 (["1.md", "2.md"] → [1, 2])
  const ids = files.map((file) => parseInt(path.parse(file).name)).filter((num) => !isNaN(num));

  // 새 ID
  const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1

  // frontmatter 생성
  let frontmatter = "---\n";
  if (meta) {
    for (const [key, value] of Object.entries(meta)) {
      frontmatter += `${key}: "${value}"\n`;
    }
  }
  frontmatter += "---\n\n";

  const fileContent = frontmatter + content;
  const filePath = path.join(dir, `${newId}.md`);
  await writeFile(filePath, fileContent, "utf-8");

  return NextResponse.json({ message: "저장되었습니다.", path: filePath });
}