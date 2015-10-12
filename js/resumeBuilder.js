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

// write if statement that checks if there are skills in bio object

// if evaluates to true, .append() HTMLskillsStart to div with id=header

// .append() the skills to the element with id=skills using HTMLskills to format each skill

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// I've been waiting for instructions on adding the remaining bio stuff
// - nothing yet, can always remove if necessary
// *****************************
// topContacts list
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);

//image
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedBioPic);

// welcome
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// *****************************

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

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
            "description": "Manage opportunity, bid and contract review process. Develop and maintain sales tools for bids. Monitor opportunities on CRM tool and ensure its use. Design and produce reports on opportunity values and numbers to show sales manager’s performance. Support various senior management team meetings and presentations including annual and monthly review and forecast data."
        },
        {
            "employer": "NXT plc",
            "title": "Communications Coordinator",
            "location": "Huntingdon, UK",
            "dates": "2005 - 2007",
            "description": "Create, implement and monitor news flow. Write copy, select and manipulate artwork for news releases and website. Generate and maintain content for website with ongoing updates of product, customer and technology databases. Responsible for all operational aspects of producing financial reports."
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
// write for-in loop to iterate thru jobs in work object.
// .append() HTMLworkStart element for each

// format each employer with HTMLworkEmployer
// format each job title with HTMLworkTitle

// .append() concat of employer and title to the the element with
// class work-entry:last

// format and .append() all work details

// encapsulate displayWork() function as a
// display() function within the work object

work.display = function(){
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDesc);
	}
}

work.display();


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

var projects = {
    "projects": [
        {
            "title": "P0: About Me",
            "dates": "2015",
            "description": "My first webpage using HTML and CSS",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "P1: Build a Portfolio Site",
            "dates": "2015",
            "description": "A PDF design mockup replicated in HTML and CSS. A responsive website that displays images, descriptions and links to each of the portfolio projects that will be completed during the course of the Front-End Web Developer Nanodegree.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "P2: Online Resume",
            "dates": "2015",
            "description": "A work in progress! Stepping it up to include JavaScript",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

// encapsulate display() within the projects object

// projects.display() should .append() all project info to projects section

// start each project with HTMLprojectStart

projects.display = function(){
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDesc);

        if (projects.projects[project].images.length > 0){
            for (var image in projects.projects[project].images){
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            };
        };
    };
};

projects.display();

$("#mapDiv").append(googleMap);

/********
// FEAT: internationalize name button - optional

// .append() internationalizeButton to main div
// create function inName() that takes a string of two names
// and returns international version
// Gaaah! Note: The inName button actually will not accept a parameter and should internationalize the value stored in the bio object

function inName() {
    var names = bio.name.trim().split(" ");
    console.log(names);
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(" ");
};

$("#main").append(internationalizeButton);
*********/