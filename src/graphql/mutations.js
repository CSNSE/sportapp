/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSport = /* GraphQL */ `
  mutation CreateSport(
    $input: CreateSportInput!
    $condition: ModelSportConditionInput
  ) {
    createSport(input: $input, condition: $condition) {
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
export const updateSport = /* GraphQL */ `
  mutation UpdateSport(
    $input: UpdateSportInput!
    $condition: ModelSportConditionInput
  ) {
    updateSport(input: $input, condition: $condition) {
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
export const deleteSport = /* GraphQL */ `
  mutation DeleteSport(
    $input: DeleteSportInput!
    $condition: ModelSportConditionInput
  ) {
    deleteSport(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
