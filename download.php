<?php



$url = 'http://science-fiction.ambient-mixer.com/flynn-lives';
$url = 'http://relaxing.ambient-mixer.com/on-a-ship-at-sea';
$name = basename($url);

$out = file_get_contents($url);

preg_match('/soundTemplate ?: ?\'([0-9]+?)\',/', $out, $matches);
$id = $matches[1];

$xmlUrl = 'http://xml.ambient-mixer.com/audio-template?id%5Ftemplate='.$id;

$xmlString = file_get_contents($xmlUrl);

file_put_contents("C:/data/www/sandbox/ambient/data/$name.xml", $xmlString);







$root = "C:/data/www/sandbox/ambient";
$name = 'flynn-lives';

$xmlString = file_get_contents("$root/data/$name.xml");
$xmlString = preg_replace('/<(\/?channel)[0-9]>/', '<$1s>', $xmlString);
$xml = simplexml_load_string($xmlString);

$manifest = [];
$counter = 1;

foreach ($xml->children() as $element) {
	$nodeName = $element->getName();
	if(preg_match('/^channel/', $nodeName)){
		$audioName = str_replace(' ', '_', $element->name_audio.'');
		downloadAudio($element->url_audio.'', "$root/sounds/$audioName.mp3");
		
		$channel = new stdClass();
		$channel->id = $counter++;//intval($element->id_audio.'');
		$channel->src = "$audioName.mp3";
		$data = new stdClass();
		$data->name = $audioName;
		$data->mute = ($element->mute.'' == 'true');
		$data->volume = floatval('.'.$element->volume) ;
		$data->balance = intval($element->balance)/100; // todo convert to fraction
		$data->random = ($element->random.'' == 'true');
		$data->crossfade = ($element->crossfade.'' == 'true');

		// calculate frequency
		preg_match('/([0-9]+?)([a-z])/', $element->random_unit.'', $randomUnites);
		$factor = 1;
		if($randomUnites){
			list(, $count, $length) = $randomUnites;
			$lengthMap = ['s' => 1, 'm' => 60, 'h' => 3600];
			$factor = $lengthMap[$length];
			$factor = intval($count) * $factor;
		}
		$data->frequency = intval($element->random_counter.'')/$factor;

		$data->delay = $factor/intval($element->random_counter.'');
		
		$channel->data = $data;
		$manifest[] = $channel;
	}
	else if($nodeName == 'id_template'){

	}
}

$jsonString = json_encode($manifest, JSON_PRETTY_PRINT);


file_put_contents("C:/data/www/sandbox/ambient/data/$name.json", $jsonString);





function downloadAudio($url, $path, $override=false){
	// download audio
	if($override || !is_file($path)){
		$ok = file_put_contents($path, file_get_contents($url));
		if(!$ok){
			error_log("Failed to download audio $url, $path");
			return FALSE;
		}
		else{
			return TRUE;
		}
	}
	else{
		return TRUE;
	}
}

?>