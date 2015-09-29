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

var name = "Valerie Yallup";
var role = "Front-end Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").append(formattedName);
// $("#header").append(formattedRole);

// There is an as yet unseen list inside the header div. If use
// .append() the data will appear after the list - not what we want.
// Use .prepend() to ensure that name and role appear first.

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

var s = "audacity";

var udacityizer = function(s) {
    s = s[1].toUpperCase() + s.slice(2);
    return s;
};

console.log(udacityizer(s));

