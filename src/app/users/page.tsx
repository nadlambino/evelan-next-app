import NextUsers from '@/components/NextUsers';
import ShowMoreButton from '@/components/LoadMoreButton';
import User from '@/components/User';
import { fetchUsers } from '@/hooks/user';
import Link from 'next/link';

async function page() {
    const { data: users, total_pages } = await fetchUsers(1);

    return (
        <>
            <Link 
                href="/" 
                className='absolute font-bold text-gray-400 hover:text-gray-500 hidden md:block'
            >
                Back to Home
            </Link>
            <div className='users-page'>
                <div className="header">
                    <h1>Active online</h1>
                    <ShowMoreButton hasNextPage={total_pages > 1} />
                </div>
                <div className='users-list' id='users-list'>
                    { users.map(user => <User user={user} key={user.id} />) }
                    <NextUsers />
                </div>
            </div>
        </>
    )
}

export default page
