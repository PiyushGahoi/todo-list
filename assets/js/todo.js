$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

var cnt=1,max=3;

$("ul").on("click","span",function(event){
    if(cnt<=3)
    max--;
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"').keypress(function(event){
    if(event.which === 13)
    {
        var todoText=$(this).val();
        if(cnt<=max)
        {
        $("ul>li:nth-child("+cnt+")").html("<span><i class='far fa-trash-alt'></i></span>"+todoText);
        cnt++;
        }
        else
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $('input[type="text"').fadeToggle(300);
})