import express from 'express';
import daiaryRouter from './routes/diaries.js';
const app = express();
app.use(express.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here!!');
    res.send('AHORA CREO QUE SI');
});
app.use('/api/diaries', daiaryRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map