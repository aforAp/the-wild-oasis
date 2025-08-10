import { useQuery } from "@tanstack/react-query";
import getCurrentUser from "../../services/apiAuth"; // Adjust the import path as necessary
export function useUser() {
    const {isLoading, data: user, error} = useQuery({
       queryKey: ['user'],
        queryFn: getCurrentUser,
    }) ; 
  return {isLoading, user, isAuthenticated: user?.role === 'authenticated', error};
}

