const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      if(login.length === 0 ){
        return res.status(401).json({ error: 'Имя пользователя не должно быть пустым'})
      }
      const errors = validationResult(req);
      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res
          .status(400)
          .json({ error: `Пользователь ${login} не найден` });
      }
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: "Пароль должен быть больше 4 или меньше 10 символов",
        });
      }
      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res
          .status(401)
          .json({ error: "Неправильный логин или пароль!" });
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token, login: payload.login, id: payload.id });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  register: async (req, res) => {
    const { login, password } = req.body;
    if (login.length === 0) {
      return res
        .status(401)
        .json({ error: "Имя пользователя не должно быть пустым" });
    }
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: "Пароль должен быть больше 4 или меньше 10 символов",
        });
      }

      const candidate = await User.findOne({ login });
      if (candidate) {
        return res
          .status(400)
          .json({ error: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = User.create({
        login,
        password: hashPassword,
      });
      return res.json("Пользователь успешно зарегестрирован");
    } catch (error) {
      res.status(400).json("Registration Error" + error);
    }
  },
  getAssemblyCart: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId);

      return res.json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  addToCartAssembly: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $push: { cart: req.params.assemblyId },
        },
        { new: true }
      );
      return res.json(user);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  deleteAssemblyfromCart: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findByIdAndUpdate(userId, {
        $pull: { cart: req.params.assemblyId },
      });
      return res.json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
