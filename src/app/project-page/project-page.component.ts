import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          projects {
            name
            description
            url
          }
        }
        `,
      })
      .valueChanges.subscribe(result => {
        this.projects = result.data;
      });
  }

}
