'use client'

import React from "react"
import styled from "styled-components";
import { media } from "../lib/media";

const Wrapper = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 20px;


  ${media.phone`
  `}
`

const Box = styled.div`
  width: 1000px;
  padding-top: 100px;

  ${media.phone`
    width: 100%;
    padding-top: 60px;
  `}
`

type Props = {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Wrapper>
      <Box>
        {children}
      </Box>
    </Wrapper>
  )
}