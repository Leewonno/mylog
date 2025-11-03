'use client'

import postData from '@/shares/lib/post';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Markdown 에디터
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const Box = styled.div`
  width: 100%;
`

const TitleInput = styled.input`
  width: 100%;
  border: none;
  margin-bottom: 20px;
  outline: none;
  font-size: 18px;
  color: var(--black);
  background-color: var(--white);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray);

  &:focus {
    border-bottom: 1px solid var(--black);
  }
`

const ButtonBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  margin-bottom: 10px;
`

const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 6px 18px;
  cursor: pointer;
  border: 1px solid #efefef;
  box-sizing: border-box;
  transition: background-color 0.3s;
  background-color: #f3f3f3;
  font-size: 14px;

  &:hover {
    background-color: #dfdfdf;
  }
`


const SaveButton = styled(Button)`
  background-color: var(--gray);
  color: var(--black);
`

const DeleteButton = styled(Button)`
  background-color: var(--gray);
  color: var(--black);
`

type Props = {
  id?: number;
  postTitle?: string;
  postContent?: string;
  postDate?: string;
}

type SaveRequest = {
  title: string | undefined;
  content: string | undefined;
  date: string;
}

type UpdateRequest = {
  id: number | undefined;
  title: string | undefined;
  content: string | undefined;
  date: string;
}

type DeleteRequest = {
  id: number | undefined;
}

type CommonResponse = {
  message: string;
}

export function WriteEditor({ id, postTitle, postContent, postDate }: Props) {
  const router = useRouter()

  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");
  const [date, setDate] = useState<string>("");

  // 수정인 경우
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (id && postDate) {
      setTitle(postTitle);
      setContent(postContent);
      setIsUpdate(true);
      setDate(postDate)
    }
  }, [])

  const handleSavePost = async () => {
    const res = await postData<SaveRequest, CommonResponse>('/api/post/blog/create', { content: content, title: title, date: new Date().toISOString() })
    const data = await res.json();
    alert(data.message);
    if (res.status === 200) {
      router.push('/')
    }
  };

  const handleDeletePost = async () => {
    if (confirm("게시물을 삭제하시겠습니까?")) {
      const res = await postData<DeleteRequest, CommonResponse>('/api/post/blog/delete', { id: id })
      const data = await res.json();
      alert(data.message);
      if (res.status === 200) {
        router.push('/')
      }
    }
  }

  const handleUpdatePost = async () => {
    const res = await postData<UpdateRequest, CommonResponse>('/api/post/blog/update', { id: id, content: content, title: title, date: date })
    const data = await res.json();
    alert(data.message);
    if (res.status === 200) {
      router.push(`/${id}`)
    }
  }

  return (
    <Box>
      <ButtonBox>
        {
          isUpdate ?
            // 수정
            <>
              <SaveButton onClick={() => handleUpdatePost()}>저장</SaveButton>
              <DeleteButton onClick={() => handleDeletePost()}>삭제</DeleteButton>
            </> :
            // 생성
            <>
              <SaveButton onClick={() => handleSavePost()}>저장</SaveButton>
            </>
        }
      </ButtonBox>
      <TitleInput
        placeholder='제목'
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <MDEditor
        value={content}
        onChange={(e) => setContent(e)}
        height={500}
      />
    </Box>
  );
}