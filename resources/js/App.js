
// import './App.css';
// import { React } from 'react';
import React from 'react';
import { Table } from './table/Table';
import { Button} from './button/Button'
import { Checkbox } from './checkbox/Checkbox'
import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

function App() {

  return (
      <Container>
        <h1>Таблица пользователей</h1>
        <Table></Table>
      </Container>
  );
}

export default App;
