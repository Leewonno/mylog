import MyProfile from "@/widgets/my/components/MyProfile";
import path from "path";
import fs from "fs";

const getAuthData = async () => {
  const filePath = path.join(process.cwd(), "blog", "auth.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}

const getSiteData = async () => {
  const filePath = path.join(process.cwd(), "blog", "info.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}


export default async function My() {
  const auth = await getAuthData();
  const site = await getSiteData();

  return (
    <MyProfile auth={auth} site={site} />
    // <MyUpdate />
  )
}