import PDInteraction from "../models/pdinteraction.model.js";

// Helper function to extract interaction fields from request body
const extractInteractionFields = (body) => {
  const {
    p_id,
    d_id,
    treatment_name,
    meeting_date,
    treatment_duration,
    medicines_provided,
    hospital,
    symptoms,
    documents,
  } = body;
  return {
    p_id,
    d_id,
    treatment_name,
    meeting_date,
    treatment_duration,
    medicines_provided,
    hospital,
    symptoms,
    documents,
  };
};

export const createInteraction = async (req, res, next) => {
  try {
    const interactionFields = extractInteractionFields(req.body);
    const newInteraction = new PDInteraction(interactionFields);
    const savedInteraction = await newInteraction.save();
    res.status(201).json(savedInteraction);
  } catch (err) {
    next(err);
  }
};

export const deleteInteraction = async (req, res, next) => {
  try {
    await PDInteraction.findByIdAndDelete(req.params.id);
    res.status(200).send("Interaction deleted.");
  } catch (err) {
    next(err);
  }
};

export const updateInteraction = async (req, res, next) => {
  try {
    const interactionFields = extractInteractionFields(req.body);
    const updatedInteraction = await PDInteraction.findByIdAndUpdate(
      req.params.id,
      interactionFields,
      { new: true }
    );

    if (!updatedInteraction) {
      return res.status(404).send("Interaction not found.");
    }

    res.status(200).json(updatedInteraction);
  } catch (err) {
    next(err);
  }
};

export const getInteraction = async (req, res, next) => {
  try {
    const interaction = await PDInteraction.findById(req.params.id);

    if (!interaction) {
      return res.status(404).send("Interaction not found.");
    }

    res.status(200).json(interaction);
  } catch (err) {
    next(err);
  }
};

export const getInteractions = async (req, res, next) => {
  const { page = 1, limit = 20, patientId } = req.query; // Extract patientId from query params

  try {
    let query = {}; // Initialize empty query object
    if (patientId) {
      // If patientId is provided, filter interactions by patientId
      query = { p_id: patientId };
    }

    // Fetch interactions based on query
    const interactions = await PDInteraction.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(interactions);
  } catch (err) {
    next(err);
  }
};
