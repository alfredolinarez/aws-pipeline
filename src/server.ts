import express from 'express';

const app = express();

app.get('/', (req, res) => {
  if (req.query.text) {
    return res.send(`<h1>${req.query.text}</h1>`);
  }

  res.send(`<form>
    <h1>Ingrese el texto<h1>
    <input name="text" type="text" />
  </form>`);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Application started on port 3000');
});
