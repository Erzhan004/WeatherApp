var express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const https = require('https')
const axios = require('axios');
var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}))

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '..','/views/index.html'));

});

router.post('/getWeather', function(req,res){
    const cityName = req.body.city
    console.log(cityName)
    const APIkey = `cdb4141c7cea443511b6eb1479612603`
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;
    https.get(APIUrl,function(response){
    response.on("data", function(data){
        const weatherdata = JSON.parse(data)
        return res.status(200).send(weatherdata)
      }, error =>{
        return res.status(500).send(weatherdata)
      }
      )
});

});
router.get('/background', async (req, res) => {
  try {
      const weatherDescription = req.query.description || 'default'; // Получаем описание погоды из запроса
      const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
              client_id: 'JgBCMwQwwWnuVoP1c2qpWA28F9kLzovaO6kR9LsTwkQ',
              query: weatherDescription,
          },
      });

      const imageUrl = response.data.urls.regular;
      res.json({ imageUrl });
  } catch (error) {
      console.error('Ошибка при получении изображения:', error.message);
      res.status(500).json({ error: 'Ошибка при получении изображения' });
  }
});


module.exports = router;