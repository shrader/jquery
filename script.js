$(document).ready(mainFunction);

function mainFunction() {
    console.log("Let's get ready to party with jQuery!");
}

$("article img").addClass("image-center");

$("article p").last().remove();

$("#title").css(`font-size`, `${Math.random()*100+1}px`);

let listItem = $("<li>");
listItem.text("blah blah blah");
$("ol").append(listItem);

$("aside").empty();
$("aside").text("Sorry for the useless list.");


$("input").on("focusout", ()=> {
    let red = $("input").first().val();
    let blue = $("input").eq(1).val();
    let green = $("input").last().val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`)
});


$("img").on("click", (evt)=> evt.target.remove());