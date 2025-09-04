import { LuUser } from 'react-icons/lu'
import './App.css'
import CardInfo from './components/Card/Index'
import Header from './components/Header/Index'
import { GoCheckCircle, GoRocket } from 'react-icons/go'
import { Main } from './components/Main'

function App() {
  return (
    <>
    <Header/>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CardInfo icon={<LuUser/>} name='Clientes' numberinfo='47'/>
      <CardInfo icon={<GoCheckCircle />} name='Lorem Ipsun' numberinfo='+08'/>
      <CardInfo icon={<GoRocket />} name='Lorem Ipsun' numberinfo='25'/>
    </div>
    <Main/>
    </>
  )
}

export default App
