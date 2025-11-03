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
  font-weight: 700;

  ${media.phone`
    font-size: 1.5rem;
    margin-bottom: 1rem;
  `}
`

type Props = {
  children: React.ReactNode;
}

export function BoardTitle({ children }: Props) {
  return (
    <Component>
      <Title>{children}</Title>
    </Component>
  )
}