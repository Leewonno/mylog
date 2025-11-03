'use client'

import Icon from "@/shares/components/Icon"
import Link from "next/link"
import styled from "styled-components"

const Widget = styled.div`
  background-color: #f8f8f8;
  padding: 30px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #000;
`

const LargeText = styled.div`
  font-size: 1.2rem;
`

const Text = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const Bold = styled.div`
  font-weight: 600;
`

const Button = styled(Link)`
  border: 1px solid #efefef;
  padding: 3px 12px;
  border-radius: 15px;
  background-color: #ececec;
  display: flex;
  gap: 2px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #dfdfdf;
  }
`

type Props = {
  name: string;
  email: string;
}

export function BoardComment({ name, email }: Props) {
  return (
    <Widget>
      <LargeText>
        이 포스트에 대해 이야기를 나누고 싶다면,
      </LargeText>
      <Text>
        <Bold>{name}</Bold>님에게
        <Button href={`mailto:${email}`}>
          <Icon name={'email'} size={'18px'} color={'#000'}  />
          이메일 보내기
        </Button>
      </Text>

    </Widget>
  )
}