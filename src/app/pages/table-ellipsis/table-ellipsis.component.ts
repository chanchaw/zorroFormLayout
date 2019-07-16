import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ellipsis',
  templateUrl: './table-ellipsis.component.html',
  styleUrls: ['./table-ellipsis.component.css']
})
export class TableEllipsisComponent implements OnInit {

  details:any[] =[];

  widthOrdercode:string="60px";
  constructor(
  ) { }

  ngOnInit() {
    this.details = this.getData();
  }

  getData(){
    return [
      {id:1,mainid:3,ordercode:"190701A",goodsname:"单面珊瑚绒",spec01:"180CM",spec02:"350g",colorname:"西瓜红",kg:1200,price:25},
      {id:1,mainid:3,ordercode:"190701B",goodsname:"双面法兰绒",spec01:"180CM",spec02:"350g",colorname:"蓝底泰迪熊加猎鹰",kg:800,price:25},
      {id:1,mainid:3,ordercode:"190701C",goodsname:"摇粒绒",spec01:"180CM",spec02:"350g",colorname:"玫红",kg:2200,price:25},
      {id:1,mainid:3,ordercode:"ABS180715001",goodsname:"烂花麂皮绒",spec01:"180CM",spec02:"350g",colorname:"黄色方格小碎花",kg:200,price:25},
      {id:1,mainid:3,ordercode:"ABS180715002",goodsname:"双摇羊羔绒AB同面",spec01:"180CM",spec02:"350g",colorname:"詹姆兰尼斯特",kg:5500,price:25},
      {id:1,mainid:3,ordercode:"chanchaw",goodsname:"John Snow",spec01:"180CM",spec02:"350g",colorname:"丹妮莉丝坦格利安",kg:7860,price:25},
    ]
  }

  c60(){
    this.widthOrdercode = "60px";
  }

  c100(){
    this.widthOrdercode = "100px";
  }
}



export class OrderDetail{
  id:number;
  mainid:number;
  ordercode:string;
  oordercode:string;
  stylecode:string;
  goodsname:string;
  spec01:string;
  spec02:string;
  size:string;colorcode:string;colorname:string;color:string;
  meter:number;kg:number;yard:number;chargeunit:string;price:number;
  amount:number;platemake:number;sample:number;remark:string;
  createtime:Date;creator:string;updatetime:Date;updater:string;
  status:number
}

