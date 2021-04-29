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
   * **YÊU CẦU PHẢI NHẬP SỐ NGUYÊN, NẾU KHÔNG FORM SẼ BỊ SUBMIT ĐI**
   * **VÀ FORM SẼ HOẠT ĐỘNG SAI, NẾU MUỐN ĐÚNG THÌ PHẢI DÙNG ngSubmit**
   * @param HCNForm 
   */
  tinhHCN(HCNForm) {
    if (!Number.isInteger(parseFloat(HCNForm.value.chieuDai)) || !Number.isInteger(parseFloat(HCNForm.value.chieuRong))) {
      // throw new Error('Phải nhập vào số nguyên!');
      alert('Phải nhập vào số nguyên!');
      return;
    }
    this.chuVi = 2 * (parseInt(HCNForm.value.chieuDai) + parseInt(HCNForm.value.chieuRong));
    this.dienTich = parseInt(HCNForm.value.chieuDai) * parseInt(HCNForm.value.chieuRong);
  }

}
