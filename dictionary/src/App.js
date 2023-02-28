import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Header from './components/Header/Header.js'
import Definitions from './components/Definitions/Definitions';
import { Switch } from '@mui/material';
function App() {
  const [Word, setWord] = useState("");
  const [LightMode,setLightMode]=useState(0);

  const [Meaning, setMeaning] = useState([]);
  const [category,setCategory]=useState("en");
  // console.log(category);
  const dictinaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${Word}`)
 
      setMeaning(data.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dictinaryApi();
  }, [Word,category]);
  return (
    <div className="App" style={{height:'100vh',backgroundColor:LightMode?"#fff":"#282c34",color:LightMode?"#282c34":"#fff", transition:"all 0.5s linear"}}>
      <Container maxWidth="md" style={{diplay:'flex',height:'100vh'}}>
        <div  style={{position:"absolute",top:0,right:15,paddingTop:10}}>
          <span> {LightMode?"LightMode":"DarkMode"}</span>
          <Switch  defaultChecked color="default" onChange={()=>setLightMode(!LightMode)} />
        </div>
        <Header category={category} setCategory={setCategory} word={Word} setWord={setWord} LightMode={LightMode}/>
        <Definitions word={Word} category={category} Meaning={Meaning}/>
      </Container>
    </div>
  );
}

export default App;
