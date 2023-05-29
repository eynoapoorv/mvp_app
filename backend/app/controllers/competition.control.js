// import competitionModel from "../models/competitionModel";

// create competition.control.js file

const competitionModel = require("../models/competitionModel")

export const competionControl = async (req, res) => {
    try {
        const { opponentOne, opponentTwo } = req.body;


        // validation
        if (!opponentOne) {
            return res.send({ message: "Opponent One is Required to Start Competation" });
        }
        if (!opponentTwo) {
            return res.send({ message: "Opponent Two is Required to Start Competation" });
        }


        // save Competation data
        const data = await new competitionModel({
            opponentOne,
            opponentTwo
        }).save();
        res.status(201).send({
            success: true,
            message: "Competation Start",
            data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error",
            error,
        });
    }
}