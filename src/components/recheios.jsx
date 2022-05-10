import React from 'react';

import Recheio from './recheio'

const Recheios = ({ recheios, handleRecheioClick, handleRecheioDeletion }) => {
        return (
                <>
                        {recheios.map((recheios) => (
                                 <Recheio recheios = {recheios}  handleRecheioClick = {handleRecheioClick} handleRecheioDeletion={handleRecheioDeletion}/>
                        ))}
                </>
        );
};
 
export default Recheios;



