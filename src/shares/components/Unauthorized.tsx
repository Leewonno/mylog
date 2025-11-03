'use client'

import Link from "next/link"
import styled from "styled-components"

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`

const Message = styled.div`
  color: var(--black);
`

const HomeLink = styled(Link)`
  text-decoration: underline;
`

export function Unauthorized() {
  return (
    <Component>
      <Message>
        접근 권한이 없습니다.
      </Message>
      <Message>
        개발 환경에서 접속해 주세요.
      </Message>
      <Message>
        <HomeLink href={`/`}>홈으로</HomeLink>
      </Message>
    </Component>
  )
}