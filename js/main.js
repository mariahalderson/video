
const vm = new Vue({

	el: "#app",

	data:{

		mainmessage: "welcome to my video app",
		//make empty array to hold data from query when called
		videodata:[
		//fake data
		{title: "a title", path: "a path", vidthumb: "avengers.jpg"},
		{title: "a title", path: "a path", vidthumb: "forceawakens.jpg"},
		{title: "a title", path: "a path", vidthumb: "strangerthings.jpg"}

		],
		//push stuff here when asking for only one thing
		singlemoviedata: [],

		videotitle : "",
		videosource: "",
		videodesc: "",
		showDetails: false

	},

	created: function(){
		//passing null will fire both else statements, pulling all video
		this.fetchMovieData(null);

	},

	methods: {

		fetchMovieData(movie){
			//after ? is if true, after : is else
			url = movie ? `./includes/index.php?movie=${movie}` : './includes/index.php';

			fetch(url)
			.then(res=>res.json())
			.then(data=>{
				if(movie){
					//if movie parameter is there, pull only one --use single array
					this.singlemoviedata = data;
					
				}else{
					//pull all into multiple movie array
					this.videodata = data;
				}
			});

		}

	}
});