'use client'

import styled from "styled-components"

const Component = styled.div`
  width: 100%;
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: 600;
  color: var(--black);
  background-color: var(--white);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray);
`

type Props = {
  title: string;
}

export default function BoardTitle({ title }: Props) {
  return (
    <Component>
      {title}
    </Component>
  )
}