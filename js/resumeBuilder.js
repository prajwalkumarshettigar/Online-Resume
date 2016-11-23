var myName = "Prajwal Kumar";
var role = "Front End Web Developer";

function inName(myName) {
    myName = myName.trim().split(" ");
    console.log(myName);
    myName[1] = myName[1].toUpperCase();
    myName[0] = myName[0].slice(0, 1).toUpperCase() + myName[0].slice(1).toLowerCase();
    return myName[0] + " " + myName[1];
}

$("#main").append(internationalizeButton);

var bio = {
    "name": myName,
    "role": role,
    "skills": ["HTML5", "Javascript", "CSS3"],
    "contacts": {
        "email": "69pk666.com",
        "mobile": "9902363772",
        "github": "prajwalkumarshettigar",
        "location": "Mangalore"
    },
    "biopic": 'images/me.jpg',
    "welcomeMessage": "Hola!, I am Prajwal, a creative Web Developer, I stand on the sweetspot where design and code intersects"
};

bio.display = function() {
    var i = 0;
    var formatedname = HTMLheaderName.replace("%data%", bio.name);
    var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formatedpic = HTMLbioPic.replace("%data%", bio.biopic);
    var formatedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formatedname, formatedrole);
    $("#topContacts").append(formatedmobile, formatedemail, formatedgithub, formatedlocation);
    $("#header").append(formatedpic, formatedmsg);
    $("#footerContacts").append(formatedmobile, formatedemail, formatedgithub, formatedlocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        while (i < bio.skills.length) {
            var formatedskill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formatedskill);
            i++;
        }
    }
};

bio.display();


var work = {
    "jobs": [{
        "title": "Systems Engineer",
        "employer": "Infosys",
        "dates": "2016-present",
        "location": "Mysore,India",
        "description": "Systems engineering uses a host of tools that include modeling and simulation, requirements analysis and scheduling to manage complexity. Systems engineering is an interdisciplinary field of engineering that focuses on how to design and manage complex systems over their life cycles."
    }]
};

function displayWork() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var fromattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formttedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle, fromattedLocation, formttedDate, formattedDescription);
    }
}

displayWork();

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "images": ["images/project1.jpg", "images/project2.jpg"],
        "description": "A website, also written as web site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A web site may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site."
    }, {
        "title": "Online Resume",
        "dates": "2016",
        "images": ["images/project1.jpg", "images/project2.jpg"],
        "description": "Online Resume: A website, also written as web site, is a collection of related web pages, including multimedia content, typically identified with a common domain name, and published on at least one web server. A web site may be accessible via a public Internet Protocol (IP) network, such as the Internet, or a private local area network (LAN), by referencing a uniform resource locator (URL) that identifies the site."
    }],
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formatedtitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formateddate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formateddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formatedtitle, formateddate, formateddescription);
        for (var image = 0; image < projects.projects[project].images.length; image++) {
            var formatedimg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formatedimg);
        }
        if (project + 1 != projects.projects.length) {
            $(".project-entry:last").append("<hr>");
        }
    }
};

if (projects.projects.length > 0) {
    projects.display();
}

var education = {
    "schools": [{
        "name": "Srinivas Inistitute of Technology",
        "location": "Valachil, Mangalore",
        "degree": "Bachelors Degree",
        "majors": ["Electronics & Communication Engineering"],
        "dates": "2016",
        "url": "www.http://srinivasgroup.com/"
    }],
    "onlineCourses": [{
        "school": "UDACITY",
        "title": "FEND",
        "dates": "2016",
        "url": "www.udacity.com"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    for (school = 0; school < education.schools.length; school++) {
        var formattedschool = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formatteddate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolurl = HTMLschoolURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(formattedschool, formatteddegree, formatteddate, formattedlocation, formattedschoolurl);
        for (var major = 0; major < education.schools[school].majors.length; major++) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
        }
        if (school + 1 != education.schools.length) {
            $(".education-entry:last").append("<hr>");
        }
    }
    $(".education-entry:last").append("<hr>");
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var course = 0; course < education.onlineCourses.length; course++) {
            var formatedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formatedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formatedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formatedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".online-entry:last").append(formatedOnlineSchool, formatedtitle, formatedDate, formatedurl, "<hr>");
        }
    }
};

if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    education.display();
}

$("#mapDiv").append(googleMap);