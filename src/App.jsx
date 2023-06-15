import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
//importamos el formulario
import {MyForm} from './components/Form'
import {Item} from './components/ListItems'
function App() {

  const [items,setItems]=useState([])
  const [item,setItem]=useState("")
  const [id,setId]=useState(0);


  return (
    <>
    <MyForm 
    id={id} changeId={setId}
    addItem={setItem} item={item}
    addItems={setItems} items={items}/>
    <ListGroup className='m-3'>
    {items.map((item,i)=><Item key={item.id} item={item}/>)}
    </ListGroup>
    
    
    </>
  )
}

export default App
