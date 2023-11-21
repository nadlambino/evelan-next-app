import NextUsers from '@/components/NextUsers';
import ShowMoreButton from '@/components/ShowMoreButton';
import User from '@/components/User';
import { fetchUsers } from '@/hooks/user';
import React from 'react';

async function page() {
    const { data: users, total_pages } = await fetchUsers(1);

    return (
        <div className='users-page'>
            <div className="header">
                <h1>Active online</h1>
                { total_pages > 1 && <ShowMoreButton hasNextPage={total_pages > 1} /> }
            </div>
            <div className='users-list'>
                { users.map(user => <User user={user} key={user.id} />) }
                <NextUsers />
            </div>
        </div>
    )
}

export default page
