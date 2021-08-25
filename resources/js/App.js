import React, { useState, useEffect } from 'react';
import { Table } from './table/Table';
import styled from 'styled-components';
import { EmployeeService } from './services/EmployeeService';
// import '../css/fonts.css';

const employeeService = new EmployeeService();

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto';
`

function App() {

  const [items, setItems ] = useState([]);

  useEffect(() => {
    employeeService.getEmployees().then((items) => {
      setItems(items)
    })
  }
  ,[ setItems ]);

  const removeItem = (item) => {
    employeeService.deleteEmployee(item.id);
    setItems((currentItems) => {
      const removeItemIndex = currentItems.findIndex(i => i.id === item.id);
      if(removeItemIndex !== -1)
      {
        const copy = currentItems.slice();
        copy.splice(removeItemIndex,1);
        return copy;
      }
      return currentItems;
    });
  }

  const removeItemsAll = (...items) => {
    items.forEach(removeItem)
  }

  const H1 = styled.h1`
    color: #4C4C4C;
    font-weight: 700;
  `

  return (
      <Container>
        <H1>Таблица пользователей</H1>
        <Table removeItemsAll={removeItemsAll} items={items}></Table>
      </Container>
  );
}

export default App;
