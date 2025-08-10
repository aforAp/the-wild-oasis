import { useMutation, useQueryClient } from '@tanstack/react-query';
import {logout as logoutApi} from '../../services/apiAuth'; // Adjust the import path as necessary
import {useNavigate} from 'react-router-dom'; // Assuming you are using react-router for navigation
export function useLogout() {
    const navigate = useNavigate(); // Assuming you are using react-router for navigation
    const queryClient = useQueryClient(); // Assuming you have a QueryClient instance set up
  const {mutate: logout, isLoading} = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
        queryClient.removeQueries(); // Clear user data from the query cache simply removing all queries
        // Clear user data from the query cache
        navigate('/login', { replace: true });
  },
});
return {logout, isLoading};
}