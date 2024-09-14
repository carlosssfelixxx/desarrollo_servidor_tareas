import express, {Request, Response} from 'express';
import routes from './routes';

const app = express();

const port = process.env.PORT || 3000;


app.get('', (req: Request, res: Response) => {
    res.send("API is up");
})

app.use(routes);

app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
});