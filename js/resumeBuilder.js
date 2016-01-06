//OBJECT LITERALS

//Bio
var bio = {
  "name": "Gaynor Landmark",
  "role": "Web Developer",
  "contacts": { "mobile": "+64 277883812",
                    "email": "g.l.landmark@gmail.com",
                    "github": "gaynor-landmark",
                    "blog": "gaynor-landmark.github.io",
                    "location": "Palmerston North"
  },
  "picURL": "./images/fry.jpg",
  "welcomeMessage": "This is my welcome message.",
  "skills": ["Front-end Web Development", "Teaching", "Accountancy"]
};


//Work
var work = {
  "jobs":[
    {   
    "employer": "Massey University - MUSAC",
    "title": "Software Developer 1",
    "location": "Palmerston North",
    "dates": "February 2012 - December 2015",
    "description": "VB6 and C# programming"
    },
    { 
    "employer": "Massey University - MUSAC",
    "title": "Software Developer 2",
    "location": "Palmerston North",
    "dates": "February 2012 - December 2015",
    "description": "VB6 and C# programming"
    },
    { 
    "employer": "Massey University - MUSAC",
    "title": "Software Developer 3",
    "location": "Palmerston North",
    "dates": "February 2012 - December 2015",
    "description": "VB6 and C# programming"
    }
  ]
};

//education
var education = {
  "schools": [
    {
      "name": "University of Natal",
      "location": "Pietermaritzburg, S.A.",
      "degree": "B.Comm",
      "majors": ["Accounting", "Economics"],
      "dates": "1980 - 1982"
    },
    {
      "name": "University of Natal",
      "location": "Pietermaritzburg, S.A.",
      "degree": "Higher Diploma in Education",
      "majors": ["Secondary School Teaching"],
      "dates": "1983"
    },
    {
      "name": "Van Zyl and Pritchard Computer College",
      "location": "Johannesburg, S.A.",
      "degree": "Computer Programming Certificate",
      "majors": ["COBOL", "Adabas Natural"],
      "dates": "1988"
    },
    {
      "name": "Enspiral Developer Academy",
      "location": "Wellington, N.Z.",
      "degree": "Web Development Certificate",
      "majors": ["?"],
      "dates": "2016"
    }
  ],
  "otherCourses": [
    {
      "title": "Intro to Business Analysis",
      "school": "YYYYY",
      "dates": "01/01/2000",
      "url": "http:"
    },
    {
      "title": "SQL Master Class",
      "school": "ZZZZZ",
      "dates": "01/01/2000",
      "url": "http:"
    }
  ]
};

//Projects
var projects = {
  "projects":[
    {
      "title": "Project A",
      "dates": " - ",
      "description": "unknown",
      "images": ["./images/fry.jpg", "./images/fry.jpg" ]
    },  {
      "title": "Project B",
      "dates": " - ",
      "description": "unknown",
      "images": ["./images/fry.jpg", "./images/fry.jpg" ]
    }

  ]
};

//BIO SECTION

bio.display = function(){
  displayBio();
};

function displayBio(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.picURL);
  var formattedwelcomeMess = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMessage)

  $("#header").append(formattedwelcomeMess);
  $("#header").prepend(formattedbioPic);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile );
  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email );
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog );

  $("#topContacts").append (formattedMobile);
  $("#topContacts").append (formattedemail);
  $("#topContacts").append (formattedGitHub);
  $("#topContacts").append (formattedBlog);

  if (bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = "";
    for (var i = 0; i <= bio.skills.length -1; i++)
    {
      formattedSkills = HTMLskills.replace("%data%", bio.skills[i]); 
      $("#skills").append(formattedSkills);
    }
  }

};

bio.display();

//WORK SECTION

work.display = function(){
  if (work.jobs.length > 0){
    displayWork();
  }
};

function displayWork(){
  var formattedworkEmployer = "";
  var formattedworkTitle = "";
  var formattedworkDates = ""; 
  var formattedworkLocation = "";
  var formattedworkDescription = "";
  for (job in work.jobs){
    if (work.jobs.hasOwnProperty(job)){
      $("#workExperience").append(HTMLworkStart);
      formattedworkEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      $(".work-entry:last").append(formattedworkEmployer + formattedworkTitle);
      formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedworkDates);
      formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedworkLocation);
      formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedworkDescription);
    }
  }
};

work.display();

//PROJECTS SECTION

projects.display = function(){
  if (projects.projects.length > 0){
    displayProjects(); 
  }
};

function displayProjects(){
  for (projindx in projects.projects){
    if (projects.projects.hasOwnProperty(projindx)){
      $("#projects").append(HTMLprojectStart);
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projindx].title);
      var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[projindx].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projindx].description );
      $(".project-entry:last").append(formattedprojectTitle);
      $(".project-entry:last").append(formattedprojectDates);
      $(".project-entry:last").append(formattedprojectDescription);

      for (var i = 0; i < projects.projects[projindx].images.length; i++){
        var formattedprojectImages = HTMLprojectImage.replace("%data%", projects.projects[projindx].images[i]);
        $(".project-entry:last").append(formattedprojectImages);
      }; 
    }  
  }
};

projects.display();

//EDUCATION SECTION
/*"schools": [
    {
      "name": "University of Natal",
      "location": "Pietermaritzburg, S.A.",
      "degree": "B.Comm",
      "majors": ["Accounting", "Economics"],
      "dates": "1980 - 1982"
    },*/
education.display = function(){
  if (education.schools.length > 0){
    displayEducation();
  }
};

function displayEducation(){
  for (schoolindx in education.schools){
    if (education.schools.hasOwnProperty(schoolindx)){
      $("#education").append(HTMLschoolStart);  
      var formattedName = HTMLschoolName.replace("%data%", education.schools[schoolindx].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolindx].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schoolindx].dates);    
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolindx].location);    
      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedDegree);
      $(".education-entry:last").append(formattedDates);    
      for (var i = 0; i < education.schools[schoolindx].majors.length; i++){
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolindx].majors[i]);
        $(".education-entry:last").append(formattedMajor);
      }; 
    }
  }

};

education.display();

//Other 

function inName(){
  var str = bio.name;
  console.log(str);
  var arr = str.split(" ");
  return str = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1).toLowerCase() + " " + arr[1].toUpperCase();
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);