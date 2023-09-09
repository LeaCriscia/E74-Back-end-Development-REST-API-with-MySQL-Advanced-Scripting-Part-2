const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/", postsController.getAll)
router.put("/:EMP_NUM", postsController.update)
router.delete("/:DateHired", postsController.delete)

module.exports = router