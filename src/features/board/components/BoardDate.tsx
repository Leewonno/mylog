'use client'

import styled from "styled-components"

const Component = styled.div`
  display: flex;
  color: var(--white-lightgray-text);
`

const Date = styled.div`
  font-size: 16px;
`

type Props = {
  children: React.ReactNode;
}

export function BoardDate({ children }: Props) {
  return (
    <Component>
      <Date>{children}</Date>
    </Component>
  )
}