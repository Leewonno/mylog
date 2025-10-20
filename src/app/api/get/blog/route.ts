import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _: NextRequest
): Promise<NextResponse> {
  const filePath = path.join(process.cwd(), "blog", `info.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);  // JSON 파싱
  return NextResponse.json({ content });
}

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`/api/get/blog`, {
  //       cache: "no-store", // SSR 매 요청마다 갱신
  //     });
  //     const data = await res.json();
  //     const { name } = data.content;
  //     setBlogName(name);
  //   }

  //   getData();
  // }, [])
