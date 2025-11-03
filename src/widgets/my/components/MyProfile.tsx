'use client'

import { BoardCategory } from "@/features"
import Icon from "@/shares/components/Icon"
import postData from "@/shares/lib/post"
import { setEmail, setGithub, setIsEmailChange, setIsGithubChange, setIsNameChange, setIsPortfolioChange, setName, setPortfolio } from "@/shares/lib/redux/features/user/userSlice"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`

const WidgetTitle = styled.div`
  color: var(--black);
  font-size: 22px;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`

type Props = {
  auth: {
    id: string;
    email: string;
    github: string;
    portfolio: string;
  };
}

interface AuthRequest {
  id?: string;
  email?: string;
  github?: string;
  portfolio?: string;
}

interface AuthResponse {
  message: string;
}

export function MyProfile({ auth }: Props) {
  const name = useSelector((state: RootState) => state.user.name);
  const email = useSelector((state: RootState) => state.user.email);
  const github = useSelector((state: RootState) => state.user.github);
  const portfolio = useSelector((state: RootState) => state.user.portfolio);

  const isNameChange = useSelector((state: RootState) => state.user.isNameChange);
  const isEmailChange = useSelector((state: RootState) => state.user.isEmailChange);
  const isGithubChange = useSelector((state: RootState) => state.user.isGithubChange);
  const isPortfolioChange = useSelector((state: RootState) => state.user.isPortfolioChange);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setName(auth.id));
    dispatch(setEmail(auth.email));
    dispatch(setGithub(auth.github));
    dispatch(setPortfolio(auth.portfolio));
  }, [])

  const handleNameUpdate = async () => {
    try {
      const data = { id: name }
      const res = await postData<AuthRequest, AuthResponse>('/api/post/auth/id', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsNameChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  const handleEmailUpdate = async () => {
    try {
      const data = { email: email }
      const res = await postData<AuthRequest, AuthResponse>('/api/post/auth/email', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsEmailChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  const handleGithubUpdate = async () => {
    try {
      const data = { github: github }
      const res = await postData<AuthRequest, AuthResponse>('/api/post/auth/github', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsGithubChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  const handlePortfolioUpdate = async () => {
    try {
      const data = { portfolio: portfolio }
      const res = await postData<AuthRequest, AuthResponse>('/api/post/auth/portfolio', data);
      const { message } = await res.json();
      alert(message);
      dispatch(setIsPortfolioChange(false));
    } catch (error) {
      alert("오류가 발생했습니다.");
    }
  }

  return (
    <Widget>
      {/* 유저 정보 설정 */}
      <WidgetTitle>
        <Icon name="account_box" size="25px" color="var(--black)" />
        사용자 설정
      </WidgetTitle>
      {/* 사용자명 설정 */}
      <BoardCategory
        name="사용자명"
        category={name}
        isChange={isNameChange}
        setCategory={(value) => dispatch(setName(value))}
        setIsChange={(value) => dispatch(setIsNameChange(value))}
        handleUpdate={handleNameUpdate} />

      {/* 이메일 설정 */}
      <BoardCategory
        name="이메일"
        category={email}
        isChange={isEmailChange}
        setCategory={(value) => dispatch(setEmail(value))}
        setIsChange={(value) => dispatch(setIsEmailChange(value))}
        handleUpdate={handleEmailUpdate} />

      {/* 이메일 설정 */}
      <BoardCategory
        name="Github"
        category={github}
        isChange={isGithubChange}
        setCategory={(value) => dispatch(setGithub(value))}
        setIsChange={(value) => dispatch(setIsGithubChange(value))}
        handleUpdate={handleGithubUpdate} />

      {/* 포트폴리오 설정 */}
      <BoardCategory
        name="포트폴리오"
        category={portfolio}
        isChange={isPortfolioChange}
        setCategory={(value) => dispatch(setPortfolio(value))}
        setIsChange={(value) => dispatch(setIsPortfolioChange(value))}
        handleUpdate={handlePortfolioUpdate} />
    </Widget>
  )
}