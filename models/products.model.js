"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }
  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      content: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.ENUM("FOR_SALE", "SOLD_OUT"),
        defaultValue: "FOR_SALE"
      }
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Product"
    }
  );
  return Product;
};
