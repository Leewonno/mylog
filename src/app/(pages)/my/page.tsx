import path from "path";
import fs from "fs";
import { MyProfile, MySite } from "@/widgets";
import { Unauthorized } from "@/shares";

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
  // 개발 환경 체크
  if (process.env.NODE_ENV !== 'development') {
    return (
      <Unauthorized />
    )
  }
  // 개인정보, 사이트정보 불러오기
  const auth = await getAuthData();
  const site = await getSiteData();
  return (
    <>
      <MyProfile auth={auth} />
      <MySite site={site} />
    </>
  )
}