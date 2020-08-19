import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
<<<<<<< Updated upstream
||||||| merged common ancestors
const axios = require('axios');
<<<<<<< Updated upstream
=======
const axios = require('axios');
import { mockProjects } from './mock-project-data';
>>>>>>> Stashed changes
||||||| merged common ancestors
=======
import { mockProjects } from './mock-project-data';
>>>>>>> Stashed changes

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projects: any;
  constructor(private apollo: Apollo) { }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
        this.projects = result.data['projects'];
||||||| merged common ancestors
  githubEndPoint = "https://api.github.com/graphql";
  auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
  myQuery = `
    query {
      user(login:"JMo911") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
    }
  `
=======
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
>>>>>>> Stashed changes
||||||| merged common ancestors
  githubEndPoint = "https://api.github.com/graphql";
  auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
  myQuery = `
    query {
      user(login:"JMo911") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
    }
  `
=======
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
>>>>>>> Stashed changes

<<<<<<< Updated upstream
      });
||||||| merged common ancestors
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
=======
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
>>>>>>> Stashed changes
  }

}
