import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {login as loginApi} from '../../services/apiAuth'; // Adjust the import path as necessary
import {toast} from 'react-hot-toast';
export function logins() {
    const navigate = useNavigate();
    const queryClient = useQueryClient(); // Assuming you have a QueryClient instance set up
   const {mutate: login, isLoading} = useMutation({
     mutationFn:  ({email, password}) => loginApi({email, password}),
     onSuccess: (user) => {
        queryClient.setQueryData(["user"], user.user);
        navigate('/dashboard', { replace: true });
     },
     onError: (error) => {
        console.error("Login failed:", error);
        toast.error("Login failed. Please check your credentials.");
     }
}) 
return {login, isLoading};
}