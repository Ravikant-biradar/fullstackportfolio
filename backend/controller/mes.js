import express from "express";
import { body, validationResult } from "express-validator";
import Messagemdel from "../model/message.js";

const router = express.Router();

router.post(
  "/clientmessage",
  // Validations using express-validator
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .isAlpha("en-US", { ignore: " " })
      .withMessage("Name must contain only alphabets"),
    body("email").trim().isEmail().withMessage("Please provide a valid email"),
    body("mes")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message should be at least 10 characters long"),
  ],
  async (req, res) => {
    // Validation result check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, mes } = req.body;
    try {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", mes);
      const savemes = new Messagemdel({
        name,
        email,
        mes,
      });
      await savemes.save();
      res.json({ mes: "data saved succefully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  }
);

export default router;
