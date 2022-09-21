const { Request, Response } = require("express");
const db = require("../models");

const RolesController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getAll: async (req, res) => {
		const data = await db.Roles.findAndCountAll();

		return res.status(200).json(data);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	getOne: async (req, res) => {
		const id_media = req.params.id_media;
		const roles = await db.Roles.findOne({
			where: { id_media },
		});

		if (!roles) {
			return res.status(404).json("Tag not found");
		}

		return res.status(200).json(roles);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	add: async (req, res) => {
		const data = req.validatedData;
		const newRoles = await db.Roles.create(data);
		return res.status(201).json(newRoles);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	update: async (req, res) => {
		const id = req.params.id_media;

		const data = req.validatedData;

		const updatedRoles = await db.Roles.update(data, {
			where: { id_media },
			returning: true,
		});

		if (!updatedRoles) {
			return res.status(400).json("Bad Request");
		}

		const updatedValue = await db.Roles.findOne({ where: { id_media } });

		return res.status(200).json(updatedValue);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	delete: async (req, res) => {
		const id = parseInt(req.params.id_media);

		const nbRow = await db.Roles.destroy({
			where: { id_media },
		});

		if (nbRow !== 1) {
			return res.status(404).json("Tag not found");
		}

		return res.sendStatus(204);
	},
};

module.exports = RolesController;
