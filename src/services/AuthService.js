// src/services/auth.js
import axios from 'axios';

const API = 'http://localhost:5000';

export async function login(username, password) {
    const res = await axios.post(`${API}/login`, { username, password });
    localStorage.setItem('token', res.data.access_token);
}

export function getToken() {
    return localStorage.getItem('token');
}
