import app from './app.js';
import './database.js'

app.set('port',process.env.PORT || 3000)
app.listen(app.get('port'),() => {
    console.log("server on port", app.get('port'));
});