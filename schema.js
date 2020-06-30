require('dotenv').config();
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

// Project Type
const ProjectType = new GraphQLObjectType({
  name: 'ProjectType',
  fields: () => ({
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

// QUERY VARIABLES
const githubEndPoint = "https://api.github.com/graphql";
const auth = {Authorization: `bearer ${process.env.GITHUBTOKEN}`}
const myQuery = `
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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve() {
        return axios.post(githubEndPoint, {
          query: myQuery
        }, {headers: auth})
        .then(res => {
          const initialArray = res.data.data.user.pinnedItems.edges;
          const projectsArray = [];
          initialArray.forEach(element => {
            projectsArray.push(element.node);
          });
          return projectsArray;
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
