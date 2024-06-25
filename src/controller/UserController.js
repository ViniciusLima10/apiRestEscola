import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error('Error in store method:', e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['An unexpected error occurred'],
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      console.error('Error in index method:', e);
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error('Error in show method:', e);
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.error('Error in update method:', e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['An unexpected error occurred'],
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.error('Error in delete method:', e);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ['An unexpected error occurred'],
      });
    }
  }
}

export default new UserController();
