'use client'

import Icon from "@/shares/components/Icon"
import { setSearchListData } from "@/shares/lib/redux/features/home/homeSlice"
import { AppDispatch, RootState } from "@/shares/lib/redux/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

const Widget = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5rem;
`

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 5.5px;
  z-index: 1000;
  cursor: pointer;
  color: var(--gray);
  transition: color 0.3s;
`

const InputBox = styled.div`
  position: relative;

  &:focus-within ${SearchIconWrapper} {
    color: #000; // focus 시 바꿀 색
  }
`

const SearchInput = styled.input`
  outline: none;
  height: 35px;
  padding: 5px;
  padding-right: 40px;
  border: 1px solid var(--white-lightgray);
  transition: border 0.3s;

  &:focus {
    border: 1px solid var(--black);
  }
`

export function HomeSearch() {
  const boardListData = useSelector((state: RootState) => state.home.boardListData);
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      handleSearch();
    }
  }

  const handleSearch = () => {
    if (!search.replaceAll(' ', '')) {
      dispatch(setSearchListData(boardListData));
      return;
    }
    const searchData = boardListData.filter((v) => {
      return v.data.title.indexOf(search) > -1 || v.data.content.indexOf(search) > -1
    })
    dispatch(setSearchListData(searchData));
  }

  return (
    <Widget>
      <InputBox>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => handleOnKeyUp(e)}
        />
        <SearchIconWrapper onClick={handleSearch}>
          <Icon name="search" size="1.5rem" />
        </SearchIconWrapper>
      </InputBox>
    </Widget>
  )
}