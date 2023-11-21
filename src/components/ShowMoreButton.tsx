'use client';

import useUserApi from '@/hooks/user';
import React from 'react';

function ShowMoreButton({ hasNextPage }: { hasNextPage: boolean }) {
    const { nextPage, hasNext } = useUserApi({ hasNextPage });

    return (
        <>
            {
                hasNext && (
                    <div className='btn-container'>
                        <button type='button' className='show-more-btn' onClick={nextPage}>
                            SHOW MORE
                        </button>
                    </div>
                )
            }
        </>
        
    )
}

export default ShowMoreButton
