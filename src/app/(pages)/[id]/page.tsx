import { BoardComment, BoardNotFound, BoardContent, BoardManagement } from "@/widgets";
import path from "path";
import fs from 'fs';
import { Metadata } from "next";

type BoardData = {
  title: string;
  date: string;
  content: string;
};

// 데이터 로드 함수
async function getBoardData(id: number): Promise<BoardData | null> {
  const filePath = path.join(process.cwd(), "post", `${id}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content;
}

// 파일 읽기
const getUserData = async () => {
  const filePath = path.join(process.cwd(), "blog", "auth.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);
  return content
}

// title, description 변경
export async function generateMetadata(props: PageProps<'/[id]'>): Promise<Metadata> {
  const { id } = await props.params;
  const data = await getBoardData(Number(id));
  if (!data) {
    return { title: "게시글을 찾을 수 없습니다." };
  }
  return {
    title: data.title,
    description: data.content,
  };
}

// 블로그 포스트
export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  const boardData = await getBoardData(Number(id));
  const userData = await getUserData();

  if (!boardData) {
    return <BoardNotFound />;
  }
  // 테스트용 인위적 지연
  // await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <>
      {/* 제목 */}
      <BoardManagement
        id={Number(id)}
        title={boardData.title}
        date={boardData.date}
        name={userData.id} />
      {/* 본문 */}
      <BoardContent
        content={boardData.content} />
      {/* 이메일 */}
      <BoardComment
        name={userData.id}
        email={userData.email} />
    </>
  );
}