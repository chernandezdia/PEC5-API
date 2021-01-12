import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/models/data.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: Data;

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("Identifier --> ", identifier);

    this.dataService.getDataById(identifier).subscribe((data) => {
      if (!data) {
        return this.router.navigateByUrl('/');
      }

      this.data = data;
      console.log('Data --> ', this.data);


    })

  }

}
