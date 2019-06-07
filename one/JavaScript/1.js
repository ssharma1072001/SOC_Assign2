var images = document.getElementsByTagName("img");
        var i = images.length;

        function next(){
            if(i == 0){
                i=images.length;
                for(i=0;i<images.length;i++){
                    images[i].style.zIndex = 1;
                }
            }
            images[i-1].style.zIndex = -1;
            i--;
        }

        function prev(){
            if(i == images.length){
                for(i=0;i<images.length;i++){
                    images[i].style.zIndex = -1;
                }
                i=0;
            }
            images[i].style.zIndex = 2;
            i++;
        }