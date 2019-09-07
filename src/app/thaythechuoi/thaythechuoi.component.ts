import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thaythechuoi',
  templateUrl: './thaythechuoi.component.html',
  styleUrls: ['./thaythechuoi.component.css']
})
export class ThaythechuoiComponent implements OnInit {

  //các biến mới khởi tạo thì có kiểu là underfined
  doangoc;
  tugoc;
  tuthaythe;
  doanthaythe;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Xác định xem đang nhập liệu ở ô nào thì gán giá trị cho biến tương ứng
   * @param ev 
   * @param name 
   */
  onChange(ev, name) {
    if (name === 'doangoc') {
      this.doangoc = ev.target.value;
    } else if (name === 'tugoc') {
      this.tugoc = ev.target.value;
    } else {
      this.tuthaythe = ev.target.value
    }
  }

  /**
   * Nếu chưa nhập 1 trong 3 trường thì trả về false
   */
  isValidator() {
    console.log(123)
    if ((typeof (this.doangoc) == "undefined" || this.doangoc === '')
      || (typeof (this.tugoc) == "undefined" || this.tugoc === '')
      || (typeof (this.tuthaythe) == "undefined" || this.tuthaythe === ''))
      return false;
    return true;
  }

  /**
   * Thực hiện thay thế
   */
  onSubmit() {
    //thực hiện thay thế nếu tìm được ở vị trí đầu tiên
    var re = new RegExp("^" + this.tugoc + " ", 'g');
    this.doanthaythe = this.doangoc.replace(re, this.tuthaythe + " ");
    //thực hiện thay thế nếu tìm được ở vị trí giữa
    var re = new RegExp(" " + this.tugoc + " ", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " " + this.tuthaythe + " ");
    //thực hiện thay thế nếu tìm được ở vị trí cuối cùng
    var re = new RegExp(" " + this.tugoc + "$", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " " + this.tuthaythe);
    //thực hiện thay thế nếu chỉ có một từ
    this.doanthaythe = this.doanthaythe.replace(this.tugoc, this.tuthaythe);
  }

}
