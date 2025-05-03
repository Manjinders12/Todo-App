import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';


const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }

        ))
    }

    const handlesubmit = () => {
        loginUser(formData)
    }



    return (
        <div className='py-3'>




            <div className='py-3'>
                <div className='mb-3'>
                    <label className="form-label">Email</label>
                    <input type='text' name='email' className='form-control' onChange={handleChange} />
                </div>



                <div className='py-3'>
                    <div className='mb-3'>
                        <label className="form-label">Password</label>
                        <input type='password' name='password' className='form-control' onChange={handleChange} />
                    </div>
                </div>
            </div>

            <button onClick={handlesubmit} className='btn btn-primary' >Login</button>

        </div>
    )
}
export default Login;