import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  userId: string;
  userData: any;

  constructor(private route: ActivatedRoute, private dataService: TableService) { }

  ngOnInit() {


    this.route.params.subscribe(params => {
      const userId = params['id'];
      console.log('User ID:', userId);
      this.dataService.getUserById(userId).subscribe((data) => {
        console.log(data);
        this.userData = data;
      })

    });

  }

}
