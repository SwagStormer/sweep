import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.scss']
})
export class AssignmentCreateComponent implements OnInit {


  constructor(
    private dialog: MdDialogRef<AssignmentCreateComponent>,

  ) { }

  ngOnInit() {
  }

  valid(): boolean {
    return true;
  }

  submit() {

    this.dialog.close();
  }





}
