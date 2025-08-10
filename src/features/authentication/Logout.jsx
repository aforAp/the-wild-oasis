import ButtonIcon from "../../ui/ButtonIcon";
import React from "react";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import {useLogout} from "./useLogout"; 
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
    const {logout, isLoading} = useLogout(); 
          return (
    <ButtonIcon disabled={isLoading} onClick={logout} aria-label="Logout">
    {!isLoading ? <HiArrowRightEndOnRectangle /> : <SpinnerMini />}  
    </ButtonIcon>
  );
}

export default Logout;