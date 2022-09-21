const { Request, Response } = require("express");
const db = require("../models");

const ImageController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.Images.findAndCountAll();

		return res.status(200).json(data);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_media = req.params.id_media;
		const image = await db.Images.findOne({
			where: { id_media },
		});

		if (!image) {
			return res.status(404).json("Tag not found");
		}

		return res.status(200).json(image);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	add: async (req, res) => {
		const data = req.validatedData;
		const newImage = await db.Images.create(data);
		return res.status(201).json(newImage);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_media;

		const data = req.validatedData;

		const updatedImage = await db.Images.update(data, {
			where: { id_media },
			returning: true,
		});

		if (!updatedImage) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.Images.findOne({ where: { id_media } });

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_media);

		const nbRow = await db.Images.destroy({
			where: { id_media },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};

module.exports = ImageController;
