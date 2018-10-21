import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-section-space',
  templateUrl: './section-space.component.html',
  styleUrls: ['./section-space.component.css']
})

export class SectionSpaceComponent implements OnInit {
  repositories: any;

  constructor(private githubApi: GithubService) { }

  ngOnInit() {
    this.githubApi.searchRepos('test').subscribe(res => {
      console.log(res);
      this.repositories = res.items;
    }, err => {
      console.log(err);
    });
  }
}
