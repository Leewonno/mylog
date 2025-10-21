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
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: var(--white);
  position: fixed;
  z-index: 9999;
`

const LeftBox = styled.div`
  
`

const LogoBox = styled.div`
  
`

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  color: var(--black);
`

const RightBox = styled.div`
  display: flex;
  align-items: center;
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

const MyBox = styled.div`

`

const MyLink = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  display: flex;

  &:hover {
    background-color: var(--gray);
  }
`

type HeaderProps = {
  name: string;
  storedTheme: string | undefined;
}

export default function Header({ name, storedTheme }: HeaderProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    } else {
      dispatch(setTheme('light'));
    }
  }, []);

  const handleThemeChange = () => {
    // 변경될 테마
    const changeTheme = theme === 'dark' ? 'light' : 'dark'
    // 전역변수에 담기
    dispatch(setTheme(changeTheme));
    // 쿠키에 테마 저장 -> SSR에서 불러올 수 있도록
    document.cookie = `theme=${changeTheme}; path=/; max-age=31536000`;
    // CSS 속성에 추가 또는 제거
    const html = document.documentElement;
    if (changeTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  return (
    <Widget>
      <LeftBox>
        <LogoBox>
          <Logo href={'/'}>{name}</Logo>
        </LogoBox>
      </LeftBox>
      <RightBox>
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
        <MyBox>
          <MyLink href={'/my'}>
            {theme === 'dark' ?
              <Icon name='account_circle' size="20px" color="#ffffff" />
              :
              <Icon name='account_circle' size="20px" color="#000000" />
            }
          </MyLink>
        </MyBox>
      </RightBox>

    </Widget>
  )
}