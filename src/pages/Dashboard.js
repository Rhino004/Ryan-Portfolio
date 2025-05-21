// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../services/auth';

export default function Dashboard() {
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        const res = await axios.get('http://localhost:5000/projects', {
            headers: { Authorization: `Bearer ${getToken()}` }
        });
        setProjects(res.data);
    };

    useEffect(() => { loadProjects(); }, []);

    return (
        <div>
            <h2>Project Dashboard</h2>
            <ul>
                {projects.map(p => (
                    <li key={p.id}>{p.name} ({p.status})</li>
                ))}
            </ul>
        </div>
    );
}
