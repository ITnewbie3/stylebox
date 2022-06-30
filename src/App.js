import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Box from './conponents/Box';
import Button from './conponents/Button';
import Dialog from './conponents/Dialog';

const AppBlock = styled.div`
  width:512px;
  margin: 0 auto;
  margin-top:50px;
  border: 1px solid black;
  padding:10px;
`

function App() {
  const [dialog, setDialog]= useState(false)
  const onClick = () =>{
    setDialog(!dialog);
  }
  return (
    <>
    <AppBlock>
      <Button>button1</Button>
      <Button>button2</Button>
      <Button onClick={onClick}>button3</Button>
    </AppBlock>
      <Dialog title="정말로 삭제하시겠습니까?" onClick={onClick} cencelText={'취소'} confirmText={'삭제'} visible={dialog}>
        데이터를 삭제하시겠습니까?
      </Dialog>
      <Box/>
    </>
  );
}

export default App;
