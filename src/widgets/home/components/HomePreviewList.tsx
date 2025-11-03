'use client'

import { timeAgo } from "@/shares/lib/date"
import { getDefaultImage } from "@/shares/lib/getDefaultImage"
import { replaceContent } from "@/shares/lib/replace"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { HomePostNotFound } from "./HomePostNotFound"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import { setBoardListData, setSearchListData } from "@/shares/lib/redux/features/home/homeSlice"
import { media } from "@/shares/lib/media"

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* 맨 마지막 Item에 margin-bottom */
  &:nth-last-child(1) {
    margin-bottom: 2rem;
  }
`

const Item = styled.div`
  padding: 2.5rem 0;

  /* 맨 마지막 Item을 제외하고 border-bottom 주기 */
  &:not(:last-child) {
    border-bottom: 1px solid var(--gray);
  }

  ${media.phone`
    padding: 2rem 0;
  `}
`

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.phone`
    gap: 1rem;
  `}
`

const PostMainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`

const PostMainImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`

const PostTitle = styled.div`
  color: var(--black);
  font-weight: 600;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }

  ${media.phone`
    font-size: 20px;
  `}
`

const PostContent = styled.div`
  color: var(--white-gray);

  &:hover {
    text-decoration: underline;
  };
  
  ${media.phone`
    font-size: 15px;
  `}
`

const PostInforBox = styled.div`
  display: flex;
  gap: 5px;
`

const PostDate = styled.div`
  color: var(--white-lightgray-text);

  ${media.phone`
    font-size: 15px;
  `}
`

type Props = {
  data: BoardListType[];
}

export function HomePreviewList({ data }: Props) {
  const searchListData = useSelector((state: RootState) => state.home.searchListData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(setBoardListData(data));
    dispatch(setSearchListData(data));
  }, [])

  return (
    <Widget>
      {/* 게시물 */}
      {
        searchListData ?
        searchListData.map((v, i) => {
            const content = replaceContent(v.data.content);
            const firstImg: string | null = getDefaultImage(v.data.content);
            return (
              <Item key={`${i}`}>
                <PostLink href={`/${v.id}`} scroll={true}>
                  {
                    firstImg ?
                      <PostMainImageWrapper>
                        <PostMainImage src={firstImg} alt="main_img" fill unoptimized />
                      </PostMainImageWrapper>
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