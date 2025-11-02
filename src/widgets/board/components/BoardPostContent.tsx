import { MarkdownViewer } from "@/shares";
import { BoardTitle } from "@/features";

type Props = {
  date: string;
  title: string;
  content: string;
}

export async function BoardPostContent({ date, title, content }: Props) {
  return (
    <>
      <BoardTitle date={date}>{title}</BoardTitle>
      <MarkdownViewer content={content} />
    </>
  );
}