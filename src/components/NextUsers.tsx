'use client';
import { useEffect } from 'react'
import { useUserStore } from '@/stores/users';
import User from '@/components/User'
import UserSkeleton from '@/components/UserSkeleton'

function NextUsers() {
    const { users, isLoadingUsers } = useUserStore();

    useEffect(() => {
        const container = document.getElementById('users-list');
        const scrollAmount = 350;
        if (container && isLoadingUsers === false) {
            container.scrollTop += scrollAmount;
        }
    }, [isLoadingUsers]);

    return <>{
        isLoadingUsers ? 
        <UserSkeleton /> : 
        users?.map((user) => <User user={user} key={user.id} />) 
    }</>;
}

export default NextUsers