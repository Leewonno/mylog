'use client'

import styled from "styled-components"

const Component = styled.div`
  display: flex;
  color: var(--white-lightgray-text);
`

const Text = styled.div`
  font-size: 16px;
`

type Props = {
  children: React.ReactNode;
}

export function BoardHeadData({ children }: Props) {
  return (
    <Component>
      <Text>{children}</Text>
    </Component>
  )
}