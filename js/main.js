function searchHashtags(searchInput) {
	var searchInput = document.getElementById("search").value
	document.getElementById("results").textContent = ""

	console.log(searchInput)
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		url: "https://api.instagram.com/v1/tags/" + searchInput + "/media/recent?access_token=183464849.1677ed0.a44700126e6f4b5cb8140fab000bcfe6",
		jsonp: "callback",

		success: function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				var newATag = document.createElement("a")
				newATag.setAttribute("href", data.data[i].link + " 'target='_blank'")

				var newDiv = document.createElement("div")
				newDiv.className = "col-sm-3 col-sm-offset-1"

				var igImgThumb = document.createElement("img")
				igImgThumb.setAttribute("src", data.data[i].images.thumbnail.url)
				newDiv.appendChild(igImgThumb)

				var igLike = document.createElement("h4")
				var currLikes = document.createTextNode("Love: " + data.data[i].likes.count)
				
				var igUserH = document.createElement("h5")

				var igUser = document.createTextNode("captured by: " + data.data[i].caption.from.username)
				igUserH.appendChild(igUser)
				newDiv.appendChild(igUserH)
				newATag.appendChild(newDiv)

				document.getElementById("results").appendChild(newATag)
			}
		},
		type: "GET"
	})
}
document.getElementById("searchBtn").addEventListener("click", searchHashtags, false)
