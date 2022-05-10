import React from 'react';

import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

import './Recheio.css'

const Recheio = ({ recheios,  handleRecheioClick, handleRecheioDeletion} ) => {
        const history = useHistory();

        const handleDetailsClick = () =>{
                history.push(`/${recheios.title}`)
}

        return(
                <div 
                        className='recheio-container' 
                        style={recheios.estoque ? {borderLeft: '6px solid #5f249f' } : {} }>
                        
                        <div className='recheio-title' onClick={() => handleRecheioClick(recheios.id)}>
                                {recheios.title}
                        </div>

                        <div 
                                className='buttons-container'>
                                <button className='remove-recheio-button'
                                onClick={() => handleRecheioDeletion(recheios.id)}>
                                        <CgClose/>
                                </button>
                                <button className='see-recheio-details-button' 
                                onClick= {handleDetailsClick}
                                >
                                        <CgInfo/>
                                </button>
                        </div>
                </div>
        );
}; 
export default Recheio ;