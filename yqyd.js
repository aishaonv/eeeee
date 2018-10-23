$(document).ready(function () {
    var $public = $(".public");

    // showstate(myarry1, myarry2);

    $public.each(function(){
        var $this=$(this).text();
        var $parent = $(this).parent();
        if ($this > 0 && $this < 10) {
            // if (state[i] == "you") {
            $parent.find(".public").addClass("num-single");
            $parent.find(".public").removeClass("num");
            $parent.find(".rig").addClass("circle-green-right");
            $parent.find(".lef").addClass("circle-green-left");
            // }
        }
        //判断值为0的值情况下
        else if ($this == 0) {
            $parent.find(".public").addClass("num-single").removeClass("num");
            $parent.find(".rig").addClass("circle-purple-right");
            $parent.find(".lef").addClass("circle-purple-left");
        }
        //判断值为大于10的值情况下
        else {
            // if (state[i] == "you") {
            $parent.find(".public").addClass("num");
            $parent.find(".public").removeClass("num-single");
            $parent.find(".rig").addClass("circle-green-right");
            $parent.find(".lef").addClass("circle-green-left");
            // }
        }
    });


});