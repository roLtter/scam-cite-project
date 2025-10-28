interface User {
    id: number;
    passport: string;
    fullName: string;
}

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => (
    <>
        <h2>Список украденных паспортов</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.fullName} ({user.passport})
                </li>
            ))}
        </ul>
    </>
);

export default UserList;
