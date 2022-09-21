const { Request, Response } = require("express");
const db = require("../models");

const CastMoviesController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.CastMovies.findAndCountAll();

		return res.status(200).json(data);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_maker = req.params.id_maker;
		const media = await db.CastMovies.findOne({
			where: { id_maker },
		});

		if (!media) {
			return res.status(404).json("Tag not found");
		}

		return res.status(200).json(media);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	add: async (req, res) => {
		const data = req.validatedData;
		const newMedias = await db.CastMovies.create(data);
		return res.status(201).json(newMedias);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_maker;

		const data = req.validatedData;

		const updatedMedia = await db.CastMovies.update(data, {
			where: { id_maker },
			returning: true,
		});

		if (!updatedMedia) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.CastMovies.findOne({
			where: { id_maker },
		});

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_maker);

		const nbRow = await db.CastMovies.destroy({
			where: { id_maker },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};
module.exports = CastMoviesController;
