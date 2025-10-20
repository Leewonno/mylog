'use client'

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
`

const SaveButton = styled.button`
  margin-top: 1rem;
`

export default function WriteEditor() {
  const router = useRouter()

  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");

  const savePost = async () => {
    const meta = { title: title, date: new Date().toISOString() };
    const res = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: title, content: content, meta }),
    });
    const data = await res.json();
    alert(data.message);
    router.push('/')
  };

  return (
    <Box>
      <TitleInput
        placeholder='제목'
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <MDEditor
        value={content}
        onChange={(e) => setContent(e)}
      />
      <SaveButton onClick={() => savePost()}>저장</SaveButton>
    </Box>
  );
}