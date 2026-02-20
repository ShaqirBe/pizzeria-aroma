const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const { isOpenNow, getNextOpening } = require("../utils/isOpenNow");

// IMPORT I SAKTË
const menuData = require("../data/menu.json");
const allergensData = require("../data/allergens.json");
const SITE_URL = "https://www.pizzeria-aroma-peckelsheim.de";

router.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.pageTitle = "Pizzeria Aroma Peckelsheim - Pizza, Pasta & Salat";
  res.locals.pageDescription =
    "Pizzeria Aroma in Peckelsheim. Frische Pizza, Pasta und Salat. Jetzt anrufen oder Route anzeigen. Familienbetrieb.";
  res.locals.canonicalUrl = `${SITE_URL}${req.path}`;
  res.locals.pageImage = `${SITE_URL}/images2/fasade.jpeg`;
  next();
});


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
    nextOpening,
    pageTitle: "Pizzeria Aroma Peckelsheim - Pizza, Pasta & Salat",
    pageDescription:
      "Pizzeria Aroma in Peckelsheim. Frische Pizza, Pasta und Salat. Jetzt anrufen oder Route anzeigen. Familienbetrieb."
  });
});


router.get("/menu", (req, res) => {
  res.render("menu", {
    menu: menuData,
    allergens: allergensData,
    pageTitle: "Speisekarte | Pizzeria Aroma Peckelsheim",
    pageDescription:
      "Unsere aktuelle Speisekarte mit Pizza, Pasta, Salat, Burgern und Getränken in Peckelsheim."
  });
});



router.get("/kontakt", (req, res) => {
  res.render("kontakt", {
    pageTitle: "Kontakt | Pizzeria Aroma Peckelsheim",
    pageDescription:
      "Kontakt zur Pizzeria Aroma in Peckelsheim: Adresse, Telefon und E-Mail auf einen Blick."
  });
});

router.get("/impressum", (req, res) => {
  res.render("impressum", {
    pageTitle: "Impressum | Pizzeria Aroma Peckelsheim",
    pageDescription: "Impressum und rechtliche Angaben der Pizzeria Aroma Peckelsheim."
  });
});

module.exports = router;
