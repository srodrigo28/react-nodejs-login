import { useState } from "react"

export function Login(){
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    function handleSubmit(event){
        event.prevetDefault();

    }
    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="email"></label>
                        <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha"></label>
                        <input type="password" placeholder="********" className="form-control" value={senha} onChange={ e => setSenha(e.target.value)}/>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-outline-primary w-25">Entrar</button>
                        <button className="btn btn-outline-warning w-25">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}