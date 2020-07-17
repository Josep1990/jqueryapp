$("ul").on("click", "li", function(){  //execute this code when a li is clicked insede an ul //.on() method
    $(this).toggleClass("completed");
});


// click on x to delete item
$("ul").on("click", "span", function(event){ //execute this code when a span is clickd insite a ul add a event listener 
    $(this).parent().fadeOut(600, function(){//in the element that are that exist when the page loads and then apply to the new items.
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    
    
    //and include a new li todo
    if(event.which === 13){
        //get the input from the user
        let todoText = $(this).val();
        $(this).val("");
        //clear the text area
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

// if($(this).css("color") === "rgb(128, 128, 128)"){
//     $(this).css({
//         color:"black",
//         textDecoration: "none"});
    
//    } else{
//         $(this).css({
//         color:"gray",
//         textDecoration: "line-through"});
//     }