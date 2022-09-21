const { Request, Response } = require("express");
const db = require("../models");

const GenreController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const data = await db.Genres.findAndCountAll();

    return res.status(200).json(data);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getOne: async (req, res) => {
    
    const id_genre = parseInt(req.params.id_genre);

    const genre = await db.Genres.findOne({
      where: { id_genre },
    });

    if (!genre) {
      return res.status(404).json("Tag not found");
    }

    return res.status(200).json(genre);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  add: async (req, res) => {
    const data = req.validatedData;

    const newGenre = await db.Genres.create(data);
    return res.status(201).json(newGenre);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const id = parseInt(req.params.id_genre);

    const data = req.validatedData;

    const updatedGenre = await db.Genres.update(data, {
      where: { id_genre },
      returning: true,
    });

    if (!updatedGenre) {
      return res.status(400).json("Bad Request");
    }

    const updatedValue = await db.Genres.findOne({ where: { id_genre } });

    return res.status(200).json(updatedValue);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const id = parseInt(req.params.id_genre);

    const nbRow = await db.Genres.destroy({
      where: { id_genre },
    });

    if (nbRow !== 1) {
      return res.status(404).json("Tag not found");
    }

    return res.sendStatus(204);
  },
};

module.exports = GenreController;
