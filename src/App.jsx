import Header from './components/Header/Header';
import { Table } from './components/Table/Table';
import './App.css'

function App() {
  //TODO: why so many renderings?
  console.count('rendering')
  return (
    <div className="App" >
      <Header />
      <Table />

    </div>
  )
}

export default App;