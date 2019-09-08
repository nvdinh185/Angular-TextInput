import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayso',
  templateUrl: './dayso.component.html',
  styleUrls: ['./dayso.component.css']
})
export class DaysoComponent implements OnInit {
  arrDaySo;
  tong;
  constructor() { }

  ngOnInit() {
  }

  tinhTong(DaySoForm) {
    if (!DaySoForm.value.dayso.includes(',')) {
      throw new Error('Chuỗi phải ngăn cách bởi dấu phẩy!')
    }
    this.arrDaySo = DaySoForm.value.dayso.split(",");
    this.tong = 0;
    for (var i = 0; i < this.arrDaySo.length; i++) {
      this.tong += parseInt(this.arrDaySo[i]);
    }
  }

}
