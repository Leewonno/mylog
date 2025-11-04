'use client'

import { BoardHeadData, BoardHeadTitle } from "@/features";
import { LinkButton } from "@/shares";
import { timeAgo } from "@/shares/lib/date";
import { media } from "@/shares/lib/media";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--white-lightgray);

  ${media.phone`
    gap: 0.5rem;
    margin-bottom: 2rem;
  `}
`

const BoardInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`

const BoardMetaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Dot = styled.div`
  border: 1px solid var(--white-lightgray-text);
  height: 1px;
  border-radius: 50%;
`

type Props = {
  id: number;
  name: string;
  title: string;
  date: string;
}

export function BoardHead({ id, name, title, date }: Props) {

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <Widget>
      <BoardHeadTitle>{title}</BoardHeadTitle>
      <BoardInfoBox>
        <BoardMetaBox>
          <BoardHeadData>{name}</BoardHeadData>
          <Dot />
          <BoardHeadData>{timeAgo(date)}</BoardHeadData>
        </BoardMetaBox>
        {
          isDev ?
            <LinkButton href={`/write/${id}`} icon="edit">수정</LinkButton>
            :
            <></>
        }

      </BoardInfoBox>
    </Widget>
  )
}