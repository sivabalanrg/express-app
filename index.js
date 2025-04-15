const express =  require('express');
const body_parser= require('body-parser');
const app = express();
app.use(body_parser.json());
let url_obj = {};
app.post('/url-short', (req, res) => {
    let domain = 'http://shorturl/';
    const {long_url} = req.body;
    const randumNum = Math.random();
    let shortUrl = `${domain}${randumNum}`;
    url_obj[randumNum] = long_url;
    res.json(
        {
            shortUrl
        }
    )
}) 

app.get('/', (req, res) => {
    res.json({msg: 'Hello from the updated code'});
})

app.get('/:unique_id', (req, res ) => {
    let {unique_id} = req.params;

    res.send({
        longUrl: url_obj[unique_id]
    })
})



app.listen(3000, () => {
    console.log('Server running on port', 3000)
})
