import {Model, Sequelize } from "../Database/Sequalize.js";

export const User = Model.define('User', {
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  // Other model options go here
});


await User.sync();
