(function(angular) {
  'use strict';
angular.module('movies', [])
  .service('movieService', MovieService)

 .component('movieList', {
    templateUrl: 'movieList.html',
    controller: MovieListComponent
  })

  .component('movieDetail', {
    templateUrl:'movieDetail.html',
    bindings: { $router: '<' },
    controller: MovieDetailComponent
  });

function MovieService($q) {
  var films = $q.when([
    { "id": 1,"name": "La chica del tren","year": "2016","categories": ["Mistery", "Terror"]},
    {"id": 2,"name": "Blue Jay","year": "2016","categories": ["Drama"]},
    {"id": 3,"name": "La batalla de Argelia","year": "1966","categories": ["Drama", "War"]}
    ]);

  this.getMovies = function() {
    return films;
  };

  this.getMovie = function(id) {
    return films.then(function(movies) {
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].id === id) return movies[i];
      }
    });
  };
}

function MovieListComponent(movieService,$localStorage) {
  var selectedId = null;
  var $ctrl = this;

  this.newMovie = function () {
    movieService.getMovies().then(function(movies) {
      $ctrl.movies.push({
        "id": 4,  //this have to be a counter to identify the new movie
        "name": $ctrl.Name,
        "year": $ctrl.year,
        "categories": $ctrl.categories
      });
    });
  };

  this.deleteMovie = function(film) {
    movieService.getMovies().then(function(movies) {
      var idx = $ctrl.movies.indexOf(film);
      if (idx >= 0) {
        $ctrl.movies.splice(idx, 1);
      }
    });
  };

  this.$routerOnActivate = function(next) {
    movieService.getMovies().then(function(movies) {
      $ctrl.movies = movies;
      selectedId = next.params.id;
    });
  };
}

function MovieDetailComponent(movieService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    var id = next.params.id;
    movieService.getMovie(id).then(function(movie) {
      $ctrl.movie = movie;
    });
  };

  this.gotoMovies = function() {
    this.$router.navigate(['MovieList']);
  };
}
})(window.angular);
