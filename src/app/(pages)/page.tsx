import path from "path";
import fs from "fs";
import { HomePreviewList, HomeSearch, HomeUserInformation } from "@/widgets";


const getBlog = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}

const getPosts = async () => {
  const dir = path.join(process.cwd(), "post");
  const files = fs.readdirSync(dir);
  const posts: BoardListType[] = files
    .filter((f) => f.endsWith(".json"))
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const data: BoardDataType = JSON.parse(fileContent);
      const id = Number(filename.replace(".json", ""));
      return { id, data } as BoardListType;
    }).sort((a, b) => b.id - a.id);
  return posts
}

export default async function Home() {
  const blog = await getBlog();
  const posts: BoardListType[] = await getPosts();

  return (
    <>
      <HomeUserInformation data={blog} />
      <HomeSearch />
      <HomePreviewList data={posts} />
    </>
  );
}
