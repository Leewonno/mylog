'use client'

import { BoardDate, BoardName, BoardTitle } from "@/features";
import { timeAgo } from "@/shares/lib/date";
import Link from "next/link";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--white-lightgray);
`

const BoardInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const BoardMetaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const BoardDot = styled.div`
  border: 1px solid var(--white-lightgray-text);
  height: 1px;
  border-radius: 50%;
`

const BoardButtonBox = styled.div`
  display: flex;
`

const BoardButton = styled(Link)`
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  cursor: pointer;
  border: 1px solid #efefef;
  box-sizing: border-box;
  transition: background-color 0.3s;
  background-color: #f3f3f3;
  font-size: 14px;
  color: #000;

  &:hover {
    background-color: #dfdfdf;
  }
`

type Props = {
  id: number;
  name: string;
  title: string;
  date: string;
}

export function BoardManagement({ id, name, title, date }: Props) {

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <Widget>
      <BoardTitle>{title}</BoardTitle>
      <BoardInfoBox>
        <BoardMetaBox>
          <BoardName>{name}</BoardName>
          <BoardDot />
          <BoardDate>{timeAgo(date)}</BoardDate>
        </BoardMetaBox>
        {
          isDev ?
            <BoardButtonBox>
              <BoardButton href={`/write/${id}`}>수정</BoardButton>
            </BoardButtonBox>
            :
            <></>
        }

      </BoardInfoBox>
    </Widget>
  )
}