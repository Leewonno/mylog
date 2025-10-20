import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownViewer from "@/widgets/write/components/MarkdownViewer";

export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  const filePath = path.join(process.cwd(), "posts", `${id}.md`);
  if (!fs.existsSync(filePath)) {
    return <div>파일을 불러올 수 없습니다.</div>;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: meta, content } = matter(fileContent);
  return (
    <>
      <h1>{meta.title} {meta.date}</h1>
      <MarkdownViewer content={content} />
    </>

  )
}