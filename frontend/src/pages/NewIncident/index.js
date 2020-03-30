import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import {FiPower, FiTrash2, FiArrowLeft} from 'react-icons/fi'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return(
        
        
<div className="new-incident-container">
        <div className="content">
        <section>
        <img src={logoImg} alt="Be the Hero"/>
        
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
        <Link className='back-link' to="/profile">
        <FiArrowLeft size={16} color="#E02041"/>
        Voltar
        </Link>
        </section>
        <form>
        <input placeholder="Título do caso"/>
        <textarea placeholder="descrição"/>
        <input placeholder="Valor em Reais"/>
        <button className="button" type="submit">Cadastrar</button>
        </form>
        </div>
        </div>


    );
}