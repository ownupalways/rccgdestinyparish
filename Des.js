        //fetching Modal Box
        var modal = document.getElementById('ModalForm');
        var btn = document.getElementById('btnto');
        var closewin = document.getElementById('close');
        //when user click anywhere utside the modal box, it will close
        closewin.onclick =function(){
            style.display = "none";
        }
        btn.onclick = function() {
            modal.style.display= "block";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display= "none";
            }
        }

        
        function viewLogin() {
            let x = document.getElementById("Pword");
            if (x.type === "Password") {
                x.type = "text";
            }else{
                x.type = "Password";
            }
        }
        
        $(function() {
            $(".tog1").click(function(){
                $(".batch").slideToggle(500);
            });
        });
        $(function() {
            $(".close-batch").click(function(){
                $(".batch").hide(500);
            });
        });     
        $(function() {
            $(".tog2").click(function(){
                $(".payment").slideToggle(500);
            });
        });
        $(function() {
            $(".close-payment").click(function(){
                $(".payment").hide(500);
            });
        });
        
         $(function() {
            $(".tog3").click(function(){
                $(".region").slideToggle(500);
            });
        });
        $(function() {
            $(".close-region").click(function(){
                $(".region").hide(500);
            });
        });  
        $(function() {
            $(".tog4").click(function(){
                $(".zone").slideToggle(500);
            });
        });
        $(function() {
            $(".close-zone").click(function(){
                $(".zone").hide(500);
            });
        });
        $(function() {
            $(".tog5").click(function(){
                $(".area").slideToggle(500);
            });
        });
        $(function() {
            $(".close-area").click(function(){
                $(".area").hide(500);
            });
        });

        $(function() {
            $(".tog6").click(function(){
                $(".parish").slideToggle(500);
            });
        });
        $(function() {
            $(".close-parish").click(function(){
                $(".parish").hide(500);
            });
        });