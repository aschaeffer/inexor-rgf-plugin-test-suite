import {gql} from "@apollo/client";

export default gql`
  mutation {
    instances {
      entities {
        create(
          type: "add",
          id: "08e65d5d-b015-4c1f-9c8d-25a8080d44b7",
          properties: [
            {
              name: "lhs",
              value: 10
            },
            {
              name: "rhs",
              value: 20
            },
            {
              name: "result",
              value: 30
            }
          ]
        ) {
          id
          type {
            name
          }
          properties(
            names: [
              "lhs",
              "rhs",
              "result"
            ]
          ) {
            name
            value
          }
        }
      }
    }
  }
`
