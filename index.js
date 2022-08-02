new fullpage(
    '#wrap', 
    {
    	autoScrolling:true ,
        anchors:['1page', '2page','3page','4page' ,'5page'],
        navigation: true,
        afterLoad: function(origin, destination, direction, trigger){
            if(destination['index'] == 1){
               
                anime({
                    targets:'.st0',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st1',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:3000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st2',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:4500,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st3',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:5000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st4',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:6000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
                  anime({
                    targets:'.st5',
                    strokeDashoffset:[anime.setDashoffset, 0],
                    duration:1500,
                    delay:7000,
                    opacity:1,
                    easing:'easeOutSine'
                  });
            }
    
       
        }        
    }
);

