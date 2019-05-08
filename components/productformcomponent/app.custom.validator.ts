import { AbstractControl } from '@angular/forms';

export class CheckEvenValidator {
    // set the return type of method as any
    // this means that, if the value is valid
    // method must return 'null'
    // if invalid then must return
    // {valid:false}
    static checkEven(ctrl: AbstractControl): any {
        if (parseInt(ctrl.value) % 2 === 0) {
            return null;
        } else {
            return { valid: false };
        }
    }
}