import { AbstractControl } from '@angular/forms';

export function ForbiddenNameValidator(control:AbstractControl) {
    const forbidden=/\b(?!admin\b)(?!adminstrator\b)\w+/.test(control.value);
    return !forbidden ? {"forbiddenName":{value:control.value}}:null;
}