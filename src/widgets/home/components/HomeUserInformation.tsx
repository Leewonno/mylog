'use client'

import styled from "styled-components"
import githubDark from "@/assets/icons/github.svg";
import githubLight from "@/assets/icons/github-light.svg";
import emailDark from "@/assets/icons/email.svg";
import emailLight from "@/assets/icons/email-light.svg";
import address from "@/assets/icons/address.svg";
import addressLight from "@/assets/icons/address-light.svg";
import { SvgIcon } from "@/shares"
import { media } from "@/shares/lib/media";

const Widget = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.phone`
    gap: 1rem;
  `}
`

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 1rem;

  ${media.phone`
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  `}
`

const UserName = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: var(--black);
  padding: 5px 0;
`

const LinkBox = styled.div`
  display: flex;
`

type UserDataType = {
  id: string;
  email?: string;
  github?: string;
  portfolio?: string;
}

type Props = {
  data: UserDataType;
}

export function HomeUserInformation({ data }: Props) {
  const { id, email, github, portfolio } = data;
  return (
    <Widget>
      <UserBox>
        <UserName>{id}</UserName>
        <LinkBox>
          {portfolio ?
            <SvgIcon href={portfolio} light={addressLight} dark={address} alt="portfolio" />
            :
            <></>
          }
          {email ?
            <SvgIcon href={`mailto:${email}`} light={emailLight} dark={emailDark} alt="email" />
            :
            <></>
          }
          {github ?
            <SvgIcon href={github} light={githubLight} dark={githubDark} alt="github" />
            :
            <></>
          }
        </LinkBox>
      </UserBox>
    </Widget>
  )
}