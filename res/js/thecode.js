$(document).ready(function(){
    var picstate = false;
    var imgs = document.images;
    //$(".pic").hide();
    
    $(".pic").click(function(){
        $(this).hide();
        picstate = !picstate;
    });
    
    $("button").click(function(){
        var IDD = this.id;
        if(IDD==="randompic"){
            var num = Math.floor((Math.random() * 3) + 1).toString();
        } else {
            var num = IDD;
        }
        var nID = "#".concat(num,num);
        //var path = loc.concat(num,fileext);
        //$("#pic").attr("src", path);
        //seems HTML doesn't let you get away with this
        //alert(nID);
        if(!picstate){
            //$(".pic").hide();
            $(nID).show(100);
            $(nID).attr("style", "visibility:visible");
        } else {
            //$(".pic").hide();
            $(nID).hide(100);
            $(nID).attr("style", "visibility:collapse");
        }
        picstate = !picstate;
    });
});