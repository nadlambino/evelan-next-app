import { ApiResponse, User } from '@/declarations';
import React from 'react';

export const fetchUsers = (page: number): Promise<ApiResponse> => {
    return fetch(`https://reqres.in/api/users?page=${page}`).then(response => {
        if (response.ok) return response.json();

        throw new Error('Failed to fetch users.');
    });
}

function useUsersApi() {
    const [page, setPage] = React.useState(1);
    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        const users = fetchUsers(page);
        console.log(users);
    }, [page]);

    return {
        setPage,
        users,
    }
}

export default useUsersApi;
