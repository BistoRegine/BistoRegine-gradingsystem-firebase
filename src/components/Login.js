import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            history.push('/dashboard')
        }
    },[])

    const onLogin = () => {
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/dashboard')
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))

    }
    
    return (
        <div className="w-full h-screen bg-gradient-to-r from-green-200 via-blue-500 to-green-200 flex justify-center items-center">
            <div className="w-96 bg-white shadow-lg">
                <div className="m-5">
                    <div className="font-bold block text-xl flex justify-center"> LOGIN FORM</div>
                    <label className="block text-l font-bold mb-3 flex justify-left ">Email Address:</label>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        className="border-grey-200 border-2 rounded w-full p-2 h-10"
                    />
                </div>
                <div className="m-5">
                    <label className="block text-l font-bold mb-3 flex justify-left">Password:</label>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        className="border-grey-200 border-2 rounded w-full p-2 h-10"
                    />
                </div>
                <div className="m-5">
                    <button
                        onClick={onLogin}
                        className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-200 text-white px-10 py-2 rounded text-xl font-bold flex justify-left"
                    >
                       {loading ? 'Logging you in ...' : 'Login'}
                    </button>
                </div>
                <div className="m-5">
                    <Link to="/register">
                        Don't have an account yet?
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Login;