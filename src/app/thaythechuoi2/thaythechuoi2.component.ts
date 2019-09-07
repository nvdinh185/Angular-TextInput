import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thaythechuoi2',
  templateUrl: './thaythechuoi2.component.html',
  styleUrls: ['./thaythechuoi2.component.css']
})
export class Thaythechuoi2Component implements OnInit {

  doangoc;
  tugoc;
  tuthaythe;
  doanthaythe;
  constructor() { }

  ngOnInit() {
  }

  //Nếu chưa nhập 1 trong 3 trường thì trả về false
  isValidator(ThayTheForm) {
    if ((typeof (ThayTheForm.value.doangoc) == "undefined" || ThayTheForm.value.doangoc === '')
      || (typeof (ThayTheForm.value.tugoc) == "undefined" || ThayTheForm.value.tugoc === '')
      || (typeof (ThayTheForm.value.tuthaythe) == "undefined") || ThayTheForm.value.tuthaythe === '') return false;
    return true;
  }

  onSubmit(ThayTheForm) {
    //thực hiện thay thế nếu tìm được ở vị trí đầu tiên
    var re = new RegExp("^" + ThayTheForm.value.tugoc + " ", 'g');
    this.doanthaythe = ThayTheForm.value.doangoc.replace(re, ThayTheForm.value.tuthaythe + " ");
    //thực hiện thay thế nếu tìm được ở những vị trí giữa
    var re = new RegExp(" " + ThayTheForm.value.tugoc + " ", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " " + ThayTheForm.value.tuthaythe + " ");
    //thực hiện thay thế nếu tìm được ở vị trí cuối cùng
    var re = new RegExp(" " + ThayTheForm.value.tugoc + "$", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " " + ThayTheForm.value.tuthaythe);
    //thực hiện thay thế nếu chỉ có một từ
    this.doanthaythe = this.doanthaythe.replace(ThayTheForm.value.tugoc, ThayTheForm.value.tuthaythe);
  }

}