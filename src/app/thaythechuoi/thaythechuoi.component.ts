import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thaythechuoi',
  templateUrl: './thaythechuoi.component.html',
  styleUrls: ['./thaythechuoi.component.css']
})
export class ThaythechuoiComponent implements OnInit {

  doangoc;
  tugoc;
  tuthaythe;
  doanthaythe;
  constructor() {}

  ngOnInit() {
  }

  isValidator(){
    if((typeof(this.doangoc)=="undefined")
    ||(typeof(this.tugoc)=="undefined")
    ||(typeof(this.tuthaythe)=="undefined")) return false;
    return true;
  }

  onSubmit(){
    //thực hiện thay thế nếu tìm được ở vị trí đầu tiên
    var re = new RegExp("^"+this.tugoc+" ", 'g');
    this.doanthaythe = this.doangoc.replace(re, this.tuthaythe+" ");
    //thực hiện thay thế nếu tìm được ở vị trí giữa
    var re = new RegExp(" "+this.tugoc+" ", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " "+this.tuthaythe+" ");
    //thực hiện thay thế nếu tìm được ở vị trí cuối cùng
    var re = new RegExp(" "+this.tugoc+"$", 'g');
    this.doanthaythe = this.doanthaythe.replace(re, " "+this.tuthaythe);
  }

}
