const { model } = require('mongoose')

const { OrderSchema } = require('../schema/OrderSchema')

const OrdersModel = new model('Order', OrderSchema);

module.exports = { OrdersModel }