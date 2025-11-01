'use client'

import { AppDispatch } from "@/shares/lib/redux/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const CategoryName = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--black);
  margin-bottom: 10px;
`

const ManageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`

const Content = styled.div`
  width: 100%;
  font-size: 22px;
  color: var(--black);
  padding: 10px 10px;
  padding-top: 0;
`

const Input = styled.input`
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

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 15px;
  white-space: nowrap;
  border-radius: 15px;
  border: 1px solid var(--gray);
  cursor: pointer;
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
  // const dispatch = useDispatch<AppDispatch>();
  // const [category, setCategory] = useState<string>(content);
  // const [isChange, setIsChange] = useState<boolean>(false);

  useEffect(() => {
    if (isChange) {
      ref.current?.focus();
    }
  }, [isChange])

  return (
    <Component>
      <CategoryName>{name}</CategoryName>
      <ManageBox>
        {isChange
          ?
          <Input ref={ref} type="text" onChange={(e) => setCategory(e.target.value)} value={category} />
          :
          <Content onClick={() => setIsChange(true)}>{category}</Content>
        }
        {isChange
          ?
          <Button style={{ backgroundColor: '#007bff', color: '#ffffff' }} onClick={handleUpdate}>저장</Button>
          :
          <Button onClick={() => setIsChange(true)}>수정</Button>
        }
      </ManageBox>
    </Component>
  )
}