'use client'

import { Button, Loading } from '@/shares';
import postData from '@/shares/lib/post';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

// Markdown 에디터
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => (
    <Loading />
  )
});

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

  // 제목 or 본문 수정 여부
  const [isEdited, setIsEdited] = useState<boolean>(false);

  useEffect(() => {
    if (id && postDate) {
      setTitle(postTitle);
      setContent(postContent);
      setIsUpdate(true);
      setDate(postDate)
    }
  }, []);

  const beforeUnloadHandler = useCallback(
    (event: BeforeUnloadEvent) => {
      // 페이지를 벗어나지 않아야 하는 경우
      if (isEdited) {
        event.preventDefault();
        event.returnValue = true;
      }
    }, [isEdited]);

  useEffect(() => {
    const originalPush = router.push;
    const newPush = (href: string): void => {
      // 페이지를 벗어나지 않아야 하는 경우
      if (isEdited) {
        return;
      }
      originalPush(href);
      return;
    };
    router.push = newPush;
    window.onbeforeunload = beforeUnloadHandler;
    return () => {
      router.push = originalPush;
      window.onbeforeunload = null;
    };
  }, [isEdited, router, beforeUnloadHandler]);

  // const handlePopState = useCallback(() => {
  //   console.log("실행")
  //   // 페이지를 벗어나지 않아야 하는 경우
  //   if (isEdited) {
  //     history.pushState(null, '', '');
  //     return;
  //   }

  //   history.back();
  // }, [isEdited]);

  // const isClickedFirst = useRef(false);
  // useEffect(() => {
  //   if (!isClickedFirst.current) {
  //     history.pushState(null, '', window.location.href);
  //     isClickedFirst.current = true;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('popstate', handlePopState);
  //   return () => {
  //     window.removeEventListener('popstate', handlePopState);
  //   };
  // }, [handlePopState]);

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
              <Button onClick={() => handleUpdatePost()} icon="edit_document">저장</Button>
              <Button onClick={() => handleDeletePost()} icon="delete">삭제</Button>
            </> :
            // 생성
            <>
              <Button onClick={() => handleSavePost()} icon="edit_document">저장</Button>
            </>
        }
      </ButtonBox>
      <TitleInput
        placeholder='제목'
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
          setIsEdited(true);
        }}
        value={title}
      />
      <MDEditor
        value={content}
        onChange={(e) => {
          setContent(e);
          setIsEdited(true)
        }}
        height={500}
      />

    </Box>
  );
}