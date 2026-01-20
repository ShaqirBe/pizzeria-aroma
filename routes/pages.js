const express = require("express");
const router = express.Router();
const {
  isOpenNow,
  getNextOpening
} = require("../utils/isOpenNow");

// IMPORT I SAKTË
const menuData = require("../data/menu.json");

router.get("/", (req, res) => {
  const open = isOpenNow();
  const nextOpening = open ? null : getNextOpening();

  res.render("index", {
    isOpen: open,
    nextOpening
  });
});


router.get("/menu", (req, res) => {
  res.render("menu", { menu: menuData });
});

router.get("/kontakt", (req, res) => {
  res.render("kontakt");
});

router.get("/impressum", (req, res) => {
  res.render("impressum");
});

module.exports = router;