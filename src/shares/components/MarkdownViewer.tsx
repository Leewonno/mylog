'use client'

import dynamic from 'next/dynamic';
import styled from 'styled-components';

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview'),
  { ssr: false }
);

const ViewerBox = styled.div`
  width: 100%;
  background-color: var(--white);
  color: var(--black);
  margin-bottom: 3rem;
`;

interface Props {
  content: string;
}

export function MarkdownViewer({ content }: Props) {
  return (
    <ViewerBox>
      <MarkdownPreview source={content} />
    </ViewerBox>
  );
}