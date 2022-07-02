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




  //! POST (CREATE)
  const addTutorials = async (tutorials) => {
    try {
      await axios.post(url, tutorials)
    } catch (error) {
      console.log(error);
    }
    getTutorials();

  }

  //!DELETE
  const deleteTutorial = async (id) => {
    try{
      await axios.delete(`${url}/${id}`)
    } catch (error){
      console.log(error);
    }
    getTutorials();
  };

  //!UPDATE(PUT:wholeupdate, PATCH:partially update)
  const editTutorial = async (id,title,desc) => {
    const filtered = tutorials
    .filter((tutor) => tutor.id===id)
    .map(() => ({title:title, description:desc}));

    try{
      await axios.put(`${url}/${id}`)
    } catch(error) {
      console.log(error);
    }
    getTutorials();
  }; 

  return (
    <>
      <AddTutorial addTutorials = {addTutorials} />
      <TutorialList tutorials={tutorials} deleteTutorials={deleteTutorial} editTutorial={editTutorial}/>
    </>
  );
};

export default Home;
