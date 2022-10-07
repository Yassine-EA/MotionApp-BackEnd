const { Request, Response } = require("express");
const db = require("../models");

const MakersController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.Makers.findAndCountAll({ limit: 20 });

		return res.status(200).json(data);
	},

	

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_maker = req.params.id_maker;
		const makers = await db.Makers.findOne({
			where: { id_maker },
		});

		if (!makers) {
			return res.status(404).json("Tag not found");
		}

		return res.status(200).json(makers);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	add: async (req, res) => {
		const data = req.validatedData;
		const newMakers = await db.Makers.create(data);
		return res.status(201).json(newMakers);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_maker;

		const data = req.validatedData;

		const updatedMakers = await db.Makers.update(data, {
			where: { id_maker },
			returning: true,
		});

		if (!updatedMakers) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.Makers.findOne({ where: { id_maker } });

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_maker);

		const nbRow = await db.Makers.destroy({
			where: { id_maker },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};

module.exports = MakersController;
