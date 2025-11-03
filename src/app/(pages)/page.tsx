import path from "path";
import fs from "fs";
import { HomePreviewList, HomeSearch, HomeUserInformation } from "@/widgets";


const getAuthData = async () => {
  const filePath = path.join(process.cwd(), "blog", "auth.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}

const getBlogData = async () => {
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
  const userData = await getAuthData();
  const blogData: BoardListType[] = await getBlogData();

  return (
    <>
      <HomeUserInformation data={userData} />
      <HomeSearch />
      <HomePreviewList data={blogData} />
    </>
  );
}
