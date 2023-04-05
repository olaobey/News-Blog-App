const router = require('express').Router();

const authRoutes = require('../auth/auth-routes');
const adminRoutes = require('../admin/admin-routes');
const categoriesRoutes = require('../category/categories-routes');
const commentsRoutes = require('../comment/comments-routes');
const profileRoutes = require('../profile/profile-routes');
const storiesRoutes = require('../story/stories-routes');
const videosRoutes = require('../video/videos-routes');

router.use('/auth', authRoutes);
router.use('/api', adminRoutes);
router.use('/api', categoriesRoutes);
router.use('/api', commentsRoutes);
router.use('/api', profileRoutes);
router.use('/api', storiesRoutes);
router.use('/api', videosRoutes);

module.exports = router;
