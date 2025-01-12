import { ContactsCollection } from '../db/models/Contacts.js';

export const getAllContacts = (userId) => ContactsCollection.find({ userId });

export const addContact = (userData) => ContactsCollection.create(userData);

export const deleteContact = (userId, contactId) =>
  ContactsCollection.findOneAndDelete({ userId, _id: contactId });
