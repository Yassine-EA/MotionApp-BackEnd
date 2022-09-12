const { Request, Response } = require("express");
const db = require("../models");

const MoviesController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const data = await db.Movies.findAndCountAll();

    return res.status(200).json(data);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getOne: async (req, res) => {
    const id_movie = parseInt(req.params.id);

    console.log("id > " + id_movie);

    const movie = await db.Movies.findOne({
      where: { id_movie },
    });

    if (!movie) {
      return res.status(404).json("Tag not found");
    }

    return res.status(200).json(movie);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  add: async (req, res) => {
    const data = req.validatedData;
    console.log(data);
    const newMovie = await db.Movies.create(data);
    return res.status(201).json(newMovie);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const id = parseInt(req.params.id_movie);

    const data = req.validatedData;

    const updatedMovie = await db.Movies.update(data, {
      where: { id_movie },
      returning: true,
    });

    if (!updatedGenre) {
      return res.status(400).json("Bad Request");
    }

    const updatedValue = await db.Movies.findOne({ where: { id_movie } });

    return res.status(200).json(updatedValue);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const id = parseInt(req.params.id_movie);

    const nbRow = await db.Movies.destroy({
      where: { id_movie },
    });

    if (nbRow !== 1) {
      return res.status(404).json("Tag not found");
    }

    return res.sendStatus(204);
  },
};

module.exports = MoviesController;
