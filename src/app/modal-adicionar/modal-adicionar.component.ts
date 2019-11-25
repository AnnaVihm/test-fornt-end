import { Component, OnInit, Inject, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.css']
})
export class ModalAdicionarComponent implements OnInit {
  public modalRef: BsModalRef; 

  isLinear = false;
  form: FormGroup;
  secondFormGroup: FormGroup;
  @Input() rede:any;
  @Input() paginas:any;
  @Output() formEvent = new EventEmitter();
  constructor(private _formBuilder: FormBuilder,private modalService: BsModalService) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      pagina:[''],
      rede:[this.rede]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class:"modal-lg"});
  }

  onSubmit(value){
    console.log(value)
    this.formEvent.emit(value)
    this.modalRef.hide();
  }
  
  
}
