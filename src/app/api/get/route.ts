import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const postsDir = path.join(process.cwd(), "tmp");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
      const { data: meta } = matter(fileContent);
      const slug = filename.replace(".md", "");
      return { slug, ...meta };
    });

  return NextResponse.json(posts);
}