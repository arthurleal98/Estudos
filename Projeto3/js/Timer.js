    var audio = new Audio("alarm.mp3")
    var x;
    var min = 0;
    var seg = 0;
    var countClick = 0;
    var countClickStop=0;
        function start(){
            if(countClick==0){
                countClick=1;
                countClickStop=0;

                document.getElementById('start').innerHTML="Playing";
                document.getElementById('pause').innerHTML="Pause";

                x = setInterval(function(){
                    
                    document.getElementById('teste').innerHTML=("00"+min).slice(-2)+":"+("00"+seg).slice(-2);
                    seg+=1;
                    min +=Math.floor(seg/60);

                    seg=seg%60;
                    
                    if(min==1 && seg==1){
                        clearInterval(x);
                        document.getElementById('start').innerHTML="Start";
                        min=0;
                        seg=0;countClick=0;    

                        
                        
                    }
                },1000); 
            }
            
            
           
            
            
        }
        function pause(){
            if(countClickStop==2){
                document.getElementById('start').innerHTML="Start";
                document.getElementById('pause').innerHTML="Pause";
                min=0;
                
                seg=0;
                
                document.getElementById('teste').innerHTML=("00"+min).slice(-2)+":"+("00"+seg).slice(-2);
                clearInterval(x);

            }
            if(countClickStop==0){
                countClick=0;
                countClickStop+=1;
                document.getElementById('start').innerHTML="Resume";
            }
            clearInterval(x);
            if(countClickStop==1){
                document.getElementById('pause').innerHTML="Stop";
                countClickStop+=1;
                clearInterval(x);
            }
            
        }
