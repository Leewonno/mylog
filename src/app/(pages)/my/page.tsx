import path from "path";
import fs from "fs";
import { MyProfile, MySite } from "@/widgets";
import { Unauthorized } from "@/shares";

const getBlogData = async () => {
  const filePath = path.join(process.cwd(), "data.json");
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
  const data = await getBlogData();
  return (
    <>
      <MyProfile auth={data} />
      <MySite site={data} />
    </>
  )
}