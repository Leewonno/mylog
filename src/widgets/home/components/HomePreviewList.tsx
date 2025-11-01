'use client'

import { timeAgo } from "@/shares/lib/date"
import { getDefaultImage } from "@/shares/lib/getDefaultImage"
import { replaceContent } from "@/shares/lib/replace"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { HomePostNotFound } from "./HomePostNotFound"

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:nth-last-child(1) {
    margin-bottom: 2rem;
  }
`

const Item = styled.div`
  border-bottom: 1px solid var(--gray);
  /* margin-top: 1.5rem; */
  padding: 2.5rem 0;
`

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const PostDefaultImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`

const PostTitle = styled.div`
  color: var(--black);
  font-weight: 600;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }
`

const PostContent = styled.div`
  color: var(--white-gray);

  &:hover {
    text-decoration: underline;
  }
`

const PostInforBox = styled.div`
  display: flex;
  gap: 5px;
`

const PostDate = styled.div`
  color: var(--white-lightgray);
`

type Props = {
  data: BoardListType[];
}

export function HomePreviewList({ data }: Props) {
  return (
    <Widget>
      {/* 게시물 */}
      {
        data ?
        data.map((v, i) => {
          const content = replaceContent(v.data.content);
          const firstImg: string | null = getDefaultImage(v.data.content);
          return (
            <Item key={`${i}`}>
              <PostLink href={`/${v.id}`}>
                {
                  firstImg ?
                    <PostDefaultImage src={firstImg} alt="default_img" width={1000} height={400} />
                    :
                    <></>
                }
                <PostTitle>{v.data.title}</PostTitle>
                <PostContent>{content.slice(0, 400)}{content.length > 400 ? '...' : ''}</PostContent>
                <PostInforBox>
                  <PostDate>{timeAgo(v.data.date)}</PostDate>
                </PostInforBox>
              </PostLink>
            </Item>
          )
        })
        :
        <HomePostNotFound />
      }
    </Widget>
  )
}