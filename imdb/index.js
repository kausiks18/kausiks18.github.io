

$(document).ready(()=>{
	
$("#ldr").hide();
	$("#search1").click(()=>{
		
		if($("#title1").val()=="")
			alert("please enter movie name");
		
		else{
			
			getCollectresponse();
		}
		
	})
	
	$("#search2").click(()=>{
		
		if($("#title2").val()=="")
		{
			
			alert("please enter movie name");
		}
		else if ($("#titleYear").val()=="")
		{
			
			alert("please enter movie year");
		}
		
		else{
			
			getCollectresponse();
		}
		
		
		
	})
	
	$("#search3").click(()=>{
		
		if($("#titleId").val()=="")
			alert("please enter IMDB movie id");
		
		
		else{
			
			getCollectresponse();
		}
		
	})
	
	let getCollectresponse = () => {
		
		console.log(`making request`);
		let title= $("#title1").val()|| $("#title2").val();
		let year=$("#titleYear").val();
		let id=$("#titleId").val();
	
	// API call to get user details

    $.ajax({
        type: 'GET',
        responseType: 'json',
        async: true,
      url: 'https://www.omdbapi.com/?&t='+title+'&y='+year+'&i='+id+'&apikey=77ff8175',

        success: (response) => {
			
		if (response.Response == "True") {

                let poster;

                if (response.Poster != "N/A")
                    poster = response.Poster;
                else
					poster="images/movie_imag.jpg";

          let responseresponse = `
                        <tr><td colspan="2" style="text-align: center;"><img src="${poster}" class="img-fluid" alt="Responsive image" style="border-style: solid;"></td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Title</td><td>&nbsp;&nbsp;&nbsp;${response.Title}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Year</td><td>&nbsp;&nbsp;&nbsp;${response.Year}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;imdbID</td><td>&nbsp;&nbsp;&nbsp;${response.imdbID}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Rated</td><td>&nbsp;&nbsp;&nbsp;${response.Rated}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Released</td><td>&nbsp;&nbsp;&nbsp;${response.Released}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Runtime</td><td>&nbsp;&nbsp;&nbsp;${response.Runtime}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Genre</td><td>&nbsp;&nbsp;&nbsp;${response.Genre}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Director</td>&nbsp;&nbsp;&nbsp;<td>${response.Director}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;Actors</td><td>&nbsp;&nbsp;&nbsp;${response.Actors}</td></tr>
                        <tr><td>&nbsp;&nbsp;&nbsp;imdbRating</td><td>&nbsp;&nbsp;&nbsp;${response.imdbRating}</td></tr>
                       `;

$("#infoTable").html(responseresponse);

		}
		
		else
		{
			let responseresponse = `
                        <tr><td colspan="2" style="text-align: center;"><img src="images/search-bar.gif" class="img-fluid" alt="Responsive image" style="border-style: solid;"></td></tr>`;
			$("#infoTable").html(responseresponse);
		}
        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message);

        },
		beforeSend: () => { // while request is processing.
			$("#ldr").show();
		//$("#colLoa").add().css("display","none");
		},
		complete: () => {
			$("#ldr").hide();
        	//$(".loader").css("display","none");

        },
		timeout:4000

    });// end ajax call 
	}
});