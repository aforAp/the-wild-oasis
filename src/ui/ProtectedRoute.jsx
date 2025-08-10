import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { useUser } from "../features/authentication/useUser"; // Adjust the import path as necessary    
import Spinner from "../ui/Spinner"; // Assuming you have a Spinner component for loading state
import styled from "styled-components"; // Assuming you are using styled-components for styling
const FullPage = styled.div`
height: 100vh;
background-color:var(--color-grey-50);
display: flex;
align-items: center;    
justify-content: center;
`;

function ProtectedRoute({children}) {
 //1.load the authenticated user
const {isAuthenticated, isLoading} = useUser(); // Assuming useUser is a custom hook that fetches the current user 
const navigate = useNavigate(); 
 //2.while laoding, show a spinner

 //3. if there was no autheinticated user, redirect to the login page
 // Redirect to the login page

    //4. if there was an authenticated user, render the app
  useEffect(function () {   
        if (!isAuthenticated && !isLoading) {
            navigate('/login'); // Redirect to the dashboard or any other page
        }
    }, [isAuthenticated, isLoading, navigate]);

    if(isLoading) 
 return (
<FullPage>
<Spinner />
</FullPage>
);

 if(isAuthenticated) return children;
}


export default ProtectedRoute;
