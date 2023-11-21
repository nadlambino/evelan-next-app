import NextUsers from '@/components/NextUsers';
import ShowMoreButton from '@/components/ShowMoreButton';
import User from '@/components/User';
import { fetchUsers } from '@/hooks/user';
import React from 'react';

async function page() {
    const { data: users, total_pages } = await fetchUsers(1);

    return (
        <div className='users-page'>
            <h1 className='mb-4'>Active online</h1>
            <div className='users-list'>
                { users.map(user => <User user={user} key={user.id} />) }
                <NextUsers />
            </div>
            { total_pages > 1 && <ShowMoreButton hasNextPage={total_pages > 1} /> }
        </div>
    )
}

export default page
