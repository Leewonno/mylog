export default async function BlogPostUpdate(props: PageProps<'/[id]'>) {
  const { id } = await props.params;
  return <h1>Blog update: {id}</h1>
}