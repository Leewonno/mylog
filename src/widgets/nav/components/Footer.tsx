'use client'

import Link from "next/link"
import styled from "styled-components"
import github from "@/assets/icons/github.svg"
import githubLight from "@/assets/icons/github-light.svg"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootState } from "@/shares/lib/redux/store"

const Widget = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100px;
  background-color: var(--white);
  border-top: 1px solid #e5e5e5;
`

const NameBox = styled.div`
  
`

const Name = styled.div`
  color: var(--black);
`

const ProviderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Provider = styled(Link)`
  color: var(--black);
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: 2px;
`

const ProviderIcon = styled(Image)`
`

const ProviderText = styled.div`
`

type FooterProps = {
  name: string;
}

export function Footer({ name }: FooterProps) {

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Widget>
      <NameBox>
        <Name>2025 · MyLog · {name}</Name>
      </NameBox>
      <ProviderBox>
        <Provider href={"https://github.com/Leewonno"} target="_blank">
          {theme === 'dark' ?
            <ProviderIcon alt="github" src={githubLight} width={22} height={22} />
            :
            <ProviderIcon alt="github" src={github} width={22} height={22} />
          }
          <ProviderText>Developer</ProviderText>
        </Provider>
      </ProviderBox>
    </Widget>
  )
}