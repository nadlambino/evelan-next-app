import { User } from '@/declarations';
import { create } from 'zustand'

type UserStore = {
    users: User[],
    add: (users: User[]) => void,
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    add: (users: User[]) => set((state) => ({ users: [...state.users, ...users] })),
}));
