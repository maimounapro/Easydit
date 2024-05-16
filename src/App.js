import './App.css';
import Menu from './Composants/Header';
import Edit from './Composants/LeftBlock';
import Result from './Composants/MiddleBlock';
import Composants from './Composants/RightBlock';



function App() {
 return(
    <div className='App'>
        <Menu/>
        <Edit/>
        <Composants/>
        <Result/>
    </div>
   
 )
}
export default App;