import './App.css';
import Header from './components/header/header';
import PicContainer from './components/picContainer';
import { picDataLoad } from '../src/store/actions/picGram-action';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  dispatch(picDataLoad());
  return (
    <div className="App">
 <Header/>
 <PicContainer/>
        
       
    </div>
  );
}

export default App;
