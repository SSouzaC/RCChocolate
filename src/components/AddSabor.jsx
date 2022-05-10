import React, { useState } from 'react';

import '../AddSabor.css';

import Button from './button';

const  AddSabor= ({handleRecheioAddtion}) => { 
        const [inputData, setInputData] = useState(' ')

        const handleInputChange = (e) => {
                setInputData(e.target.value)
        };

        const handleAddRecheioClick  = () => {
                handleRecheioAddtion(inputData);
                setInputData('')
        };
                return ( 
                        <div className='add-sabor-container'>
                                <input 
                                        onChange={handleInputChange} 
                                        value = {inputData}
                                        className='add-sabor-input'
                                        type="text"
                                />
                                <div className="add-sabor-button-container">
                                <Button onClick={handleAddRecheioClick}> Adicionar</Button>
                                </div>
                        </div>   
                );
};
 
export default AddSabor ;