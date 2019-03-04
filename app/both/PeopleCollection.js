import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
// SimpleSchema package provides a way to specify constraints on structure of Mongo documents
// Collection2 provides a way to attach a Simple Schema to a Meteor collection such that violating the contraints will trigger an error

const peopleSchema = new SimpleSchema(
    {
      first: String,
      last: String,
      age: SimpleSchema.Integer,
      city: String
    }
);
// variable bound to an instance of SimpleSchema, which takes an object and defines the contraints

export const people = new Mongo.Collection('People');
// creates a new Mongo collection called People and binds it to the variable "people"
// exports the people variable, which means other files can access the variable by importing it

// since this is in the both folder, both client and server code can access the People collection with people

people.attachSchema(peopleSchema);
// attaches peopleSchema to the People collection with Collection2 method attachSchema

