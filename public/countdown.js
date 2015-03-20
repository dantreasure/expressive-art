
$(document).ready(function(){
  console.log('jquery loaded', $('.container1'))
  for(var i = 0;i<60;i++){
    $('.container1').append('<div class="seconds" />');
  }
  for(var i = 0;i<60;i++){
    $('.container2').append('<div class="minutes" />');
  }
  for(var i = 0;i<24;i++){
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
  for(var i = 1;i<25;i++){
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
      var h = d.getHours()-12;
    }else{
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var h = d.getHours();
    }

    //var h = d.getHours()-12;
    var m = d.getMinutes();
    var s = d.getSeconds();

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
