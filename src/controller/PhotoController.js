import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photoInput');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({ error: error.code });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await Photo.create({
          originalname,
          filename,
          aluno_id,
        });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({ error: 'Aluno nao encontrado' });
      }
    });
  }
}

export default new PhotoController();
