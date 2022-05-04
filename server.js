import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const db = mysql.createConnection({
    host:'localhost',
    port: 8889,
    user:'root',
    password:'root',
    database:'Term3_week4Project'
})

// let breadJSON = [
//     {
//         carousel:"carouselExampleControlsNoTouching_1",
//         image1:"assets/croissant1.png",
//         image2:"assets/croissant2.png",
//         image3:"assets/croissant3.png",
//         name:"Apple Cinnamon Hot Cross Croissant",
//         rating:4,
//         price:"$ 7.99",
//         stock:13,
//         alt:"Apple Cinnamon Hot Cross Croissant of Bench Bakery",
//         description:"Layers of buttery, flaky pastry wrapped around a rich, soft chocolate."
//     },
//     {
//         carousel:"carouselExampleControlsNoTouching_2",
//         image1:"assets/loaf1.png",
//         image2:"assets/loaf2.png",
//         image3:"assets/loaf3.png",
//         name:"Sourdough Loaf",
//         rating:3,
//         price:"$ 8.99",
//         stock:5,
//         alt:"Sourdough Loaf of Bench Bakery",
//         description:"The thick, crunchy crust and dense centre of our traditional Loaf. "
//     },
//     {
//         carousel:"carouselExampleControlsNoTouching_3",
//         image1:"assets/sandwich1.png",
//         image2:"assets/sandwich2.png",
//         image3:"assets/sandwich3.png",
//         name:"Bench Bakery Special Sandwich",
//         rating:4,
//         price:"$ 6.99",
//         stock:10,
//         alt:"Bench Bakery Special Sandwich",
//         description:"Our Fresh Sandwich is a fresh take on a favourite tradition!"
//     }
// ]

const server = express();
server.use(cors());

server.use(express.json());
db.connect(error=> {
    if(error)
        console.log('Sorry cannot connect to db: ', error);
    else
        console.log('Connected to mysql db');
})

server.get('/recommendApi', (req, res) => {
    let allRecommends = "CALL `All_recommends_data`()";
    let query = db.query(allRecommends, (error, data, fields) => {
        if(error) {
            res.json({ErrorMessage: error})
        }
        else {
            res.json(data[0]);
        }
    })
})

// server.get('/recommendApi', (req, res) => {
//     res.json(breadJSON);
// })

server.listen(4400, function() {
    console.log("The server is successfully running on port 4400")
})