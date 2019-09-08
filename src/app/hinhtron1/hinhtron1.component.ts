import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhtron1',
  templateUrl: './hinhtron1.component.html',
  styleUrls: ['./hinhtron1.component.css']
})
export class Hinhtron1Component implements OnInit {
  banKinh;
  dienTich;
  check = false;
  constructor() { }

  ngOnInit() { }

  onChange(ev, name) {
    if (name === 'bankinh') {
      this.banKinh = ev.target.value;
    } else {
      this.dienTich = ev.target.value;
    }
  }

  isValidator() {
    if (((this.banKinh != undefined && this.banKinh != "") && (this.dienTich != undefined && this.dienTich != "")) ||
      ((this.banKinh == undefined || this.banKinh == "") && (this.dienTich == undefined || this.dienTich == ""))) {
      return false;
    } else return true;
  }

  onSubmit() {
    if (typeof (this.banKinh) != "undefined" && this.banKinh !== "") {
      this.dienTich = parseFloat(this.banKinh) * parseFloat(this.banKinh) * 3.14;
    } else {
      this.banKinh = Math.sqrt(parseFloat(this.dienTich) / 3.14);
    }
  }
}
