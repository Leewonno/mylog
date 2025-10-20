import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  const filePath = path.join(process.cwd(), "posts", `${id}.md`);
  if (!fs.existsSync(filePath)) {
    return <div>파일을 불러올 수 없습니다.</div>;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: meta, content } = matter(fileContent);
  if (!fs.existsSync(filePath)) {
    return <div>파일을 불러올 수 없습니다.</div>;
  }
  return <h1>Blog post: {content} {meta.date}</h1>
}