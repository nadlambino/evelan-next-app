import { ApiResponse } from '@/declarations';
import { useUserStore } from '@/stores/users';
import React from 'react';

export const fetchUsers = async (page: number): Promise<ApiResponse> => {
    return await fetch(`https://reqres.in/api/users?page=${page}`).then(response => {
        if (response.ok) return response.json();

        throw new Error('Failed to fetch users.');
    });
}

type HookProps = {
    initialPage?: number;
    hasNextPage?: boolean;
}

function useUserApi({ initialPage, hasNextPage }: HookProps) {
    const [page, setPage] = React.useState(initialPage ?? 1);
    const [hasNext, setHasNext] = React.useState(hasNextPage ?? true);
    const {append: handleAppendUsers, setLoadingLoadingUsers} = useUserStore();

    const nextPage = async () => {
        if (hasNext === false) return;

        const nextPage = page + 1;
        
        setPage(nextPage);
        setLoadingLoadingUsers(true);

        const { data: users, total_pages } = await fetchUsers(nextPage);

        setHasNext(nextPage < total_pages);
        setLoadingLoadingUsers(false);

        if (!users) return;

        handleAppendUsers(users);
    }

    return {
        nextPage,
        hasNext
    }
}

export default useUserApi
