export default async function BlogPost(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  console.log(id)
  const res = await fetch(`/api/get/${id}`, {
    cache: "no-store", // SSR 매 요청마다 갱신
  });

  console.log(res)

  if (!res.ok) {
    return <div>파일을 불러올 수 없습니다.</div>;
  }

  const data = await res.json();
  return <h1>Blog post: {id}</h1>
}