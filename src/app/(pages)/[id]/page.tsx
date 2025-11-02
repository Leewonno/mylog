import { BoardNotFound, BoardPostContent } from "@/widgets";
import path from "path";
import fs from 'fs';
import { Metadata } from "next";

type PostData = {
  title: string;
  date: string;
  content: string;
};

// 데이터 로드 함수
async function getPostData(id: number): Promise<PostData | null> {
  const filePath = path.join(process.cwd(), "post", `${id}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContent);
  return data;
}

// title, description 변경
export async function generateMetadata(props: PageProps<'/[id]'>): Promise<Metadata> {
  const { id } = await props.params;
  const data = await getPostData(Number(id));

  if (!data) {
    return { title: "게시글을 찾을 수 없습니다." };
  }

  return {
    title: data.title,
    description: "DB가 필요 없는 나만의 블로그",
  };
}

// 블로그 포스트
export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  const data = await getPostData(Number(id));

  if (!data) {
    return <BoardNotFound />;
  }

  // 테스트용 인위적 지연
  // await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <BoardPostContent date={data.date} title={data.title} content={data.content} />
  );
}