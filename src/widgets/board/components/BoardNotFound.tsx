'use client'

import Link from "next/link"
import styled from "styled-components"

const Widget = styled.div`
  
`

const NoticeText = styled.div`
  color: var(--black);
`

const HomeLink = styled(Link)`
  text-decoration: underline;
  color: var(--black);
`

export default function BoardNotFound() {
  return (
    <Widget>
      <NoticeText>
        존재하지 않는 게시물입니다.
      </NoticeText>
      <HomeLink href={'/'}>
        홈으로
      </HomeLink>
    </Widget>
  )
}