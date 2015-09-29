/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Valerie Yallup");

// L1: quiz 1

// var awesomeThoughts = "I am Sasquene and I am AWESOME!";

// console.log(awesomeThoughts);

// L1: quiz 2

// [string].replace([old],[new]);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// L1: quiz 3

// .replace()ing Placeholder Data in HTML - Resume Header Quiz

// var name = "Valerie Yallup";
// var role = "Front-end Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").append(formattedName);
// $("#header").append(formattedRole);

// There is an as yet unseen list inside the header div. If use
// .append() the data will appear after the list - not what we want.
// Use .prepend() to ensure that name and role appear first.

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// note reverse order of elements in prepend
// - the bottom one displays at the top.


// L1: quiz 4

// Using string methods, convert "audacity" to "Udacity".

/* based on Dave Evans Python challenge
# Write Python code that prints out Udacity (with a capital U),
# given the definition of s below.
s = 'audacity'
print "U" + s[2: ]
*/

// capitalize "u" using string[1].toUpperCase()
// ditch the "au" using string.slice()

/*
var s = "audacity";

var udacityizer = function(s) {
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

console.log(udacityizer(s));
*/

// L1: Arrays

// var skills = ["awesomeness", "programming", "teaching", "JS"];

// $("#main").append(skills);

// $("#main").append(skills[0]);

// $("#main").append(skills.length);

// L1: quiz 7 - Array Manipulation

// var sampleArray = [0,0,7];

/*var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!
    _array[_array.length - 1] = _array[_array.length - 1] + 1;

    newArray = _array;

    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/
// Yes my code above worked. Here's Udacity solution:

/*function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);  // copies whole _array
    var lastNumber = newArray.pop();  // returns and removes last item - increment it by 1
    newArray.push(lastNumber + 1);  // add element back to end of array
    return newArray;
}*/

// console.log(incrementLastArrayElement(sampleArray));

// L1: quiz 8 - String Manipulation

// var name = "AlbERt EINstEiN";

/*function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var space = finalName.indexOf(" ");
    finalName = finalName.toUpperCase();
    var partialFirst = finalName.slice(1, space);
    finalName = finalName.replace(partialFirst, partialFirst.toLowerCase());
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
*/
// Yes my code above worked. Here's Udacity solution:
/*
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" "); // create array of names by breaking at the space
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");  // array.join([chars]) will join array elements together using " "
    return finalName;
}

console.log(nameChanger(name));
*/

// Object Literal Notation

var bio = {
	"name" : "Valerie Yallup",
	"role" : "Front-end Web Developer",
	// this is an object - you can tell by the braces {}
	"contacts" : {
		"mobile" : "+41 55 555 55 55",
		"email" : "valerie@example.com",
		"github" : "cajoue",
		"twitter" : "@example",
		"location" : "Orbe"
	},
	"bioPic" : "images/vy_640x640.jpg",
	"welcomeMsg" : "Salut",
	// this is an array - you can tell by the square brackets []
	"skills" : ["HTML", "CSS", "JS", "Responsive Web Design"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// contacts list
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//image
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
// welcome
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
// skills array
//var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));  //join array elements together using ", "
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);


$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedBioPic);

// TODO: loop skills
$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);
// investigate this one some more - so that really understand it.
// also want to only show skillsStart if there are skills to show.
// also use var formattedSkills inside loop for continuity.
for (var skill in bio.skills) {
	$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
}


