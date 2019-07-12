import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formlayout',
  templateUrl: './formlayout.component.html',
  styleUrls: ['./formlayout.component.css']
})
export class FormlayoutComponent implements OnInit {

  mainForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      codeid:[null],billdate:[null],deliverytime:[null],clientid:[null],
      pactcode:[null],contractor:[null],salecategory:[null],settlement:[null],
      deliverytype:[null],packmanner:[null],remark:[null]
    });
  }

}
