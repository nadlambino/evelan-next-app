'use client';
import useUserApi from '@/hooks/user';

function ShowMoreButton({ hasNextPage }: { hasNextPage: boolean }) {
    const { nextPage, hasNext } = useUserApi({ hasNextPage });

    return (
        <>{hasNext && (
            <button type='button' className='load-more-btn' onClick={nextPage}>
                LOAD MORE
            </button>
        )}</>
    )
}

export default ShowMoreButton
