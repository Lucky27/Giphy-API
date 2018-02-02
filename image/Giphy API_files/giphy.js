
$(document).ready(function(){

var animals = ["Dogs", "Cats", "Birds", "Lions", ];
	// console.log(animals)


function displayAnimals(searchAnimal){
	$("#animal-images").empty();
	var searchQuey = searchAnimal;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchQuey + "&api_key=dc6zaTOxFJmzC&limit=10"

	$.ajax({
		url:queryURL,
		method: "GET"
	})
	.then(function(response){
		//build image tags here.
		// response is an an obj
		//result is an array
		var result = response.data;

		for (var i = 0; i< result.length; i++){
			console.log(result[i]);
			var gifs= $("<div>")
			gifs.addClass("my-animals");
			gifs.attr("the-animals");
			
			var image = $("<img>");
			image.addClass("gif");
			// image.addClass("photos");
			image.attr("src", result[i].images.fixed_height_still.url);
			image.attr("data-state", "still");
			image.attr("data-still", result[i].images.fixed_height_still.url);
			image.attr("data-animate", result[i].images.fixed_height.url)
		    gifs.append(image)
		    $("#animal-images").prepend(gifs);
		}
	})
}

// $("#animal-images").append(image);

function renderButtons() {
	$("#buttons").empty();

	for (var i =0; i < animals.length; i++){

		var button = $("<button>");
		button.addClass("pets");
		button.attr("data-name", animals[i]);
		button.text(animals[i]);
		button.attr("type", "button");
		$("#buttons").append(button);
	}
};




$(document).on("click", ".pets", function(){
	var animal1 = $(this).attr("data-name");
	// console.log(animal1);
	displayAnimals(animal1);
});

$("#add-animal").on("click", function(event){
	event.preventDefault();
	// get value from input 
	var animal_search=$("#animal-input").val();
	animals.push(animal_search);


	renderButtons()
	// save it to a variable
	// push variable to animals array
	// call renderbutton function
	console.log(event)
});
renderButtons();
$(document).on("click", ".gif", function(){

	var stop= $(this).attr("data-state");

	
	if(stop === "still"){
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate")
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }

});


// $(".pets").on("click", function(event){
	
// 	event.preventDefault();

// 	var anm = $("#animal-input").val().trim();

// 	animals.push(anm);

// 	renderButtons();


// });

// $(document).on("click", ".pets", displayAnimals);

// renderButtons();

});
