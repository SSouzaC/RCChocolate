import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './button'

import './RecheioDetails.css'

const RecheioDetails = () => {
        const params = useParams();

        return (
                <>
                <div className="back-button-container">
                        <Button>Voltar</Button>
                </div>          
                        <div className="recheios-details-container">
                                <h2>{params.recheioTitle}</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores at tempora porro ad nemo!</p>
                        </div>
                </>
         );
};
 
export default RecheioDetails;