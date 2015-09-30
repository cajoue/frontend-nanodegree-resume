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
    "name": "Valerie Yallup",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "+41 55 555 55 55",
        "email": "valerie@example.com",
        "github": "cajoue",
        "twitter": "@example",
        "location": "Orbe, Switzerland"
    },
    "bioPic": "images/vy_640x640.jpg",
    "welcomeMessage": "Salut",
    "skills": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design"
    ]
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
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// skills array
//var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));  //join array elements together using ", "
//var formattedSkills = HTMLskills.replace("%data%", bio.skills);

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
// also want to add a new line for each skill like a list.
// investigate this one some more - so that really understand it.
/*for (var skill in bio.skills) {
	$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
}*/

var numberOfSkills = bio.skills.length;
if (numberOfSkills > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0 ; i < numberOfSkills ; i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
}

/*var work = {};
// use dot notation for: current job position, employer, years worked, city of business
work.title = "Executive Assistant and MARCOM Manager";
work.employer = "ACAMP";
work.dates = "2008 - 2015";
work.location = "Edmonton, Canada";

// it appears but didn't look properly formatted :(
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["title"]);
// $("#workExperience").append(HTMLworkStart);
// $("#workExperience").append(formattedWorkTitle);

// Udacity answer didn't format or position the property:

$("#main").append(work["title"]);*/

// create new object work using object literal notation (JSON)

var work = {
    "jobs": [
        {
            "employer": "ACAMP",
            "title": "Executive Assistant, AR Clerk and MARCOM Manager",
            "location": "Edmonton, AB",
            "dates": "2008 - 2015",
            "description": "Perform a wide variety of executive secretarial and administrative duties as required by daily operations in ACAMP. Maintain, verify and record systematic accounts receivable records of business transactions. Calculate, prepare and process accounts receivable invoices and other financial records. Write, review and publish marketing collateral for ACAMP. Manage online presence including Website, Twitter, Events and mailouts."
        },
        {
            "employer": "Tait Europe Ltd",
            "title": "Sales Process Manager",
            "location": "Huntingdon, UK",
            "dates": "2007 - 2008",
            "description": "Manage opportunity, bid and contract review process. Develop and maintain sales tools for bids. Monitor opportunities on CRM tool and ensure its use. Design and produce reports on opportunity values and numbers to show sales manager’s performance. Support various senior management team meetings and presentations including annual and monthly review and forecast data"
        },
        {
            "employer": "NXT plc",
            "title": "Communications Coordinator",
            "location": "Huntingdon, UK",
            "dates": "2005 - 2007",
            "description": "Create, implement and monitor news flow. Write copy, select and manipulate artwork for news releases and website. Generate and maintain content for website with ongoing updates of product, customer and technology databases. Responsible for all operational aspects of producing financial reports"
        },
        {
            "employer": "NXT plc",
            "title": "Senior Scientist",
            "location": "Huntingdon, UK",
            "dates": "1997 - 2005",
            "description": "Started as Project Scientist and progressed through Research Scientist, Acoustic Engineer to Senior Scientist. Design, support and maintain NXT software products. Design, execute and report scientific experiments including psychoacoustic tests and analysis. Write and coordinate company product installation packages, help files and manuals. Provide technical assistance and training. Co-authored published technical acoustics papers. Windows application programming with Borland Delphi including: documentation, installation, program testing and test-data acquisition. Science group organisation, maintenance of department intranet pages."
        }
    ]
};

/*var education = {};
// use bracket notation for: last school, years attended, school's city
education["name"] = "University of Southampton";
education["dates"] = "1994 - 1997";
education["location"] = "Southampton, UK";

// it appears but education name didn't line up as expected :(
var formattedEducationName = HTMLschoolName.replace("%data%", education.name);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedEducationName);

// Udacity answer
// $("#main").append(education.name);*/

// create new object education using object literal notation (JSON)
// include name , city, major, minor, graduation years, online course info
var education = {
    "schools": [
        {
            "name": "University of Southamption",
            "location": "Southamption, UK",
            "degree": "BSc Hons Acoustics and Music",
            "majors": [
                "Acoustics",
                "Music"
            ],
            "dates": "1994 - 1997",
            "url" : "http://www.southampton.ac.uk/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
};

// create new object projects using object literal notation (JSON)
var projects = {
    "projects": [
        {
            "title": "P0: About Me",
            "dates": "2015",
            "description": "My first webpage using HTML and CSS",
            "images": "images/197x148.gif"
        },
        {
            "title": "P1: Build a Portfolio Site",
            "dates": "2015",
            "description": "A PDF design mockup replicated in HTML and CSS. A responsive website that displays images, descriptions and links to each of the portfolio projects that will be completed during the course of the Front-End Web Developer Nanodegree.",
            "images": "images/197x148.gif"
        },
        {
            "title": "P2: Online Resume",
            "dates": "2015",
            "description": "A work in progress! Stepping it up to include JavaScript",
            "images": "images/197x148.gif"
        }
    ]
}