'use client';
import useUserApi from '@/hooks/user';

function ShowMoreButton({ hasNextPage }: { hasNextPage: boolean }) {
    const { nextPage, hasNext } = useUserApi({ hasNextPage });

    return (
        <>{hasNext && (
            <button type='button' className='show-more-btn' onClick={nextPage}>
                SHOW MORE
            </button>
        )}</>
    )
}

export default ShowMoreButton
