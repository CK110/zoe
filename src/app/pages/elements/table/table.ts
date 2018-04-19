import {Component} from '@angular/core';

@Component({
  selector: 'page-demo-table',
  templateUrl: 'table.html'
})

export class TablePage {

  resultList = [
    {
      startdate:'1',
      diffMonths:'2',
      totalMonths:'3',
      diffRateString:'4'
    },
    {
      startdate:'1',
      diffMonths:'2',
      totalMonths:'3',
      diffRateString:'4'
    },
    {
      startdate:'1',
      diffMonths:'2',
      totalMonths:'3',
      diffRateString:'4'
    },
    {
      startdate:'1',
      diffMonths:'2',
      totalMonths:'3',
      diffRateString:'4'
    }
  ]

  name:string='xxx';

  htmlStr:string;

  constructor() {

    this.htmlStr = this.getHtml();
  }

  getHtml(){
    let html = `<table border="1px"><tr><td></td>`;
    if(this.resultList.length >= 8){
      html = html + `
          <td>安装日期1</td>
          <td>安装日期2</td>
          <td>开通日期1</td>
          <td>开通日期2</td>
      `
    };
    if(this.resultList.length < 8){
      html = html + `
        <td>维保日期1</td>
      `
    };

    html = html + `
        <td>平均安装1</td>
        <td>平均安装2</td>
        <td>平均开通1</td>
        <td>平均开通2</td>
      `;
    if(this.resultList.length > 9){
      html = html + `
          <td>自定义日期1</td>
          <td>自定义日期2</td>
      `
    };
    html = html + `</tr><tr><td>实际起保日</td>`;

    this.resultList.forEach((result)=>{
      html =html + `
        <td>${result.startdate}</td>
      `
    });

    html = html + `</tr><tr><td>偏差月数</td>`;
    this.resultList.forEach((result)=>{
      html =html + `
        <td>${result.diffMonths}</td>
      `
    });

    html = html + `</tr><tr><td>应签月数</td>`;

    this.resultList.forEach((result)=>{
      html =html + `
        <td>${result.totalMonths}</td>
      `
    });
    html = html + `</tr><tr><td>比差</td>`;

    this.resultList.forEach((result)=>{
      html =html + `
        <td>${result.diffRateString}</td>
      `
    });
    html = html + `</tr></table>`;

    return html;
  }

}
