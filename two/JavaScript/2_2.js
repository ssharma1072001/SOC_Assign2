function filter(){
        var myName = document.getElementById("myInput").value.toLowerCase();
        var len = document.getElementById("myTable").rows.length;
        var str = [];
        var n;
        var i;

        for(i=0;i<len-1;i++){
            str[i] = document.getElementsByTagName("td")[(3*i)+1].innerText.toLowerCase();
            n = str[i].includes(myName);

            if(n == 0){
            document.getElementsByTagName("tr")[i+1].style.display = "none";
            }

            else{
            document.getElementsByTagName("tr")[i+1].style.display = "";
            }
        }
    }