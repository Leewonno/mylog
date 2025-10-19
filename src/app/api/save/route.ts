import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const { filename, content, meta } = await request.json();

  if (!filename || !content) {
    return NextResponse.json({ message: "Filename and content required" }, { status: 400 });
  }

  // frontmatter 생성
  let frontmatter = "---\n";
  if (meta) {
    for (const [key, value] of Object.entries(meta)) {
      frontmatter += `${key}: "${value}"\n`;
    }
  }
  frontmatter += "---\n\n";

  const fileContent = frontmatter + content;

  const postsDir = path.join(process.cwd(), "posts");
  await mkdir(postsDir, { recursive: true });
  const filePath = path.join(postsDir, `${filename}.md`);
  await writeFile(filePath, fileContent, "utf-8");

  return NextResponse.json({ message: "File saved successfully", path: filePath });
}