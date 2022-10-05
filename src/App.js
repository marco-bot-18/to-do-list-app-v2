import './assets/css/App.css';
import ButtonAppBar from './components/AppBar';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className='app'>
      <ButtonAppBar />
      <div className='main-container'>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
