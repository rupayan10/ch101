import { AppBar, Avatar, Button, IconButton, TextField, Tooltip, Typography } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React, { useState } from 'react';
import { User } from '../App';
import styles from './Main.module.scss';

interface MainProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setUserData: React.Dispatch<React.SetStateAction<User | null>>;
    userData: User | null;
}

const Main = ({ setAuth, userData, setUserData }: MainProps) => {
    console.info(`Component: Main`);

    const [fName, setFName] = useState<string | undefined>(userData?.fName);
    const [lName, setLName] = useState<string | undefined>(userData?.lName);
    const [email, setEmail] = useState<string | undefined>(userData?.email);
    const [username, setUsername] = useState<string | undefined>(userData?.username);

    const updateUser = (e: any) => {
        e?.preventDefault();
        if (fName !== undefined && lName !== undefined && email !== undefined && username !== undefined && fName.trim() !== '' && lName.trim() !== '' && email.trim() !== '' && username.trim() !== '') {
            const userData = {
                fName,
                lName,
                email,
                username
            };
            setUserData(userData);
        } else {
            alert('Your details can\'t be empty');
        }

    };

    return (
        <div className={styles.Main}>
            <AppBar className={styles.appbar} color="transparent" position="static">
                <div className={styles.toolbar}>
                    <Avatar className={styles.avatar}>{userData?.fName.charAt(0).toUpperCase()}</Avatar>
                    <Typography variant="h5" className={styles.title}>
                        App
                    </Typography>
                    <Tooltip title="Logout">
                        <IconButton className={styles.button} onClick={() => setAuth(false)}>
                            <PowerSettingsNewIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
            </AppBar>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>WELCOME ABOARD!</h1>
                    <h2>Mr. {userData?.fName}</h2>
                </div>
                <div className={styles.details}>
                    <div className={styles.added}>
                        <h2>Your details</h2>
                        <span>Hello {userData?.fName} {' '}{userData?.lName}</span>
                        <span>Your Email Address is {userData?.email}</span>
                        <span>Your Username is {userData?.username}</span>
                    </div>
                    <div className={styles.edit}>
                        <h2>Edit your details here</h2>
                        <form onSubmit={updateUser}>
                            <TextField id="fName" label="First Name" value={fName} onChange={(e: any) => setFName(e?.target.value)} />
                            <TextField id="lName" label="Last Name" value={lName} onChange={(e: any) => setLName(e?.target.value)} />
                            <TextField id="email" label="Email" value={email} onChange={(e: any) => setEmail(e?.target.value)} />
                            <TextField id="uname" label="Username" value={username} onChange={(e: any) => setUsername(e?.target.value)} />

                            <Button type="submit" variant="contained" color="primary">Update</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Main;