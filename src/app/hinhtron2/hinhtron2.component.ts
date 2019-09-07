import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhtron2',
  templateUrl: './hinhtron2.component.html',
  styleUrls: ['./hinhtron2.component.css']
})
export class Hinhtron2Component implements OnInit {
  dblBK: number;
  dblDT: number;
  check = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Tính bán kính hoặc diện tích
   * @param HinhTronForm 
   */
  onSubmit(HinhTronForm) {
    let bankinh = HinhTronForm.value.bankinh;
    let dientich = HinhTronForm.value.dientich;
    if (bankinh != undefined && bankinh != "") {
      this.dblDT = parseFloat(bankinh) * parseFloat(bankinh) * 3.14;
    } else {
      this.dblBK = Math.sqrt((parseFloat(dientich)) / 3.14);
    }
  }

  /**
   * Hiện thông báo lỗi nếu nhập vào không thỏa mãn
   * @param HinhTronForm 
   */
  getMessage(HinhTronForm) {
    let bankinh = HinhTronForm.value.bankinh;
    let dientich = HinhTronForm.value.dientich;
    //Nếu cả 2 trường đều có dữ liệu hoặc cả 2 trường đều trống
    if (((bankinh != undefined && bankinh != "") && (dientich != undefined && dientich != "")) ||
      ((bankinh == undefined || bankinh == "") && (dientich == undefined || dientich == ""))) {
      this.check = false;
      return "Vui lòng nhập 1 trong 2 trường!";
    } else this.check = true;
  }

}
