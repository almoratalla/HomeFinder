const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(80, () => console.log('Listening at Port 80'));
console.log('Hello Larz');
