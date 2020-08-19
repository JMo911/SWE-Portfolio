import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
const axios = require('axios');
import { mockProjects } from './mock-project-data';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects: any;
  constructor(private apollo: Apollo) { }

  // githubEndPoint = "https://api.github.com/graphql";
  // auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
  // myQuery = `
  //   query {
  //     user(login:"JMo911") {
  //     pinnedItems(first: 6, types: [REPOSITORY]) {
  //       totalCount
  //       edges {
  //         node {
  //           ... on Repository {
  //             name
  //             description
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  //   }
  // `

  ngOnInit() {
    const initialArray = mockProjects.data.user.pinnedItems.edges;
    const projectsArray = [];
    initialArray.forEach(element => {
      projectsArray.push(element.node);
    });
    this.projects = projectsArray;



    // axios.post(this.githubEndPoint, {
    //   query: this.myQuery
    // }, {headers: this.auth})
    // .then(res => {
    //   const initialArray = res.data.data.user.pinnedItems.edges;
    //   const projectsArray = [];
    //   initialArray.forEach(element => {
    //     projectsArray.push(element.node);
    //   });
    //   return projectsArray;
    // });

    // this.apollo
    //   .watchQuery({
    //     query: gql`
    //     {
    //       projects {
    //         name
    //         description
    //         url
    //       }
    //     }
    //     `,
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.projects = result.data['projects'];

    //   });
  }

}
