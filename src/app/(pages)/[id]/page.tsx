import BoardPostContent from "@/widgets/board/components/BoardPostContent";

// 블로그 포스트
export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;

  // 테스트용 인위적 지연
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <BoardPostContent id={id} />
  );
}