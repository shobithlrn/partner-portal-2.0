import {Component} from '@angular/core'

@Component({
	selector:'modal-window',
	templateUrl:'./../../public/templates/generic/modal.window.component.html'
})

export class ModalWindowComponent{
	private ErrorMsg: string;
    public ErrorMessageIsVisible: boolean=true;

    showErrorMessage(msg: string)
    {
        this.ErrorMsg = msg;
        this.ErrorMessageIsVisible = true;
    }

    hideErrorMsg()
    {
        this.ErrorMessageIsVisible = false;
    }
}