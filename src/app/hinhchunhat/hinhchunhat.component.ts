import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhchunhat',
  templateUrl: './hinhchunhat.component.html',
  styleUrls: ['./hinhchunhat.component.css']
})
export class HinhchunhatComponent implements OnInit {

  chuVi;
  dienTich;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Khi kích chuột vào nút tính thì thực hiện hàm này
   * Hàm này sẽ tính chu vi và diện tích của hình chữ nhật
   * Biến vào lấy từ HCNForm.value
   * @param HCNForm 
   */
  tinhHCN(HCNForm) {
    this.chuVi = 2 * (parseInt(HCNForm.value.chieuDai) + parseInt(HCNForm.value.chieuRong));
    this.dienTich = parseInt(HCNForm.value.chieuDai) * parseInt(HCNForm.value.chieuRong);
  }

}
