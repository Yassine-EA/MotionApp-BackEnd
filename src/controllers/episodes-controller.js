const { Request, Response } = require("express");
const db = require("../models");

const EpisodeController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const data = await db.Episodes.findAndCountAll();

    return res.status(200).json(data);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getOne: async (req, res) => {
    const id_episode = parseInt(req.params.id);

    console.log("id > " + id_episode);

    const episodes = await db.Episodes.findOne({
      where: { id_episode },
    });

    if (!episodes) {
      return res.status(404).json("Tag not found");
    }

    return res.status(200).json(episodes);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  add: async (req, res) => {
    const data = req.validatedData;
    console.log(data);
    const newEpisode = await db.Episodes.create(data);
    return res.status(201).json(newEpisode);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const id_episode = parseInt(req.params.id_episode);

    const data = req.validatedData;

    const updatedEpisode = await db.Episodes.update(data, {
      where: { id_episode },
      returning: true,
    });

    if (!updatedEpisode) {
      return res.status(400).json("Bad Request");
    }

    const updatedValue = await db.Episodes.findOne({ where: { id_episode } });

    return res.status(200).json(updatedValue);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const id = parseInt(req.params.id_episode);

    const nbRow = await db.Episodes.destroy({
      where: { id_episode },
    });

    if (nbRow !== 1) {
      return res.status(404).json("Tag not found");
    }

    return res.sendStatus(204);
  },
};

module.exports = EpisodeController;
