/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSport = /* GraphQL */ `
  query GetSport($id: ID!) {
    getSport(id: $id) {
      id
      name
      grad
      height
      weight
      email
      phone
      gpa
      rank
      sat
      act
      aps
      coachname
      coachphone
      coachemail
      parentname
      parentphone
      parentemail
      address
      sport
      team
      position
      highlight
      jersey
      stat1
      stat2
      stat3
      stat4
      stat5
      stat6
      volunteer
      hobbies
      othersport
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSports = /* GraphQL */ `
  query ListSports(
    $filter: ModelSportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        grad
        height
        weight
        email
        phone
        gpa
        rank
        sat
        act
        aps
        coachname
        coachphone
        coachemail
        parentname
        parentphone
        parentemail
        address
        sport
        team
        position
        highlight
        jersey
        stat1
        stat2
        stat3
        stat4
        stat5
        stat6
        volunteer
        hobbies
        othersport
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
