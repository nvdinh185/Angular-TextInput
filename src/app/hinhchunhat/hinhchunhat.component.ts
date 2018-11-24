import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhchunhat',
  templateUrl: './hinhchunhat.component.html',
  styleUrls: ['./hinhchunhat.component.css']
})
export class HinhchunhatComponent implements OnInit {

  chuVi;
  dienTich;

  constructor() {}

  ngOnInit() {
  }

  tinhHCN(HCNForm){
    this.chuVi = 2*(parseInt(HCNForm.value.chieuDai)+parseInt(HCNForm.value.chieuRong));
    this.dienTich = parseInt(HCNForm.value.chieuDai)*parseInt(HCNForm.value.chieuRong);
  }

}
