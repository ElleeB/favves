categories = Category.create([
  {title: "Movies"},
  {title: "Books"},
  {title: "Artists"},
])

favorites = Favorite.create([
  {text: "Emelie", category_id: 1},
  {text: "Pan's Labyrinth", category_id: 1},
  {text: "Green Room", category_id: 1},

  {text: "What Is The What", category_id: 2},
  {text: "Lord of The Rings", category_id: 2},
  {text: "A Song of Ice and Fire", category_id: 2},

  {text: "Audrey Kawasaki", category_id: 3},
  {text: "August Renoir", category_id: 3},
  {text: "Gustav Klimt", category_id: 3}
])
