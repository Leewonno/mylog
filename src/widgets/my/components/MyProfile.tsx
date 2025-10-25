'use client'

import postData from "@/shares/lib/post"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 15px;
`

const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const Category = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--black);
  margin-bottom: 10px;
`

const CategoryManageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`

const CategoryContent = styled.div`
  width: 100%;
  font-size: 22px;
  color: var(--black);
  padding: 10px 10px;
  padding-top: 0;
  /* border-bottom: 1px solid var(--gray); */
`

const ChangeInput = styled.input`
  width: 100%;
  font-size: 22px;
  padding: 10px 10px;
  padding-top: 0;
  border: none;
  border-bottom: 1px solid var(--gray);
  outline: none;
  transition: all 0.3s;
  background-color: var(--white);
  color: var(--black);
  
  &:focus {
    border-bottom: 1px solid var(--black);
  }
`

const ChangeButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 15px;
  white-space: nowrap;
  border-radius: 15px;
  border: 1px solid var(--gray);
  cursor: pointer;
`

type Props = {
  auth: {
    id: string;
  };
  site: {
    name: string;
  }
}

interface AuthRequest {
  id: string;
}

interface AuthResponse {
  message: string;
}

interface BlogRequest {
  name: string;
}

interface BlogResponse {
  message: string;
}



export default function MyProfile({ auth, site }: Props) {

  const nameRef = useRef<HTMLInputElement>(null);
  const siteRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>(auth.id);
  const [siteName, setSiteName] = useState<string>(site.name);

  const [isNameChange, setIsNameChange] = useState<boolean>(false);
  const [isSiteNameChange, setIsSiteNameChange] = useState<boolean>(false);

  const handleNameUpdate = async () => {
    try {
      const data = { id: name }
      const result = await postData<AuthRequest, AuthResponse>('/api/post/auth/id', data);
      const { message } = result;
      alert(message);
      setIsNameChange(false);
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  const handleSiteNameUpdate = async () => {
    try {
      const data = { name: siteName }
      const result = await postData<BlogRequest, BlogResponse>('/api/post/my/name', data);
      const { message } = result;
      alert(message);
      setIsSiteNameChange(false);
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  useEffect(() => {
    if (isNameChange) {
      nameRef.current?.focus();
    }
  }, [isNameChange])

  useEffect(() => {
    if (isSiteNameChange) {
      siteRef.current?.focus();
    }
  }, [isSiteNameChange])

  return (
    <Widget>
      {/* 유저 정보 설정 */}
      <CategoryBox>
        <Category>사용자명</Category>
        <CategoryManageBox>
          {isNameChange
            ?
            <ChangeInput ref={nameRef} type="text" onChange={(e) => setName(e.target.value)} value={name} />
            :
            <CategoryContent onClick={() => setIsNameChange(true)}>{name}</CategoryContent>
          }
          {isNameChange
            ?
            <ChangeButton style={{ backgroundColor: '#007bff', color: '#ffffff' }} onClick={handleNameUpdate}>저장</ChangeButton>
            :
            <ChangeButton onClick={() => setIsNameChange(true)}>수정</ChangeButton>
          }
        </CategoryManageBox>
      </CategoryBox>
      {/* 사이트 설정 */}
      <CategoryBox>
        <Category>사이트명</Category>
        <CategoryManageBox>
          {isSiteNameChange
            ?
            <ChangeInput ref={siteRef} type="text" onChange={(e) => setSiteName(e.target.value)} value={siteName} />
            :
            <CategoryContent onClick={() => setIsSiteNameChange(true)}>{siteName}</CategoryContent>
          }
          {isSiteNameChange
            ?
            <ChangeButton style={{ backgroundColor: '#007bff', color: '#ffffff' }} onClick={handleSiteNameUpdate}>저장</ChangeButton>
            :
            <ChangeButton onClick={() => setIsSiteNameChange(true)}>수정</ChangeButton>
          }
        </CategoryManageBox>
      </CategoryBox>
    </Widget>
  )
}