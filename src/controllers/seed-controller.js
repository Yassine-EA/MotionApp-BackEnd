const { Request, Response } = require("express");
const db = require("../models");

const SeedController = {
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addMedias: async (req, res) => {
		// console.log("req :>> ", req);
		const newMedias = await db.Medias.create(req);
		return res.status(201).json(newMedias);
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addMakers: async (req, res) => {
		// console.log("req :>> ", req);
		const newMaker = await db.Makers.create(req);
		return res.status(201).json(newMaker);
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addGenres: async (req, res) => {
		// console.log("req :>> ", req.key);
		const data = { genre_value: req.key };
		const newGenre = await db.Genres.create(data);
		return res.status(201).json(newGenre);
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addImages: async (req, res) => {
		console.log("req :>> ", req);

		const data = {
			id_media: req.id_media,
			image_title: req.image_title,
			image_type: req.image_type,
			url: req.url,
		};
		const newImage = await db.Images.create(data);
		return res.status(201).json(newImage);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addMediasCast: async (req, res) => {
		// console.log("req :>> ", req);
		const data = {
			id_media: req.id_media,
			title: req.title,
			fullTitle: req.fullTitle,
			media_type: req.media_type,
			release_year: " _ ",
			image: req.image,
			releaseDate: " _ ",
			runtimeStr: " _ ",
			rating: req.rating,
		};
		const newMedias = await db.Medias.create(data);
		return res.status(201).json(newMedias);
	},
	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addSimilars: async (req, res) => {
		const data = {
			id_media: req.id_media,
			id_similars: req.id_similars,
			rating: req.rating,
		};
		const newSimilars = await db.Similars.create(data);
		return res.status(201).json(newSimilars);
	},

	/**
	 * @param {Request} req
	 * @param {Response} res
	 */
	addRoles: async (req, res) => {
		const data = {
			id_maker: req.id_maker,
			id_media: req.id_media,
			roles: req.roles,
			as_character: req.as_character,
		};
		const newSimilars = await db.Roles.create(data);
		return res.status(201).json(newSimilars);
	},
};

module.exports = SeedController;
