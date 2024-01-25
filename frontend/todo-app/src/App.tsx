
import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { fetchTodos } from './components/api'

function App() {

  interface Todo{
    _id: string;
    task: string;
  }
  const [data, setData] = useState<Todo[]>([]);

  async function fetchData(){
      const apiData = await fetchTodos(); 
      setData(apiData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <AddTodo updateData={fetchData}/>
      <TodoList data={data} updateData={fetchData}/>
    </>
  );
}

export default App;
