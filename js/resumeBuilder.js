var bio = {
    name: 'Valerie Yallup',
    role: 'Front-end Web Developer',
    contacts: {
        mobile: '+41 55 555 55 55',
        email: 'valerie@example.com',
        github: 'cajoue',
        twitter: '@example',
        location: 'Orbe, Switzerland'
    },
    welcomeMessage: "Front-end web developer with marketing communications experience in start-up, not-for-profit and established operations. Experience includes management of high profile websites. Committed to keeping up with latest web developments, recent projects use advancements in HTML5, JavaScript and responsive design to render websites that provide exceptional user experience.",
    skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'Gulp',
        'GitHub',
        'Responsive web design',
        'KnockoutJS MVVM framework',
        'Jasmine testing framework',
        'Illustrator',
        'InDesign'
    ],
    bioPic: 'images/vy_640x640.jpg',
};

bio.display = function(){
    // header
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    $('#header-top').prepend(formattedRole);
    $('#header-top').prepend(formattedName);

    // topContacts list
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedLocation);
    $('#topContacts').append(formattedGithub);
    // $('#topContacts').append(formattedTwitter);

    // footerContacts list
    var formattedFooterMobile = formattedMobile.replace('accent', 'white');
    var formattedFooterEmail = formattedEmail.replace('accent', 'white');
    var formattedFooterGithub = formattedLocation.replace('accent', 'white');
    var formattedFooterTwitter = formattedGithub.replace('accent', 'white');
    var formattedFooterLocation = formattedTwitter.replace('accent', 'white');

    $('#footerContacts').append(formattedFooterMobile);
    $('#footerContacts').append(formattedFooterLocation);
    $('#footerContacts').append(formattedFooterGithub);
    $('#footerContacts').append(formattedFooterTwitter);
    $('#footerContacts').append(formattedFooterEmail);

    //image
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $('#header').append(formattedBioPic);

    // welcome
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++){
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
            $('#skills').append(formattedSkill);
        }
    }
};

var work = {
    jobs: [
        {
            employer: 'ACAMP',
            title: 'Executive Assistant, AR Clerk and MARCOM Manager',
            location: 'Edmonton, AB',
            dates: '2008 - 2015',
            description: 'Managed creation of, and maintained, 5 websites for not-for-profit company. Created, wrote and implemented marketing collateral (online and hard copy) to support seminar events that brought together more than 100 entrepreneurs and tech leaders each quarter. Worked together with business team and outside agencies to create sites that informed local clients, drew new business and attracted over 400 international delegates to two conferences.'
        },
        {
            employer: 'Tait Europe Ltd',
            title: 'Sales Process Manager',
            location: 'Huntingdon, UK',
            dates: '2007 - 2008',
            description: 'Managed opportunity, bid and contract review process. Developed and maintained sales tools for bids. Monitored opportunities on CRM tool and ensured its use. Designed and produced reports on opportunity values and numbers to show sales manager’s performance. Supported various senior management team meetings and presentations including annual and monthly review and forecast data.'
        },
        {
            employer: 'NXT plc',
            title: 'Communications Coordinator',
            location: 'Huntingdon, UK',
            dates: '2005 - 2007',
            description: 'Created, implemented and monitored news flow. Wrote copy, selected and manipulated artwork for news releases and website. Generated and maintained content for website with ongoing updates of product, customer and technology databases. Responsible for all operational aspects of producing financial reports.'
        },
        {
            employer: 'NXT plc',
            title: 'Senior Scientist',
            location: 'Huntingdon, UK',
            dates: '1997 - 2005',
            description: 'Started as Project Scientist and progressed through Research Scientist, Acoustic Engineer to Senior Scientist. Designed, supported and maintained NXT software products. Designed, executed and reported scientific experiments including psychoacoustic tests and analysis. Wrote and coordinated company product installation packages, help files and manuals. Provided technical assistance and training. Co-authored published technical acoustics papers. Windows application programming with Borland Delphi included: documentation, installation, program testing and test-data acquisition. Science group organisation, maintenance of department intranet pages.'
        }
    ]
};

work.display = function(){
    for (var job = 0; job < work.jobs.length; job++){
        $('#workExperience').append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedWorkDesc = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedWorkDesc);
    }
};


var education = {
    schools: [
        {
            name: 'University of Southampton',
            location: 'Southampton, UK',
            degree: 'BSc Hons Acoustics and Music',
            majors: [
                'Acoustics',
                'Music'
            ],
            dates: '1997',
            url : 'http://www.southampton.ac.uk/'
        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            date: '2015 - 2016',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
            title: 'Responsive Web Design Fundamentals',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
        },
        {
            title: 'HTML5 Canvas',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com/course/html5-canvas--ud292'
        },
        {
            title: 'Object-Oriented JavaScript',
            school: 'Udacity',
            date: '2015',
            url: 'https://www.udacity.com/course/object-oriented-javascript--ud015'
        },
        {
            title: 'Browser Rendering Optimization',
            school: 'Udacity',
            date: '2016',
            url: 'https://www.udacity.com/course/browser-rendering-optimization--ud860'
        },
        {
            title: 'JavaScript Design Patterns',
            school: 'Udacity',
            date: '2016',
            url: 'https://www.udacity.com/course/javascript-design-patterns--ud989'
        },
        {
            title: 'JavaScript Testing',
            school: 'Udacity',
            date: '2016',
            url: 'https://www.udacity.com/course/javascript-testing--ud549'
        }
    ]
};

education.display = function(){
    for (var school = 0; school < education.schools.length; school++){
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        $('.education-entry:last').append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolName.replace('%data%', education.schools[school].degree);
        $('.education-entry:last').append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        $('.education-entry:last').append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        $('.education-entry:last').append(formattedSchoolLocation);

        for (var major = 0; major < education.schools[school].majors.length; major++){
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
            $('.education-entry:last').append(formattedSchoolMajor);
        }
    }

    $('#education').append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++){
        $('#education').append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDate = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
        $('.education-entry:last').append(formattedOnlineDate);

        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
        $('.education-entry:last').append(formattedOnlineURL);
    }
};


var projects = {
    projects: [
        {
            title: 'Feed Reader Testing',
            dates: '2016',
            description: "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
            images: ['images/jasmine-tests.jpg'],
            url: 'https://github.com/cajoue/frontend-nanodegree-feedreader'
        },
        {
            title: 'Neighbourhood Map',
            dates: '2016',
            description: 'A single-page web application, built using the Knockout framework. It displays a Google Map with points of interest. Calls Foursquare and Robohash APIs.',
            images: ['images/neighbourhood-map.jpg'],
            url: 'http://cajoue.github.io/frontend-nanodegree-neighbourhood-map/'
        },
        {
            title: 'Website Performance',
            dates: '2016',
            description: "Optimized a slow web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
            images: ['images/optimisation.jpg'],
            url: 'http://cajoue.github.io/frontend-nanodegree-mobile-portfolio'
        },
        {
            title: 'Arcade Game Clone',
            dates: '2015',
            description: 'An HTML5 Canvas powered video game, developed using Object Oriented JavaScript. Clone of the classic game, Frogger.',
            images: ['images/arcade-game.jpg'],
            url: 'http://cajoue.github.io/frontend-nanodegree-arcade-game'
        },
        {
            title: 'Interactive Resume',
            dates: '2015',
            description: 'An interactive resume application using jQuery that reads all data from a JSON file and dynamically modifies the DOM to display the information.',
            images: ['images/resume.jpg', 'images/p2-resume-2-small.jpg'],
            url: 'http://cajoue.github.io/frontend-nanodegree-resume/'
        },
        {
            title: 'Simple Portfolio Page',
            dates: '2015',
            description: 'A PDF design mockup replicated in HTML and CSS. A responsive website that displays images, descriptions and links to each of the portfolio projects completed during the course of the Front-End Web Developer Nanodegree.',
            images: ['images/simple-portfolio.jpg', 'images/p1-portfolio-2-small.jpg'],
            url: 'http://cajoue.github.io/U-P1-Portfolio/'
        }
    ]
};

projects.display = function(){
    for (var project = 0; project < projects.projects.length; project++){
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $('.project-entry:last').append(formattedProjectDesc);

        if (projects.projects[project].images.length > 0){
            for (var image = 0; image < projects.projects[project].images.length; image++){
                var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                $('.project-entry:last').append(formattedProjectImage);
            }
        }
    }
};

// jQuery plugin "Sticky" by Anthony Garand http://garand.me
// to stick the nav bar to the top of the page

$(document).ready(function() {
    $("#nav").sticky({topSpacing:0});
});

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

/********
// FEAT: internationalize name button - optional

// .append() internationalizeButton to main div
// create function inName() that takes a string of two names
// and returns international version
// Gaaah! Note: The inName button actually will not accept a parameter and should internationalize the value stored in the bio object

function inName() {
    var names = bio.name.trim().split(' ');
    console.log(names);
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(' ');
};

$('#main').append(internationalizeButton);
*********/