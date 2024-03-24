import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const createUser = async (req, res, next) => {
  const { pid, name, age, gender } = req.body;

  try {
    const newUser = new User({
      pid,
      name,
      age,
      gender
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted.");
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

export const updateUser = async (req, res, next) => {
  const { pid, name, age, gender } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { pid, name, age, gender },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    res.status(200).json(user);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

export const getUsers = async (req, res, next) => {
  const { page = 1, limit = 20 } = req.query;

  try {
    const users = await User.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(users);
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};
