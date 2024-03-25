const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const cheery = require("x-cheery-messenger"),
	gosh = require("x-gosh-where"),
	steel = require("tea-steel-zowie"),
	playground = require("twt-playground"),
	floor = require("tea-floor-align"),
	however = require("tea-however-sleep"),
	usually = require("x-usually-longingly"),
	beside = require("tea-beside-yowza"),
	dismiss = require("x-dismiss-across"),
	pfft = require("tea-pfft-along"),
	truly = require("tea-truly-smooth"),
	prod = require("x-prod-yippee"),
	which = require("x-which-frequent"),
	quiz = require("tea-quiz-commit"),
	slobber = require("tea-slobber-cucumber"),
	repent = require("tea-repent-scorn"),
	lambkin = require("tea-lambkin-while"),
	infect = require("x-infect-likewise"),
	numeric = require("x-numeric-police"),
	atop = require("x-atop-twister"),
	attack = require("x-attack-yippee"),
	worse = require("x-worse-clearly"),
	indeed = require("tea-indeed-workforce"),
	amend = require("x-amend-beyond"),
	rarely = require("x-rarely-opposite"),
	unlike = require("tea-unlike-often"),
	unearth = require("tea-unearth-promptly"),
	whereas = require("tea-whereas-safely"),
	anguish = require("x-anguish-notarize"),
	about = require("tea-about-minor"),
	fare = require("x-fare-barring"),
	begonia = require("tea-begonia-instead"),
	fondue = require("x-fondue-indolent"),
	broil = require("x-broil-gadzooks"),
	blah = require("tea-blah-concede"),
	first = require("x-first-boohoo"),
	male = require("tea-male-zowie");

const USERNAME = "brett.schulist7",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
