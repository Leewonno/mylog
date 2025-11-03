'use client'

import Image from "next/image"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../lib/redux/store"
import Link from "next/link"
import { useEffect, useState } from "react"

const Component = styled(Link)`
  cursor: pointer;
  display: flex;
  user-select: none;
  transition: background-color 0s;
  border-radius: 5px;
  padding: 5px;

  &:hover{
    background-color: var(--gray);
  }
`

const SvgWrapper = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
`

const Svg = styled(Image)``

type Props = {
  href: string;
  light: string;
  dark: string;
  alt: string;
}

export function SvgIcon({ href, light, dark, alt }: Props) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR 때는 아무것도 렌더하지 않음

  return (
    <Component href={href} target="_blank">
      {theme === 'dark' ? (
        <SvgWrapper>
          <Svg alt={alt} src={light} fill />
        </SvgWrapper>

      ) : (
        <SvgWrapper>
          <Svg alt={alt} src={dark} fill />
        </SvgWrapper>
      )}
    </Component>
  );
}