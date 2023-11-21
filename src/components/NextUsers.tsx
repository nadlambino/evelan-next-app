'use client';

import React from 'react'
import User from '@/components/User'
import { useUserStore } from '@/stores/users';

function NextUsers() {
    const { users } = useUserStore();

    return <>{users?.map((user) => <User user={user} key={user.id} />) }</>;
}

export default NextUsers