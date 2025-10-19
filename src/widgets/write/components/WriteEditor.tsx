'use client'

import dynamic from 'next/dynamic';
import { useState } from 'react';
import styled from 'styled-components';

// Markdown 에디터
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const Box = styled.div`
  width: 1000px;
`

const StyledMDEditor = styled(MDEditor)`
  height: 500px;
`

const SaveButton = styled.button`
  margin-top: 1rem;
`

export default function WriteEditor() {
  const [value, setValue] = useState<string | undefined>("");

  const savePost = async () => {
    const meta = { title: 'title', date: new Date().toISOString() };
    const res = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: 'title', content: value, meta }),
    });
    const data = await res.json();
    alert(data.message);
  };


  // const handleSave = () => {
  //   if (!value || value.length <= 0) {
  //     return;
  //   }
  //   postData()
  //   console.log("저장")
  // }

  return (
    <Box>
      
      <StyledMDEditor
        value={value}
        onChange={(e) => setValue(e)}
        style={{
          // borderRadius: "10px",
        }}
      />
      <SaveButton onClick={() => savePost()}>저장</SaveButton>
    </Box>
  );
}