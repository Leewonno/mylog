import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // frontmatter 파싱용

export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const filePath = path.join(process.cwd(), "posts", `${params.id}.md`);

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ message: "파일을 찾을 수 없습니다." }, { status: 404 });
        }

        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data: meta, content } = matter(fileContent);

        return NextResponse.json({ meta, content });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("파일 읽기 오류:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}