import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const url = "http://localhost:8081/register";
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(url, {nome, email, senha})
        .then( res => {
            alert('Cadastrado com sucesso');
            try{
                res.data === "success"
                return navigate('/login')
            }catch(error){
                console.log(error)
            }
        })
        .catch( err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-50">
                <form onSubmit={handleSubmit}>
                <h1 className='mt-3 mb-5'>Register</h1>
                    <div className="row mb-3">
                        <div className="col">
                            <input 
                                type="text" placeholder='nome'  
                                className='form-control'
                                onChange={ e => setNome(e.target.value)} value={nome}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" placeholder='email' 
                                className='form-control'
                                onChange={ e => setEmail(e.target.value)} value={email}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="text" placeholder='senha' 
                                className='form-control'
                                onChange={ e => setSenha(e.target.value)} value={senha}
                            />
                        </div>
                    </div>
                    <div className="col d-flex justify-content-start align-items-center gap-3">
                        <button className='btn btn-outline-primary' type='submit'>Cadastrar</button>
                        <Link to='/login' className='btn btn-outline-warning'>Voltar</Link>
                    </div>
                    
                
                </form>
            
        </div>
        </div>
    )
}

export default Register;