import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
    dialect: "sqlite", 
    storage: "./boost-service.sqlite"
});

module.exports = {sequelize, DataTypes, Model};