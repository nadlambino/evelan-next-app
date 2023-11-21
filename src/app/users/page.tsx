import ShowMoreButton from '@/components/ShowMoreButton';
import User from '@/components/User';
import { fetchUsers } from '@/hooks/users-api';
import React from 'react';

async function page() {
    const { data: users } = await fetchUsers(1);

    return (
        <div className='users-page'>
            <h1 className='mb-4'>Active online</h1>
            <div className='users-list'>
                { users.map(user => <User user={user} key={user.id} />) }
            </div>
            <ShowMoreButton />
        </div>
    )
}

export default page
