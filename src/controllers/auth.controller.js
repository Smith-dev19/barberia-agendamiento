import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { createAccesToken } from '../libs/jwt.js';
import { HASH_SALT } from '../config.js';

export const register = async (req, res) => {
  const { username, name, lastName, phone, password } = req.body;

  console.log(req.body);

  try {
    const findUser = await User.findOne({
      $or: [{ username }, { phone }],
    });

    if (findUser) {
      const errors = [];

      if (findUser.username === username) {
        errors.push('El usuario ya existe');
      }

      if (findUser.phone === phone) {
        errors.push('El telefono ya existe');
      }

      return res.status(400).json(errors);
    }

    const passwordHashed = await bcrypt.hash(password, HASH_SALT);

    const newUser = new User({
      username,
      name,
      lastName,
      phone,
      password: passwordHashed,
    });
    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      name: userSaved.name,
      lastName: userSaved.lastName,
      phone: userSaved.phone,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  try {
    const userFound = await User.findOne({ username });
    if (!userFound) return res.status(400).json(['El Usuario es Invalido']);

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json(['Credenciales incorrectas']);

    const token = await createAccesToken({ id: userFound._id });
    res.cookie('token', token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      name: userFound.name,
      lastName: userFound.lastName,
      phone: userFound.phone,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) res.status(400).json({ message: 'User not found' });

  res.json({
    id: userFound._id,
    username: userFound.username,
    name: userFound.name,
    lastName: userFound.lastName,
    phone: userFound.phone,
    createdAt: userFound.createdAt,
    updateAt: userFound.updateAt,
  });
  res.send('Profile');
};
