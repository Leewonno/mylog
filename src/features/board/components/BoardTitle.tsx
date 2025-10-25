'use client'

import { timeAgo } from "@/shares/lib/date"
import styled from "styled-components"

const Component = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--black);
  background-color: var(--white);
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`

const Date = styled.div`
  
`

type Props = {
  children: React.ReactNode;
  date: string;
}

export default function BoardTitle({ children, date }: Props) {
  return (
    <Component>
      <Title>{children}</Title>
      <Date>{timeAgo(date)}</Date>
    </Component>
  )
}