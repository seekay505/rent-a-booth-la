const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

// definee routers
const homeRouter = require("./routes/home");
const productsRouter = require("./routes/products");
const aboutRouter = require("./routes/about");
const faqsRouter = require("./routes/faqs");

// template engeine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));  // serve views folder

// serve static assets like style sheets and images within the public folder
// tells Express to 'serve' the public directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
// home route
app.use("/", homeRouter);
// products route
app.use("/products", productsRouter);
// about route
app.use("/about", aboutRouter);
// faqs route
app.use("/faqs", faqsRouter);


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});