import { AbstractControl } from '@angular/forms';

export function ConfirmPasswordValidator(control:AbstractControl) {
    const passwordCon=control.get("passwordCon");
    const conpasswordCon=control.get("conpasswordCon");

    if(passwordCon?.pristine || conpasswordCon?.pristine){return null;}
    return passwordCon && conpasswordCon && passwordCon.value !== conpasswordCon.value ?{"mustMatch":true}:null;
}
