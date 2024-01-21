import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'bod', 'phone', 'comment'];
  dataSource: any = [];
  ngOnInit() {
    this.loadData();
  }
  constructor(private tableService: TableService, private router: Router) {

  }
  loadData() {
    this.tableService.getALL().subscribe((data) => {
      console.table(data);
      this.dataSource = data;
    });
  }


  onRowClick(row: any) {
    // Access properties of the clicked row's data
    console.log('Clicked Row:', row);
    const clickedObjName = row.id;
    console.log('Clicked ObjName:', clickedObjName);
    console.log(typeof (clickedObjName))
    this.router.navigate([`/details/${clickedObjName}`]);
    // You can perform further actions with the objname or other properties here

  }
}
