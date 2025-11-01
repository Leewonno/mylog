import fs from "fs";
import path from "path";
import { BoardNotFound } from "./BoardNotFound";
import { MarkdownViewer } from "@/shares";
import { BoardTitle } from "@/features";

export async function BoardPostContent({ id }: { id: number }) {
  const filePath = path.join(process.cwd(), "post", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return <BoardNotFound />;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { date, title, content } = JSON.parse(fileContent);

  return (
    <>
      <BoardTitle date={date}>{title}</BoardTitle>
      <MarkdownViewer content={content} />
    </>
  );
}