'use client'

import { BoardCategory } from "@/features"
import postData from "@/shares/lib/post"
import { setIsNameChange, setName } from "@/shares/lib/redux/features/user/userSlice"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid var(--gray);
  border-radius: 15px;
`


type Props = {
  auth: {
    id: string;
  };
}

interface AuthRequest {
  id: string;
}

interface AuthResponse {
  message: string;
}

export function MyProfile({ auth }: Props) {
  const name = useSelector((state: RootState) => state.user.name);
  const isNameChange = useSelector((state: RootState) => state.user.isNameChange);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=>{
    dispatch(setName(auth.id));
  }, [])

  const handleNameUpdate = async () => {
    try {
      const data = { id: name }
      const res = await postData<AuthRequest, AuthResponse>('/api/post/auth/id', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsNameChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  return (
    <Widget>
      {/* 유저 정보 설정 */}
      <BoardCategory
        name="사용자명"
        category={name}
        isChange={isNameChange}
        setCategory={(value) => dispatch(setName(value))}
        setIsChange={(value) => dispatch(setIsNameChange(value))}
        handleUpdate={handleNameUpdate} />
    </Widget>
  )
}