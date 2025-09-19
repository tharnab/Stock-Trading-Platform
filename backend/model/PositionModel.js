const { model } = require('mongoose')

const { PositionSchema } = require('../schema/PositionSchema')

const PositionsModel = new model('position', PositionSchema);

module.exports = { PositionsModel }