import { CanActivateFn, Router } from '@angular/router';

export const userserviceGuard: CanActivateFn = (route, state ): boolean => {
  
  
  if(localStorage.getItem('userToken') !== null){
    return true;
  }else{
    return false;
  }
};
