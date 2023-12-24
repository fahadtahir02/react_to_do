import './App.css';
import AddToDo from './components/Add_List';

function App() {
  return (
    <div>
      <div className="page">
        <div className='page-color-divider'>
          <div className="main-grid">
            <AddToDo></AddToDo>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
