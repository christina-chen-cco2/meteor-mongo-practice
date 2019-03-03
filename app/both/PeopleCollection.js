import { Mongo } from 'meteor/mongo';

export const people = new Mongo.Collection('People');
// creates a new Mongo collection called People and binds it to the variable "people"
// exports the people variable, which means other files can access the variable by importing it

// since this is in the both folder, both client and server code can access the People collection with people

