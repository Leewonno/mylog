'use client'

import styled from "styled-components"
import Icon from "./Icon";

const Component = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s, box-shadow 0.15s, border-color 0.15s;
  white-space: nowrap;

  &:hover {
    background-color: #f3f4f6;
    border-color: #cdcdcd;
  }

  &:active {
    background-color: #ededed;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`

type Props = {
  icon?: string;
  children: React.ReactNode;
  onClick?: ()=> void;
}

export function Button({ icon, children, onClick }: Props) {
  return (
    <Component onClick={onClick}>
      {
        icon ?
        <Icon name={icon} color="#000" size="1rem" />
        :
        <></>
      }
      {children}
    </Component>
  );
}