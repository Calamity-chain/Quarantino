const express = require("express");
(morgan = require("morgan")),
  (bodyParser = require("body-parser")),
  (uuid = require("uuid"));

const app = express();

app.use(express.static("public"));

app.use(morgan("common"));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let topMovies = [
  {
    title: "Groundhog Day",
    director: "Harold Ramis"
  },
  {
    title: "Fear and Loathing in Las Vegas",
    director: "Terry Gilliam",
    genre: ["comedie", "drama"]
  },
  {
    title: "The Big Lebowski",
    director: "Joel Coen"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino"
  },
  {
    title: "Snatch",
    director: "Guy Ritchie"
  },
  {
    title: "The Matrix",
    director: "Les Wachowski",
    genre: "science fiction"
  },
  {
    title: "Citizen Kane",
    director: "Orson Welles",
    genre: ["drama", "thriller"]
  },
  {
    title: "Samurai Champloo",
    director: "Shinichiro Watanabe",
    genre: "anime"
  },
  {
    title: "Ghost Dog",
    director: "Jim Jarmusch"
  },
  {
    title: "Stalker",
    director: "Andreï Tarkovski"
  }
];

app.get("/", (req, res) => {
  res.send("HELLOOOO THERE.... Welcome to Quarantino Flix!");
});

// Gets the list of movies
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

// Gets the data about a single movie by title
app.get("/movies/:title", (req, res) => {
  res.json(
    topMovies.find(movie => {
      return movie.title === req.params.title;
    })
  );
});

// Get data about a genre by movie title
app.get("/genres/:name", (req, res) => {
  res.send("JSON object of data for genre of specified name");
});

// Get data about a director by name
app.get("/directors/:name", (req, res) => {
  let directorName = req.params.name;
  res.send("JSON object of data for " + directorName);
});

//Allow new user to register
app.post("/users", (req, res) => {
  let newUser = req.body;
  res
    .status(201)
    .send(
      newUser +
        ", your account has been successfully created. Welcome on Quarantino!"
    );
});

//Allow user to update personal infos
app.put("/users/:username", (req, res) => {
  let newUsername = req.params.username;
  res.send("Your username " + newUsername + " has been successfully updated.");
});

//Allow user to add favorite movies
app.put("/favorites/:title", (req, res) => {
  let newFavorite = req.params.title;
  res.send(newFavorite + " has been successfully added to your favorites.");
});

//Allow user to remove a movie from favorites
app.delete("/favorites/:title", (req, res) => {
  let favorite = req.params.title;
  res.send(favorite + "has been successfully removed from your favorites.");
});

//Allow user to delete account
app.delete("/users/:username", (req, res) => {
  let username = req.params.username;
  res.send(username + "Your account has been successfully deleted, aurevoir!");
});

app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
