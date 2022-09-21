const { Request, Response } = require("express");
const db = require("../models");

const SimilarsController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.Similars.findAndCountAll();

		return res.status(200).json(data);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_media = req.params.id_media;
		const similars = await db.Similars.findOne({
			where: { id_media },
		});

		if (!similars) {
			return res.status(404).json("Tag not found");
		}

		return res.status(200).json(similars);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	add: async (req, res) => {
		const data = req.validatedData;
		const newSimilars = await db.Similars.create(data);
		return res.status(201).json(newSimilars);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_media;

		const data = req.validatedData;

		const updatedSimilars = await db.Similars.update(data, {
			where: { id_media },
			returning: true,
		});

		if (!updatedSimilars) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.Similars.findOne({ where: { id_media } });

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_media);

		const nbRow = await db.Similars.destroy({
			where: { id_media },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};

module.exports = SimilarsController;
