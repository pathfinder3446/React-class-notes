import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {

  const [tutorials, setTutorials] = useState();

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";


  //! GET
  const getTutorials = async () =>{
    try{
      const { data } = await axios.get(url);
    setTutorials(data);
    } catch (error) {
      console.log(error);
    }
    
  };

useEffect(() => {
    getTutorials();
}, []);

  console.log(tutorials);


  //! POST (CREATE)
  const addTutorials = async (tutorials) => {
    try {
      await axios.post(url, tutorials)
    } catch (error) {
      console.log(error);
    }
    getTutorials();

  }

  return (
    <>
      <AddTutorial addTutorials = {addTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
