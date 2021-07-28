const ProjectCtrl = require("../controllers/project.controller")
const express = require("express")
const router = express.Router();

router.get("/projects", ProjectCtrl.getAllProjects)

module.exports = router