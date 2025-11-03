import { MarkdownViewer } from "@/shares";

type Props = {
  content: string;
}

export async function BoardContent({ content }: Props) {
  return (
    <>
      <MarkdownViewer content={content} />
    </>
  );
}