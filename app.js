


 let superheroData = [
{ name: 'Hell Boy', phone: '1-800-435-5269', affiliation: 'B.P.R.D', img_url: 'http://static.srcdn.com/wp-content/uploads/hellboy1.jpg'},
{ name: 'Katana', phone: '1-800-528-2621', affiliation: 'DC Comics', img_url: 'http://static.srcdn.com/wp-content/uploads/Suicide-Squad-Movie-Katana-Origin.jpg'},
{ name: 'Thor', phone: '1-846-762-7835', affiliation: 'Marvel', img_url: 'http://www.screengeek.net/wp-content/uploads/2016/06/thor.0.0.jpg'},
{ name: 'Ultraman', phone: '1-858-726-2646', affiliation: 'Ultraman Millenium', img_url: 'http://vignette3.wikia.nocookie.net/ultra/images/b/b2/Ultraman_from_Tiga.png/revision/latest?cb=20130820094523'},
{ name: 'Daenerys', phone: '1-883-236-3797', affiliation: 'Targaryen', img_url: 'http://static1.businessinsider.com/image/557b429af7b105aa358b4e4b-1920-1080/daenerys-dragon-gameofthrones-2.jpg'},
{ name: 'Silver Surfer', phone: '1-846-762-1657', affiliation: 'Marvel', img_url: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Silver_Surfer_in_Fantastic_Four_2.jpg'}
 ]

 angular
  .module("superheroesApp",[])
  .controller("superheroesCtrl", [ superheroesController ])

  function superheroesController () {
    this.superheroes = superheroData
  }
