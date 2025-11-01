import path from "path";
import fs from "fs";
import { MyProfile, MySite } from "@/widgets";

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
    <>
      <MyProfile auth={auth}  />
      <MySite site={site}/>
    </>
  )
}