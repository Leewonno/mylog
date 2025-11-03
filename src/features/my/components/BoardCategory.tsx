'use client'

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

const Content = styled.div`
  width: 100%;
  font-size: 16px;
  color: var(--black);
  padding: 10px;
  padding-top: 0;
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: none;
  border: 1px solid var(--gray);
  outline: none;
  transition: all 0.3s;
  background-color: var(--white);
  color: var(--black);
  
  &:focus {
    border: 1px solid var(--black);
  }
`

const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 15px;
  white-space: nowrap;
  border-radius: 15px;
  border: 1px solid var(--gray);
  cursor: pointer;
  transition: background-color 0.3s;
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
        <Input ref={ref} type="text" onChange={(e) => setCategory(e.target.value)} value={category} />
        {/* {isChange
          ?
          <Input ref={ref} type="text" onChange={(e) => setCategory(e.target.value)} value={category} />
          :
          <Content onClick={() => setIsChange(true)}>{category}</Content>
        } */}
        {isChange
          ?
          <Button style={{ backgroundColor: 'var(--blue)', color: '#ffffff' }} onClick={handleUpdate}>저장</Button>
          :
          <Button onClick={() => setIsChange(true)}>수정</Button>
        }
      </ManageBox>
    </Component>
  )
}