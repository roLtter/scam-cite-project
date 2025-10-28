import { useState, useEffect } from 'react';
import axios, { isAxiosError } from 'axios';
import Header from '../components/Header.tsx';
import UserForm from '../components/scamUtils/userForm.tsx';
import UserList from '../components/scamUtils/userList.tsx';
import setThemeVariables from "../components/helps/varsSetter.ts";
import {getStoredTheme, storeTheme} from "../components/helps/themeManager.ts";

interface User {
    id: number;
    passport: string;
    fullName: string;
}

function ScamPage() {
    const [isDark, setIsDark] = useState(getStoredTheme());
    const [users, setUsers] = useState<User[]>([]);
    const [serverError, setServerError] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        storeTheme(isDark);
        setThemeVariables(isDark);

        axios
            .get('http://localhost:3000/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке пользователей:', error);
            });
    }, [isDark]);

    const addUser = async (passport: string, fullName: string) => {
        setServerError('');
        try {
            const response = await axios.post('http://localhost:3000/users', { passport, fullName });
            setUsers([...users, response.data]);
            setShowMessage(true);
        } catch (error) {
            if (isAxiosError(error) && error.response?.status === 409) {
                setServerError(error.response.data.message || 'Паспорт уже занят');
            } else {
                setServerError('Произошла ошибка при добавлении пользователя');
            }
            console.error('Ошибка при добавлении пользователя:', error);
        }
    };

    const clearErrors = () => {
        setServerError('');
    };

    return (
        <div id="form1ed" className="h-[100vh]">
            <Header setIsDark={setIsDark} isDark={isDark} />
            <main className="text-center m-[50px] flex flex-col items-center">
                <div
                    className="container rounded-[8px] w-fit"
                    id="container"
                    style={{ display: showMessage ? 'none' : 'block' }}
                >
                    <UserForm onAddUser={addUser} serverError={serverError} clearErrors={clearErrors} />
                    <UserList users={users} />
                </div>

                <p
                    id="message"
                    className="font-[700] mt-[40px] text-[45px]"
                    style={{ display: showMessage ? 'block' : 'none' }}
                >
                    Ну все, возьму на тебя кредит))
                </p>
            </main>
        </div>
    );
}

export default ScamPage;
