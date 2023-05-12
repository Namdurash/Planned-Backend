import mongoose from "mongoose";

import { UserSchema } from "../models/userModel.js";

const User = mongoose.model('User', UserSchema);

export const addNewUser = async (req, res) => {
    console.log(req.body);
    const newUser = new User(req.body);

    await newUser.save();
    // await usersCollection.insertOne(newUser);
    // const results = await usersCollection.find().toArray();

    res.send(req.body);
}

export const getUsers = async (req, res) => {
    const users = await User.find({});

    res.send(users);
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);

    res.send(user);
}

export const updateUserById = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

    res.send(user);
}

export const deleteUserById = async (req, res) => {
    const user = await User.findOneAndRemove({ _id: req.params.id });

    res.send({ message: 'Successful deleted user' });
}