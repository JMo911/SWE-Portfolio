require('dotenv').config();
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const githubEndPoint = "https://api.github.com/graphql";

// Hardcoded Data
const projects = [
  {
      "name": "project3auth",
      "description": "V-STAT solves transparency problems in the automotive repair process by connecting clients, insurance agents, and mechanics in one portal that shows insurance case information, vehicle repair tasks/status, and a comments thread.",
      "url": "https://github.com/JMo911/project3auth"
  },
  {
      "name": "PassportReactDemo",
      "description": "ValetX revolutionizes the valet process by creating electronic tickets, handling all transactions, and allowing guests to request their car from within the app. No more paper tickets or awkward interactions with valets.",
      "url": "https://github.com/JMo911/PassportReactDemo"
  },
  {
      "name": "DiagNotes",
      "description": "DiagNotes strives to automate the clinical documentation process and alleviate the burden so that doctors can truly be with their patients.",
      "url": "https://github.com/JMo911/DiagNotes"
  },
  {
      "name": "GoogleBooks",
      "description": "This app provides a simple Google Books API search that allows users to save books they like and find the books on Google.",
      "url": "https://github.com/JMo911/GoogleBooks"
  }
]

// Project Type
const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: () => ({
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

// root query
//   return axios.post(githubEndPoint, {
//     query: repoQuery(name, repo)
//   }, {headers: auth});
const myQuery = `
{
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

const auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parentValue) {
        return axios.post(githubEndPoint, {
          query: myQuery
        }, {headers: auth})
        .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

// require('dotenv').config();
// const axios = require('axios');

// const auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
// const githubEndPoint = "https://api.github.com/graphql";

// function repoQuery(name, repo) {
//   return `
//     {
//       user(login:"JMo911") {
//         pinnedItems(first: 6, types: [REPOSITORY]) {
//           totalCount
//           edges {
//             node {
//               ... on Repository {
//                 name
//                 description
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   `
// }

// function fetchRepositoryData(name, repo) {
//   return axios.post(githubEndPoint, {
//     query: repoQuery(name, repo)
//   }, {headers: auth});
// }
