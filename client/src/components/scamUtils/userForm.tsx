import { useState } from 'react';

interface UserFormProps {
    onAddUser: (passport: string, fullName: string) => void;
    serverError: string;
    clearErrors: () => void;
}

const UserForm = ({ onAddUser, serverError, clearErrors }: UserFormProps) => {
    const [passport, setPassport] = useState('');
    const [fullName, setFullName] = useState('');
    const [passportError, setPassportError] = useState('');
    const [fullNameError, setFullNameError] = useState('');

    const validateForm = () => {
        let isValid = true;
        setPassportError('');
        setFullNameError('');

        if (!/^\d{10}$/.test(passport)) {
            setPassportError('Паспорт должен содержать ровно 10 цифр');
            isValid = false;
        }
        if (!fullName.trim()) {
            setFullNameError('Пожалуйста, введите ФИО');
            isValid = false;
        }
        if (!passport.trim()) {
            setPassportError('Пожалуйста, введите номер паспорта');
            isValid = false;
        }
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onAddUser(passport, fullName);
            setPassport('');
            setFullName('');
        }
    };

    return (
        <div>
            <h1>Введите паспортные данные</h1>
            <div>
                <input
                    className="mt-[5px] w-[20vh] h-[2vh] rounded-[8px] border-[2px]"
                    type="text"
                    placeholder="Паспорт (10 цифр)"
                    value={passport}
                    onChange={(e) => {
                        setPassport(e.target.value.replace(/[^0-9]/g, ''));
                        setPassportError('');
                        clearErrors();
                    }}
                    maxLength={10}
                />
                {passportError && <p style={{ color: 'red', margin: '5px 0' }}>{passportError}</p>}
            </div>
            <div>
                <input
                    className="mt-[5px] w-[20vh] h-[2vh] rounded-[8px] border-[2px]"
                    type="text"
                    placeholder="ФИО"
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        setFullNameError('');
                        clearErrors();
                    }}
                />
                {fullNameError && <p style={{ color: 'red', margin: '5px 0' }}>{fullNameError}</p>}
            </div>
            {serverError && <p style={{ color: 'red', margin: '10px 0' }}>{serverError}</p>}
            <button
                className="w-[15vh] h-[2.5vh] border-0 my-[15px] text-[#fff] rounded-[4px]"
                onClick={handleSubmit}
            >
                Продолжить оформление
            </button>
        </div>
    );
};

export default UserForm;
