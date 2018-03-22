$('img').click(function (e){
    var name=$(this).attr("id");
    var string;
    var num;

    if (name<29) {
        num=28+parseInt(name);
    } else {
        num= parseInt(name)- 28;
    }
    string="images/Element"+num+".png";
    $(this).attr('src', string);
    $(this).attr('id',num);
    });



