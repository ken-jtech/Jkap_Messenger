import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { CreateUserAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => CreateUserAccount(user)
    })
}