
// import './App.css';
// import { React } from 'react';
import React from 'react';
import { Table } from './table/Table';
import { Button} from './button/Button'

function App() {

  return (
      <div className="container">
        <h1>Таблица пользователей</h1>
        <Table></Table>
        <Button>
          test
        </Button>
      </div>
  );
}

export default App;
