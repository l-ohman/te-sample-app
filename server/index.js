const port = process.env.PORT || 3000;
const app = require('./app');

const init = async () => {
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
};

init();
