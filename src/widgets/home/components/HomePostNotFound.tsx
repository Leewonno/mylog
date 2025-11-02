'use client'

import styled from "styled-components"

const Widget = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

const NoticeText = styled.div`
  color: var(--black);
`

export function HomePostNotFound() {
  return (
    <Widget>
      <NoticeText>
        게시글이 존재하지 않습니다.
      </NoticeText>
    </Widget>
  )
}