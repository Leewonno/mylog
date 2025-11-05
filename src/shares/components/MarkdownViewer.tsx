'use client'

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Loading } from './Loading';

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview'),
  { ssr: false,
    loading: () => (
      <Loading />
    )
   }
);

const ViewerBox = styled.div`
  width: 100%;
  background-color: var(--white);
  color: var(--black);
  margin-bottom: 5rem;
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