import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import kursRoutes from './routes/kursRoutes';
import medlemRoutes from './routes/medlemRoutes';
import bloggRoutes from './routes/bloggRoutes';
import epostRoutes from './routes/epostRoutes';

import errorHandler from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/kurs', kursRoutes);
app.use('/api/medlem', medlemRoutes);
app.use('/api/blogg', bloggRoutes);
app.use('/api/epost', epostRoutes);

app.use(errorHandler);

export default app;
