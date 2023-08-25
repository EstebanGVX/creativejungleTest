import {React, useEffect, useState} from "react";
import axios from 'axios';
import Card from './components/card/card';
import Title from "./components/title-page/Title";
import Search from "./components/search/Search";
import "./App.scss";


function App() {

  const [cards, setCards] = useState([]);
  const [cardsAux, setCardsAux] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setCards(response.data);
    });
  }, []);

  useEffect(() => {
    setCardsAux(cards);
  }, [cards]);

  useEffect(()=> {
    const filterCards = cards.filter((item) => item.title.includes(text) );
    setCardsAux(filterCards);
  }, [text]);

  const changeText = (value) => {
    setText(value);
  }

  const deleteCard = (id) => {
    const filterCards = cards.filter((item) => item.id != id )
    setCards(filterCards);
  }

  return (
    <div className="App">
      <Title />
      <Search onChangeText={changeText}/>
    {
      cardsAux.map((item, index)=> <Card card={item} onDelete={() => { deleteCard(item.id)  }}/>)
    }
      

    </div>
  );
}

export default App;
