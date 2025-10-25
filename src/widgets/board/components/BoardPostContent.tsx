import fs from "fs";
import path from "path";
import MarkdownViewer from "@/widgets/write/components/MarkdownViewer";
import BoardTitle from "@/features/board/components/BoardTitle";
import BoardNotFound from "@/widgets/board/components/BoardNotFound";

export default async function BoardPostContent({ id }: { id: string }) {
  const filePath = path.join(process.cwd(), "post", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return <BoardNotFound />;
  }

  const fileContent = await fs.readFileSync(filePath, "utf-8");
  const { date, title, content } = JSON.parse(fileContent);

  return (
    <>
      <BoardTitle date={date}>{title}</BoardTitle>
      <MarkdownViewer content={content} />
    </>
  );
}