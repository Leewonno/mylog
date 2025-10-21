'use client'

import { useEffect, useState } from "react"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
`

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
`

const Category = styled.div`
  width: 15%;
  font-weight: 600;
  font-size: 25px;
  color: var(--black);
`

const CategoryManageBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const Name = styled.div`
  width: 90%;
  font-size: 25px;
  color: var(--black);
`

const Site = styled.div`
  width: 90%;
  font-size: 25px;
  color: var(--black);
`

const ChangeInput = styled.input`
  width: 90%;
  height: 40px;
  padding: 0 10px;
  font-size: 20px;
`

const ChangeButton = styled.button`
  height: 25px;
  width: 50px;
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

export default function MyProfile({ auth, site }: Props) {

  const [name, setName] = useState<string>(auth.id);
  const [siteName, setSiteName] = useState<string>(site.name);

  const [isNameChange, setIsNameChange] = useState<boolean>(false);
  const [isSiteNameChange, setIsSiteNameChange] = useState<boolean>(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`/api/get/auth`, {
  //       cache: "no-store", // SSR 매 요청마다 갱신
  //     });
  //     const data = await res.json();
  //     console.log(data)
  //     if (data) {
  //       const { id } = data.content
  //       setName(id)
  //     } else {
  //       return (
  //         <>오류가 발생했습니다.</>
  //       )
  //     }
  //   }

  //   getData();
  // }, [])

  const handleNameUpdate = () => {
    
  }

  const handleSiteNameUpdate = () => {

  }


  return (
    <Widget>
      {/* 유저 정보 설정 */}
      <CategoryBox>
        <Category>사용자명</Category>
        <CategoryManageBox>
          {isNameChange
            ?
            <ChangeInput type="text" onChange={(e) => setName(e.target.value)} value={name} />
            :
            <Name onClick={() => setIsNameChange(true)}>{name}</Name>
          }
          {isNameChange
            ?
            <ChangeButton onClick={handleNameUpdate}>저장</ChangeButton>
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
            <ChangeInput type="text" onChange={(e) => setSiteName(e.target.value)} value={siteName} />
            :
            <Site onClick={() => setIsSiteNameChange(true)}>{siteName}</Site>
          }
          {isSiteNameChange
            ?
            <ChangeButton onClick={handleSiteNameUpdate}>저장</ChangeButton>
            :
            <ChangeButton onClick={() => setIsSiteNameChange(true)}>수정</ChangeButton>
          }
        </CategoryManageBox>
      </CategoryBox>
    </Widget>
  )
}