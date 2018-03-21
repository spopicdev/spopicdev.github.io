$('img').click(function (e){
    var name=$(this).attr("id");
    var string;
    var num;

    if (name<22) {
        num=21+parseInt(name);
    } else {
        num= parseInt(name)- 21;
    }
    string="images/element"+num+".png";
    $(this).attr('src', string);
    $(this).attr('id',num);
    });



