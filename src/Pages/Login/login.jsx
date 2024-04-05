import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './login.css';
import bglogo from "../../assets/logo.png";
import imgg from '../../assets/login_bg.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../../Components/Loader/Loader.jsx';
import axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState("")

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/laptop-list";
        // if (!email || !password) {
        //     setLoginError("Invalid Email or Password")
        //     return
        // }
        // setShowLoader(true)
        // const credentials = {
        //     email: email,
        //     password: password
        // }

        // axios.post("http://localhost:3000/", credentials,
        //     {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     }).then(async (res) => {
        //         console.log(res, "res")
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         setShowLoader(false)
        //     })
    }

    return (
        <>
            <div
                className="login-card auth-login"
                style={{
                    backgroundImage: `url(${imgg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <section className="vh-100 d-flex flex-column justify-content-center align-items-center main-login">
                    <Container>
                        <div className="Auth-form-container">
                            <form className="Auth-form" onSubmit={handleSubmit}>
                                <div className="Auth-form-content">
                                    <h3 className="Auth-form-title">Sign In</h3>
                                    <div className="form-group mt-3">
                                        <label className='label-style'>Email address</label>
                                        <input type="email" name="email" id="email" placeholder='abc@xyz.com'
                                            className="form-control mt-1 form-input-style"
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label className='label-style' htmlFor="password">Password</label>
                                        <div className="password-input-container">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                className="form-control mt-1 form-input-style"
                                                placeholder="Enter password"
                                                value={password} onChange={e => setPassword(e.target.value)}
                                                required
                                            />
                                            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                {showPassword ? <FiEyeOff /> : <FiEye />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mt-3 mb-3">
                                        <button type="submit" className="btn btn-primary btn-login">
                                            Login
                                        </button>
                                    </div>
                                    {
                                        loginError
                                        &&
                                        <p style={{ margin: "1rem 0 0", color: "red", textAlign: "center" }}>{loginError}</p>
                                    }
                                </div>
                            </form>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    );
}

export default LoginForm;
