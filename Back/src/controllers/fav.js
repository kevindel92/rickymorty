let fav = [];

const getFav = (req, res) => {
  res.status(200).json(fav);
};

const postFav = (req, res) => {
  fav.push(req.body);
  console.log("log de favoritos add", fav);
  res.status(200).json(req.body);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const character = fav.find((f) => f.id === Number(id));

  if (character) {

    fav = fav.filter(f => f !== character)
    console.log("log de favoritos delete", fav);
    res.status(200).json(character);
  } else {
    res.status(400).json({
      error: "not found this character",
    });
  }
};

module.exports = {
  getFav,
  postFav,
  deleteFav,
};
