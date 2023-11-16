import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login(){
    const url = "http://localhost:8081/login";
    const navigate = useNavigate();
    // const [erroUser, setError] = useState(false);
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
   
    const handleSubmit = (e) =>{
        e.preventDefault();

        // console.log(email, senha);
        axios.post(url, {email, senha})
        .then( res => {
            console.log(res.data)
            if(res.data === "success"){
                return navigate('/home')
            }else{
                return console.log("FrontEnd: Usuário ou senha Inválidos")
            }
        })
        .catch( err => console.log(err))
    }
    const handleCadastro = (e) => {
        e.preventDefault();

        return navigate('/register')

    }
    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="email"></label>
                        <input
                            autoComplete="on"
                            id="email"
                            type="email" placeholder="Enter Email" 
                            className="form-control" 
                            onChange={ e => setEmail(e.target.value) } value={email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha"></label>
                        <input
                            autoComplete="on"
                            id="senha"
                            type="password" placeholder="********" 
                            className="form-control" 
                            onChange={ e => setSenha(e.target.value)} value={senha}
                        />
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <button type="submit" className="btn btn-outline-primary w-25">Entrar</button>
                        <button onClick={ handleCadastro } className="btn btn-outline-warning w-25">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}