import nc from 'next-connect';
import Pcb from '../../../models/Pcb';
import db from '../../../utils/db';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newPcb = new Pcb({
    boardType: req.body.boardType,
  });
  const user = await newPcb.save();
  await db.disconnect();
  res.send({
    boardType: user.boardType,
  });
});

export default handler;
