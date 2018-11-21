
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
		//this.fetchMovieData(null);

	},

	methods: {
		fetchmore(e){
			//pass id from data-movie attribute on button as part of url in fetchmoviedata
			this.fetchMovieData(e.currentTarget.dataset.movie);

		},

		loadmovie(e){
			e.preventDefault();
			dataKey = e.currentTarget.getAttribute("href");
			//filter video data for matching vid_path 
			currentData = this.videodata.filter(video=>video.vid_path == dataKey);
			this.videotitle = currentData[0].vid_name;
			this.videodesc = currentData[0].vid_desc;
			this.videosource = dataKey;
			this.showDetails = true;

			setTimeout(function(){
				window.scrollTo(0, 1200)
			}, 500);
		},

		scrollBackup(){
			window.scrollTo(0,0);
			this.showDetails = false;
			this.videosource="";
		},

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