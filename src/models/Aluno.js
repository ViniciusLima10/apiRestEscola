import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Nome precisa ter entre 2 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Sobrenome precisa ter entre 2 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Idade precisa ser um numero.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um numero.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um numero.',
          },
        },
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasOne(models.fotosdealunos, { foreignKey: 'aluno_id' });
  }
}
