import {
  addContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts(req.user._id);

  res.json(contacts);
};

export const addContactController = async (req, res) => {
  const contact = await addContact({ ...req.body, userId: req.user._id });

  res.status(201).json(contact);
};

export const deleteContactController = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await deleteContact(req.user._id, id);

  res.json(deletedContact);
};

export const updateContactController = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await updateContact(id, req.body, req.user._id);

  res.status(200).json(updatedContact);
};
