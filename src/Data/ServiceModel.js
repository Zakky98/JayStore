import { sequelize, Sequelize, DataTypes, Model } from "sequelize_index";

class Service extends Model{};

Service.init({
    reference: DataTypes.INTEGER,
    email: DataTypes.STRING,
    date: DataTypes.DATETIME,
    service: DataTypes.STRING
}, {
    sequelize, timestamps: false
});

module.exports = {Service};

(async () => {
    await sequelize.sync({ force: true });
    const m = await Service.create({reference: 123 , email:"TestEmail@gmail.com",date: Date.now, service: "Test Service"})
    console.log("Inserted service item name is:" + m.service);
})();