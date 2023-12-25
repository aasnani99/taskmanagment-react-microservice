const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: 'your_username',
  password: 'your_password',
  database: 'task_management',
  host: 'localhost',
  port: 5432,
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;