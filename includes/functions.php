<?php

include 'connect.php';

function get_single_video($pdo, $vid){
	$query = "SELECT * FROM video WHERE id = '$vid'";
	//request
	$get_video = $pdo->query($query);
	//store results in array
	$results = array();
	//parse to associative array
	while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
		$results[] = $row;
		//subresult query can go here
	}
	//returns to index.php calling function... $data=$results
	return $results;
}


function get_all_videos($pdo){
	$query = "SELECT * FROM video";
	//request
	$get_video = $pdo->query($query);
	//store results in array
	$results = array();
	//parse to associative array
	while($row = $get_video->fetch(PDO::FETCH_ASSOC)){
		$results[] = $row;
	}
	//returns to index.php calling function... $data=$results
	return $results;
}

?>