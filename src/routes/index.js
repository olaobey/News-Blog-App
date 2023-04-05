const express = require("express");
const authRoutes = require("../api/auth/auth-routes");
const adminRoutes = require("../api/admin/admin-routes");
const categoriesRoutes = require("../api/category/categories-routes");
const commentsRoutes = require("../api/comment/comments-routes");
const profileRoutes = require("../api/profile/profile-routes");
const storiesRoutes = require("../api/story/stories-routes");
const videosRoutes = require("../api/video/videos-routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/api/v1", adminRoutes);
router.use("/api/v1", categoriesRoutes);
router.use("/api/v1", commentsRoutes);
router.use("/api/v1", profileRoutes);
router.use("/api/v1", storiesRoutes);
router.use("/api/v1", videosRoutes);

module.exports = router;
