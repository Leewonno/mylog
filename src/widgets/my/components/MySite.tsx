'use client'

import { BoardCategory } from "@/features"
import Icon from "@/shares/components/Icon"
import postData from "@/shares/lib/post"
import { setIsSiteNameChange, setSiteName } from "@/shares/lib/redux/features/site/siteSlice"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

const WidgetTitle = styled.div`
  color: var(--black);
  font-size: 22px;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`

type Props = {
  site: {
    name: string;
  }
}

interface BlogRequest {
  name: string;
}

interface BlogResponse {
  message: string;
}

export function MySite({ site }: Props) {

  const siteName = useSelector((state: RootState) => state.site.siteName);
  const isSiteNameChange = useSelector((state: RootState) => state.site.isSiteNameChange);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setSiteName(site.name));
  }, [])

  const handleSiteNameUpdate = async () => {
    try {
      const data = { name: siteName }
      const res = await postData<BlogRequest, BlogResponse>('/api/post/my/name', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsSiteNameChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  return (
    <Widget>
      <WidgetTitle>
        <Icon name="web_asset" size="25px" color="var(--black)" />
        사이트 설정
      </WidgetTitle>
      {/* 사이트 설정 */}
      <BoardCategory
        name="블로그명"
        category={siteName}
        isChange={isSiteNameChange}
        setCategory={(value) => dispatch(setSiteName(value))}
        setIsChange={(value) => dispatch(setIsSiteNameChange(value))}
        handleUpdate={handleSiteNameUpdate} />
    </Widget>
  )
}