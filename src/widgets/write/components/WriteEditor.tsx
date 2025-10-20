'use client'

import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';

// Markdown 에디터
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const Box = styled.div`
  width: 1000px;
`

const TitleInput = styled.input`
  width: 100%;
`

const SaveButton = styled.button`
  margin-top: 1rem;
`

export default function WriteEditor() {
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
  };

  return (
    <Box>
      <TitleInput
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <MDEditor
        value={content}
        onChange={(e) => setContent(e)}
        style={{
          // borderRadius: "10px",
        }}
      />
      <SaveButton onClick={() => savePost()}>저장</SaveButton>
    </Box>
  );
}