import React, { Children } from 'react';
import styled from 'styled-components';

// 공통스타일
const StyleButton = styled.button`
    display : inline-flex;
    outline:none;
    border:none;
    border-radius:4px;
    color:white;
    font-weight:bold;
    padding:0 16px;
    line-height:40px;
    font-size:16px;
    background: #339af0;
    &:hover{
        background: #1c7ed6;
    }
    &+&{margin-left:10px;}
`
const Button = ({children, onClick}) => {
    return (
        <StyleButton onClick={onClick}>{children}</StyleButton>
        );
};

export default Button;