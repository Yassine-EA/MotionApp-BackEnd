const { Request, Response } = require("express");
const db = require("../models");

const ClassificationController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.Classification.findAndCountAll();

		return res.status(200).json(data);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_media = req.params.id_media;
		const media = await db.Classification.findOne({
			where: { id_media },
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
		const newMedias = await db.Classification.create(data);
		return res.status(201).json(newMedias);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_media;

		const data = req.validatedData;

		const updatedMedia = await db.Classification.update(data, {
			where: { id_media },
			returning: true,
		});

		if (!updatedMedia) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.Classification.findOne({
			where: { id_media },
		});

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_genre);

		const nbRow = await db.Classification.destroy({
			where: { id_media },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};
module.exports = ClassificationController;
