import nc from 'next-connect';
import Category from '../../models/Category';
import db from '../../utils/db';
import data from '../../utils/categories';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Category.deleteMany();
  await Category.insertMany(data.categories);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;