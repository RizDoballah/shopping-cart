import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public modalData: any)
  { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

}



