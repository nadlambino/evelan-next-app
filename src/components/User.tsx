import type { User as UserType } from '@/declarations';
import Image from 'next/image';

type UserProps = {
    user: UserType
}

function User({ user } : UserProps) {
    const fullname = `${user.first_name} ${user.last_name}`;

    return (
        <div className='user-container'>
            <span className='id'>{ user.id }</span>
            <Image
                className='avatar'
                src={user.avatar}
                alt={fullname}
                height={50}
                width={50}
            />
            <div>
                <p className='name'>{ fullname }</p>
                <small className='email'>{ user.email }</small>
            </div>
        </div>
    )
}

export default User;
