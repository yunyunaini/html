function showContent(s,e){
      var list = document.querySelectorAll ('.title>p');
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].style.backgroundColor = '#fff';
        list[i].style.color = '#666';
      }
      e.style.backgroundColor = '#4ab344';
      e.style.color = '#fff';
      if(s == 1){
        document.getElementById("content1").className="content";
        document.getElementById("content2").className="content-first";
        document.getElementById("content3").className="content-first";
      }
      else if(s == 2){
       document.getElementById("content1").className="content-first";
       document.getElementById("content2").className="content";
       document.getElementById("content3").className="content-first";
     }else if(s ==3 ){
       document.getElementById("content1").className="content-first";
       document.getElementById("content2").className="content-first";
       document.getElementById("content3").className="content";
     }
   }