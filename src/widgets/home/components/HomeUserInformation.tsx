'use client'

import { RootState } from "@/shares/lib/redux/store"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import styled from "styled-components"
import githubDark from "@/assets/icons/github.svg";
import githubLight from "@/assets/icons/github-light.svg";
import emailDark from "@/assets/icons/email.svg";
import emailLight from "@/assets/icons/email-light.svg";

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 1.5rem;
`

const UserName = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: var(--black);
`

const LinkBox = styled.div`
  display: flex;
  gap: 10px;
`

const SvgIcon = styled(Image)`
`

const IconLink = styled(Link)`
  cursor: pointer;
  display: flex;
  user-select: none;
  transition: background-color 0s;
`

type UserDataType = {
  id: string;
  email?: string;
  github?: string;
}

type Props = {
  data: UserDataType;
}

export function HomeUserInformation({ data }: Props) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { id, email, github } = data;
  return (
    <Widget>
      <UserBox>
        <UserName>{id}</UserName>
      </UserBox>
      <LinkBox>
        {email ?
          <IconLink href={`mailto:${email}`}>
            {theme === 'dark' ?
              <SvgIcon alt="email" src={emailLight} width={40} height={40} />
              :
              <SvgIcon alt="email" src={emailDark} width={40} height={40} />
            }
          </IconLink>
          :
          <></>
        }
        {github ?
          <IconLink href={`https://github.com/Leewonno`} target="_blank">
            {theme === 'dark' ?
              <SvgIcon alt="github" src={githubLight} width={40} height={40} />
              :
              <SvgIcon alt="github" src={githubDark} width={40} height={40} />
            }
          </IconLink>
          :
          <></>
        }
      </LinkBox>
    </Widget>
  )
}