'use client'

import Icon from "@/shares/components/Icon"
import { setTheme } from "@/shares/lib/redux/features/theme/themeSlice"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Widget = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: var(--white);
`

const LogoBox = styled.div`
  
`

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  color: var(--black);
`

const ThemeBox = styled.div`
  
`

const ThemeCheckBox = styled.input`
  display: none;
`

const ThemeIconBox = styled.label`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  user-select: none;

  &:hover {
    background-color: var(--gray);
  }
`

type HeaderProps = {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeChange = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <Widget>
      <LogoBox>
        <Logo href={'/'}>{name}</Logo>
      </LogoBox>
      <ThemeBox>
        <ThemeCheckBox onChange={() => handleThemeChange()} id="theme" type="checkbox" />
        <ThemeIconBox htmlFor="theme">
          {theme === 'dark' ?
            <Icon name='Bedtime' size="20px" color="#ffffff" />
            :
            <Icon name='Sunny' size="20px" color="#000000" />
          }
        </ThemeIconBox>
      </ThemeBox>
    </Widget>
  )
}