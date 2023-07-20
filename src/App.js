import Todo from "./components/Todo";


function App() {
  return ( 
    <div>
      <h1>My Todos</h1>
      {/* to used this Todo tag we need to import from components */}
      <Todo text="To read" />  
      <Todo text="To write"/>  
      <Todo text="To code"/>  
    </div>
  );
}

export default App;
