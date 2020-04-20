

var app = {
	nyTimesArticles : [],
	flickrData : [],

	initialize: function() {
		$('.listNYTimesData').click(function (){
			app.getNYTimesData();
		});

	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='flickrArticle'>";
			theHTML += "<h3>" + app.nyTimesArticles[i].headline.main + "</h3>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var currentSearchWord = 'Corona Virus';
		var nyTimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + currentSearchWord + '&page=0&sort=newest&api-key=';
		var myNYKey = 'bE7qH6qp8jsGvV6Efbbpt5sGSW7n6oz6';
		var nyTimesReqURL = nyTimesURL + myNYKey;
		console.log(nyTimesReqURL);
		$.ajax({
			url: nyTimesReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log("Uh oh...");
				console.log(err);
			},
			success: function(data){
				//console.log(data);
				app.nyTimesArticles = data.response.docs;
				console.log(app.nyTimesArticles);
				app.makeHTML();
			}
		});
	}



};
