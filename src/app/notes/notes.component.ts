import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from './../sharedClassesAndTypes/name.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registrationForm = this.fb.group({
    nameCon:["", [Validators.required, ForbiddenNameValidator]],
    discountCBCon:[false],
    number:[, Validators.required],
    anotherComment:this.fb.array([])
  });
  get nameCon(){
    return this.registrationForm.get("nameCon");
  }
  get discountCBCon(){
    return this.registrationForm.get("discountCBCon");
  }
  get number(){
    return this.registrationForm.get("number");
  }
  get anotherComment(){
    return this.registrationForm.get("anotherComment") as FormArray;
  }

  changeDiscountValue(){
    this.discountCBCon?.setValue(!this.discountCBCon.value);
  }

  addComment(){
    this.anotherComment.push(this.fb.control(""));
  }

  ngOnInit(): void {
  }

}