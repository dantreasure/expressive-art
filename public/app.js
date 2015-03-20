var svartalfheim = angular.module('svartalfheim', ['ngRoute', 'angularMoment']);

  svartalfheim.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        }).
        when('/ep1',{
          templateUrl: 'views/episode1.html',
          controller: 'MainCtrl'
        }).
        when('/ep2',{
          templateUrl: 'views/episode2.html',
          controller: 'MainCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);

    }]);


  svartalfheim.controller( 'MainCtrl', function( $scope, $timeout, moment, $location, $route) {
    $scope.timeLeft;

    $scope.portalOpen = false;

    $scope.go = function(path){
      $location.path(path)
    }

    $scope.onTimeout = function(){
      nextShowing = moment().set({'hours': 23, 'minutes': 00, 'seconds': 00});

      if(moment().isAfter(nextShowing)){
        $scope.portalOpen = true;
      }

      var secondsLeft = Math.floor(nextShowing.diff(moment()) / 1000);

      $scope.timeLeft = secondsLeft;

      mytimeout = $timeout($scope.onTimeout,1000);

    }

    var mytimeout = $timeout($scope.onTimeout,1000);

    $(document).ready(function(){
      for(var i = 0;i<60;i++){
        $('.container1').append('<div class="seconds" />');
      }
      for(var i = 0;i<60;i++){
        $('.container2').append('<div class="minutes" />');
      }
      for(var i = 0;i<23;i++){
        $('.container3').append('<div class="hours" />');
      }

      var deg = 264;
      for(var i = 1;i<61;i++){
        deg=deg+6;

        $('.seconds:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg+'deg) translatex(220px)',
          'opacity' : '0.1'
        });
      }

      var deg2 = 264;
      for(var i = 1;i<61;i++){
        deg2=deg2+6;

        $('.minutes:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg2+'deg) translatex(160px)',
          'opacity' : '0.1'
        });

      }

      var deg3 = 264;
      for(var i = 1;i<24;i++){
        deg3=deg3+15;

        $('.hours:nth-child('+i+')').css({
          '-webkit-transform' : 'rotate('+deg3+'deg) translatex(97px)',
          'opacity' : '0.1'
        });
      }


      ////////////////////////////////////////////////////////////////////////////

      var t = setInterval(function(){
        var d = new Date();

        if(d.getHours()>12){
          var time = d.getHours()-12 + ":" + d.getMinutes() + ":" + d.getSeconds();
          var h = d.getHours();
        }else{
          var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          var h = d.getHours();
        }

        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        console.log('this is h from the jquery: ', h)
        console.log('this is m from the jquery: ', m)

        for(var i = 1;i<=s+1;i++){
          if(s===0){
            $('.seconds').css({

              'opacity' : '0.1'
            });
          }
          $('.seconds:nth-child('+i+')').css({

            'opacity' : '1'
          });
        }
        for(var i = 1;i<=m+1;i++){
          if(m===0){
            $('.minutes').css({

              'opacity' : '0.1'
            });
          }
          $('.minutes:nth-child('+i+')').css({

            'opacity' : '1'
          });
        }
        for(var i = 1;i<=h+1;i++){
          if(h===0){
            $('.hours').css({

              'opacity' : '0.1'
            });
          }
          $('.hours:nth-child('+i+')').css({

            'opacity' : '1'
          });
        }
      },1000);
    });

  });
