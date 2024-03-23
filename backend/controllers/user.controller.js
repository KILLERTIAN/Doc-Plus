import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const createUser = async (req, res, next) => {
  const newUser = new User({
    ...req.body,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  // const user = await User.findById(req.params.id);

  // if (req.userId !== user._id.toString()) {
  //   return next(createError(403, "You can delete only your account!"));
  // }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};

export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const updatedFields = req.body;

  try {
    // Update the user based on the specified ID
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updatedFields },
      { new: true } // This option returns the updated document
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userById = await User.findById(req.params.id);
    if (!userById) next(createError(404, "User not found!"));
    res.status(200).send(userById);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.available && { available: q.available }),
    ...(q.gender && { gender: q.gender }),
    ...(q.domain && { domain: q.domain }),
  };

  if (q.search) {
    filters.$or = [
      { first_name: { $regex: q.search, $options: "i" } },
      { last_name: { $regex: q.search, $options: "i" } },
    ];
  }
  // Pagination options
  const page = parseInt(q.page) || 1;
  const limit = parseInt(q.limit) || 20;
  const skip = (page - 1) * limit;

  try {
    const usersList = await User.find(filters).skip(skip).limit(limit);
    if (!usersList || usersList.length === 0)
      next(createError(404, "User not found!"));
    res.status(200).send(usersList);
  } catch (error) {
    next(error);
  }
};