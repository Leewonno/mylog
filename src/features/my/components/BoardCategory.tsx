'use client'

import { Button } from "@/shares";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const CategoryName = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: var(--black);
  margin-bottom: 10px;
`

const ManageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: none;
  border: 1px solid var(--gray);
  outline: none;
  transition: all 0.3s;
  background-color: var(--white);
  color: var(--black);
  border-radius: 5px;
  
  &:focus {
    border: 1px solid var(--black);
  }
`

type Props = {
  name: string;
  category: string;
  setCategory: (value: string) => void;
  isChange: boolean;
  setIsChange: (value: boolean) => void;
  handleUpdate: () => void;
}

export function BoardCategory({ name, category, isChange, setIsChange, setCategory, handleUpdate }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isChange) {
      ref.current?.focus();
    }
  }, [isChange])

  return (
    <Component>
      <CategoryName>{name}</CategoryName>
      <ManageBox>
        <Input ref={ref} type="text" onChange={(e) => setCategory(e.target.value)} value={category} onClick={() => setIsChange(true)} />
        {isChange
          ?
          <Button onClick={handleUpdate} icon="edit_document">저장</Button>
          :
          <Button onClick={() => setIsChange(true)} icon="edit">수정</Button>
        }
      </ManageBox>
    </Component>
  )
}