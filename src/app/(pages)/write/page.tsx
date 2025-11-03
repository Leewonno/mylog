import { Unauthorized } from "@/shares";
import { WriteEditor } from "@/widgets";

export default async function BlogPostCreate() {
  // 개발 환경 체크
  if (process.env.NODE_ENV !== 'development') {
    return (
      <Unauthorized />
    )
  }
  return (
    <WriteEditor />
  )
}