'use client'

import styled from "styled-components"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid #7b7b7b19;
  border-top-color: #4b5563;
  border-radius: 50%;
  animation: spin 1.2s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export function Loading() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}