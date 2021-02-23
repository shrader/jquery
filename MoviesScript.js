$(document).ready(mainFunction);

function mainFunction(){
    $("#submit").on("click", (evt) => {
        evt.preventDefault();
        let movieName = $(".movieName").val();
        let movieRating = $(".movieRating").val();
        if (movieRating >= 0 && movieRating <= 10 && movieName.length >=2) {
            let newButton = $("<button>Remove</button>")
                .on("click", (evt) => evt.target.parentNode.remove());
            let newListItem = $(`<li>Name: ${movieName} Rating: ${movieRating}</li>`);
            let newDiv = $("<div>");
            newDiv.append(newListItem,newButton);
            $("ol").append(newDiv);
        } else {
            if (movieName < 0 || movieName > 10) {
                alert("Movie rating must be between 0 and 10");
            } else {
                alert("Movie name must be 2 characters or more");            }
        }

    })
}