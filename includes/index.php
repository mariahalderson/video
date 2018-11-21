<?php 

//include 'connect.php';
include 'functions.php';


if(isset($_GET['movie'])){
	//pass connection and movie id to a function
	$data = get_single_video($conn, $_GET['movie']);
	echo json_encode($data);
}

else{
	//just get all the movies
	$data = get_all_videos($conn);
	echo json_encode($data);
}


?>