import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter  as Router, Route} from 'react-router-dom';

import Recheios from './components/recheios';
import AddSabor from './components/AddSabor';
import Header from './components/Header';
import RecheioDetails from './components/RecheioDetails';

import './App.css'

const App = () => {
      const  [recheios, SetRecheios] = useState([
            {
                  id: "1",
                  title:"Leite ninho",
                  estoque: true,
            },
            {
              id: "2",
              title:"Brigadeiro",
              estoque: true,
           },
           {
            id: "3",
            title:"Prestigio",
            estoque: true,
            },
           
      ]); 

      const handleRecheioClick = (RecheioId) => {
              const newRecheios = recheios.map( recheios => {
                  if(recheios.id === RecheioId ) return {...recheios, estoque: !recheios.estoque}
                  return recheios;
              });
                SetRecheios(newRecheios)
      };

      const  handleRecheioAddtion =  (recheioTitle)  => {
              const newRecheios = [
                ...recheios,
                  {
                        title : recheioTitle,
                        id: uuidv4(),
                        estoque:  ""
                  }
                ]

              SetRecheios(newRecheios);
        };

      const handleRecheioDeletion = (RecheioId ) => {
            const newRecheios = recheios.filter(recheios => recheios.id !== RecheioId )
            SetRecheios(newRecheios)
      };
       

      return(	
    <Router>
          <div className='container'>
                        <Header/>
                        <Route
                              path="/"
                              exact
                              render={() => (
                                    <>
                                    <AddSabor handleRecheioAddtion = {handleRecheioAddtion} />
                                    <Recheios 
                                          recheios = {recheios}  
                                          handleRecheioClick = {handleRecheioClick}
                                          handleRecheioDeletion = {handleRecheioDeletion}
                                    />
                                    </>
                              )}
                         />
                         <Route  path ="/:recheioTitle" exact component = {RecheioDetails}
                          />
                        
            </div>
      </Router>

  );
};

export default  App; 
