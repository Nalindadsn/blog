import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import Contact from '../../../models/Contact';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  const contact = await newContact.save();
  await db.disconnect();


  res.send({
    _id: contact._id,
    name: contact.name,
    email: contact.email,
    message: contact.message,
  });
});

export default handler;
