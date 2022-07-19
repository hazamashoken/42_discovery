$(document).ready(function() {
    $("#btn").click(function(){
        let i = 0;
        let color = "#";
        while (i++ < 6)
            color += Math.floor(Math.random() * 16).toString(16);
        $("body").css({"background": color});
    });
});