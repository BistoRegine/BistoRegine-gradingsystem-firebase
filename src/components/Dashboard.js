import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react';

const Dashboard = ({ history }) => {
     const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
        }
    
        useEffect(() => {
            const token = localStorage.getItem('token');
    
            if (!token) {
                history.push('/')
            }
        },[])

        const auth = getAuth();
        const user = auth.currentUser;

    return(
        <div className="w-full h-screen bg-gradient-to-r from-green-200 via-blue-500 to-green-200 flex justify-center items-center">
        <div className="w-96 bg-white shadow-lg">
            <div className="m-5 font-bold block text-xl flex justify-left ">
                <p>{user && user.displayName}</p>
            </div>
            <div className="m-5">
                <button
                    onClick={logout}
                    className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-200 text-white px-10 py-2 rounded text-xl font-bold flex justify-left"
                >
                   Logout
                </button>
            </div>

        </div>

    </div>
    )
}

export default Dashboard;