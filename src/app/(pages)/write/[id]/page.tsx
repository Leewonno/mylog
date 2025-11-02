import path from "path";
import fs from 'fs';
import { BoardNotFound, WriteEditor } from "@/widgets";
import { Unauthorized } from "@/shares";

export default async function BlogPostUpdate(props: PageProps<'/[id]'>) {
  // 개발 환경 체크
  if (process.env.NODE_ENV !== 'development') {
    return (
      <Unauthorized />
    )
  }
  const { id } = await props.params;
  const filePath = path.join(process.cwd(), "post", `${id}.json`);
  if (!fs.existsSync(filePath)) {
    return <BoardNotFound />;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { title, content, date } = JSON.parse(fileContent);
  return (
    <WriteEditor id={Number(id)} postTitle={title} postContent={content} postDate={date} />
  )
}