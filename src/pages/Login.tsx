import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './Login.module.scss';
import { User } from '../App';

interface LoginProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const Login = ({ setAuth, setUserData }: LoginProps) => {
    console.info(`Component: Login`);

    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const loginUser = () => {
        if (fName.trim() !== '' && lName.trim() !== '' && email.trim() !== '' && username.trim() !== '') {
            const userData = {
                fName,
                lName,
                email,
                username
            };
            setUserData(userData);
            setAuth(true);
        } else {
            alert('Enter all your details properly');
        }

    };

    return (
        <div className={styles.Login}>
            <h1 className={styles.header}>Login here</h1>
            <form onSubmit={loginUser}>
                <TextField id="fName" label="First Name" value={fName} onChange={(e: any) => setFName(e?.target.value)} />
                <TextField id="lName" label="Last Name" value={lName} onChange={(e: any) => setLName(e?.target.value)} />
                <TextField id="email" label="Email" value={email} onChange={(e: any) => setEmail(e?.target.value)} />
                <TextField id="uname" label="Username" value={username} onChange={(e: any) => setUsername(e?.target.value)} />

                <Button type="submit" variant="contained" color="primary">LOGIN</Button>
            </form>
        </div>
    );
};

export default Login;