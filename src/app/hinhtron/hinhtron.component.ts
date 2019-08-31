import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhtron',
  templateUrl: './hinhtron.component.html',
  styleUrls: ['./hinhtron.component.css']
})
export class HinhtronComponent implements OnInit {
  banKinh;
  dienTich;
  constructor() { }

  ngOnInit() { }

  isValidator(HinhTronForm) {
    var typeBanKinh = typeof(HinhTronForm.value.banKinh);
    var typeDienTich = typeof(HinhTronForm.value.dienTich);
    if (((typeBanKinh == "undefined") && (typeDienTich == "undefined"))
      || ((typeBanKinh != "undefined") && (typeDienTich != "undefined")))
      return false;
    return true;
  }
  onSubmit(HinhTronForm) {
    if (typeof (HinhTronForm.value.banKinh) != "undefined") {
      this.dienTich = parseInt(HinhTronForm.value.banKinh) * parseInt(HinhTronForm.value.banKinh) * 3.14;
    } else {
      this.banKinh = Math.sqrt(parseInt(HinhTronForm.value.dienTich) / 3.14);
    }
  }
}
