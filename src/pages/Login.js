// src/pages/Login.jsx
// Needs to be tested with oher components
import { useState } from 'react';
import { login } from '../services/auth';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async () => {
        try {
            await login(username, password);
            window.location.href = '/dashboard';
        } catch {
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={submit}>Login</button>
        </div>
    );
}
