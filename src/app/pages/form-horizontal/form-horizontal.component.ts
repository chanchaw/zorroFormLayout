import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-horizontal',
  templateUrl: './form-horizontal.component.html',
  styleUrls: ['./form-horizontal.component.css']
})
export class FormHorizontalComponent implements OnInit {
  mainForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      codeid:[null,[Validators.required]],billdate:[null],deliverytime:[null],clientid:[null],
      pactcode:[null],contractor:[null],salecategory:[null],settlement:[null],
      deliverytype:[null],packmanner:[null],remark:[null]
    });
  }

  submitForm(): void {
    for (const i in this. mainForm.controls) {
      this.mainForm.controls[i].markAsDirty();
      this.mainForm.controls[i].updateValueAndValidity();
    }
  }

}
