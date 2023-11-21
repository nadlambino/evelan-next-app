import { User } from '@/declarations';
import { create } from 'zustand'

type UserStore = {
    users: User[],
    append: (users: User[]) => void,
    isLoadingUsers: boolean,
    setLoadingLoadingUsers: (loading: boolean) => void
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    append: (users: User[]) => set((state) => ({ users: [...state.users, ...users] })),
    isLoadingUsers: false,
    setLoadingLoadingUsers: (loading: boolean) => set(() => ({ isLoadingUsers: loading }))
}));
