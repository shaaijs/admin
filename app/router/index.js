const express = require('express')
const router = express.Router();
const blogsController = require('./../controllers/blogs')
const userController = require('./../controllers/user')

router.get('/', (req, res, next) => res.redirect('/login'));

router.get('/blogs', async function (req, res, next) {
  const data = await blogsController.getAll()
  res.render('blogs', {
    data
  });
});

router.get('/api/blogs', async function (req, res, next) {
  const data = await blogsController.getAll()
  res.json(data);
});

router.get('/blog/:id?', async function (req, res, next) {
  let id = req.params.id
  const data = await blogsController.get(id) || {}
  res.render('blog', {
    data, id
  });
});

router.delete('/blog/:id', async function (req, res, next) {
  await blogsController.remove(req.params.id)
  res.json({
    success: true
  });
});

router.put('/blog/:id', async function (req, res, next) {
  let data = await blogsController.edit(req.params.id, req.body)
  res.json({
    success: true,
    data
  });
});

router.post('/blog', async function (req, res, next) {
  let data = await blogsController.create(req.body)
  res.json({
    success: true,
    data
  });
});

router.get('/login', async function (req, res, next) {
  // let data = await userController.login(req.body)
  res.render('auth', { pageType: 'login' });
});

router.get('/signup', async function (req, res, next) {
  // let data = await userController.login(req.body)
  res.render('auth', { pageType: 'signup' });
});

module.exports = router;
