<?php

require 'inc/Slim-2.x/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get(
	'/',
	function () {
		require_once ("view/home.php");

	}
); 

$app->get(
	'/cadastrar',
	function () {
		require_once ("view/cadastrar.php");

	}
); 

$app->get(
	'/login',
	function () {
		require_once ("view/login.php");

	}
); 

$app->get(
	'/recuperar',
	function () {
		require_once ("view/recuperar.php");

	}
); 

$app->run();
