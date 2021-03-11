const express = require ('express');
morgan = require ('morgan');

const app = express ();

app.use(express.static('public')) ;

app.use(morgan('common'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  let topMovies = [
    {
      title: 'Groundhog Day',
      director: 'Harold Ramis'
    },
    {
      title: 'Fear and Loathing in Las Vegas',
      director: 'Terry Gilliam'
    },
    {
      title: 'The Big Lebowski',
      director: 'Joel Coen'
    },
    {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'
      },
      {
        title: 'Snatch',
        director: 'Guy Ritchie'
      },
      {
        title: 'The Matrix',
        director: 'Les Wachowski'
      },
      {
        title: 'Citizen Kane',
        director: 'Orson Welles'
      },
      {
        title: 'Samurai Champloo',
        director: 'Shinichiro Watanabe'
      },
      {
        title: 'Ghost Dog',
        director: 'Jim Jarmusch'
      },
      {
        title: 'Stalker',
        director: 'Andreï Tarkovski'
      }
  ];

app.get('/movies', (req,res) => {
    res.json(topMovies)
    });

app.get('/', (req,res) => {
res.send('HELLOOOO THERE.... Welcome to Quarantino Flix!')
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.')
});
