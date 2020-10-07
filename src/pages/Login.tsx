import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './Login.module.scss';
import { User } from '../App';
import { motion } from 'framer-motion';

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
        <motion.div className={styles.Login}>
            <motion.img initial={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} src="https://images.unsplash.com/photo-1504887383785-1e5af315d285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80" alt="" />
            <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} className={styles.wrapper}>
                <motion.h1 initial={{ y: -200, opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className={styles.header}>Login here</motion.h1>
                <form onSubmit={loginUser}>
                    <TextField id="fName" label="First Name" value={fName} onChange={(e: any) => setFName(e?.target.value)} />
                    <TextField id="lName" label="Last Name" value={lName} onChange={(e: any) => setLName(e?.target.value)} />
                    <TextField id="email" label="Email" value={email} onChange={(e: any) => setEmail(e?.target.value)} />
                    <TextField id="uname" label="Username" value={username} onChange={(e: any) => setUsername(e?.target.value)} />

                    <Button type="submit" variant="contained" color="primary">LOGIN</Button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Login;