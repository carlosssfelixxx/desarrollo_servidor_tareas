import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '..', 'public')));

app.use(routes);

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});