'use client'

import { media } from "@/shares/lib/media"
import styled from "styled-components"

const Component = styled.div`
  width: 100%;
  display: flex;
  color: var(--black);
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;

  ${media.phone`
    font-size: 1.5rem;
  `}
`

type Props = {
  children: React.ReactNode;
}

export function BoardHeadTitle({ children }: Props) {
  return (
    <Component>
      <Title>{children}</Title>
    </Component>
  )
}