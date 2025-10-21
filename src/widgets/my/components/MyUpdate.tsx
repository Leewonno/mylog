'use client'

import { useEffect } from "react"
import styled from "styled-components"

const Widget = styled.div`
  
`

export default function MyUpdate() {

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/get/auth`, {
        cache: "no-store", // SSR 매 요청마다 갱신
      });
      const data = await res.json();
      console.log(data)
    }

    getData();
  }, [])


  return (
    <Widget>

    </Widget>
  )
}