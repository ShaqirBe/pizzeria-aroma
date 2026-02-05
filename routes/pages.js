const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { isOpenNow, getNextOpening } = require("../utils/isOpenNow");

// IMPORT I SAKTË
const menuData = require("../data/menu.json");
const allergensData = require("../data/allergens.json");


router.get("/", (req, res) => {
  // Lexo të gjitha fotot nga /public/images
  const imagesDir = path.join(__dirname, "../public/images");
  const imageFiles = fs.readdirSync(imagesDir)
    .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .map(file => "/images/" + file);

  // Llogarit statusin hapur/mbyllur
  const open = isOpenNow();
  const nextOpening = open ? null : getNextOpening();

  // Render index.ejs me të gjitha të dhënat
  res.render("index", {
    imagesJSON: JSON.stringify(imageFiles),
    isOpen: open,
    nextOpening
  });
});


router.get("/menu", (req, res) => {
  res.render("menu", { menu: menuData,
    allergens: allergensData
   });
});



router.get("/kontakt", (req, res) => {
  res.render("kontakt");
});

router.get("/impressum", (req, res) => {
  res.render("impressum");
});

module.exports = router;