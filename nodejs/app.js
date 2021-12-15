import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


const app = express();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(history());
app.use(express.static(path.join(__dirname, 'public')));




//Routes
app.use('/', require('./routes/auth.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/edit', require('./routes/edit.routes'));


//Settings
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () =>{
    console.log('Server on port ' + app.get('port'));
})