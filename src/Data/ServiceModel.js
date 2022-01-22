const { sequelize, Sequelize, DataTypes, Model } = require("./DBcreation");

class Service extends Model{};

Service.init({
    reference: {type: DataTypes.INTEGER,
    primaryKey: true},
    email: DataTypes.STRING,
    date: DataTypes.DATE,
    service: DataTypes.STRING
}, {
    sequelize, timestamps: false
});

module.exports = {Service};

(async () => {
    await sequelize.sync({ force: true });
    const m = await Service.create({reference: 123 , email:"TestEmail@gmail.com",date: new Date(), service: "Test Service"})
    console.log("Inserted service item name is:" + m.service);
})();


// TODO FIX DATE
// TODO CHECK SERVICE CREATION MODEL
// TODO ADD VALIDATION