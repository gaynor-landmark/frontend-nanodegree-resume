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
  "welcomeMessage": "My favourite days are productive days. I enjoy losing myself in complex programming problems, chasing down bugs and creating smooth user experiences.",
  "skills": ["Thorough", "Goal-Oriented", "Analytical Thinker", "Skilled Communicator"]
};


//Work
var work = {
  "jobs":[
    {   
    "employer": "Massey University - MUSAC",
    "title": "Software Developer",
    "location": "Palmerston North",
    "dates": "April 2002 - December 2015",
    "description": "ASP.net and C# - a member of the MUSAC 'edge' web application team"
    },
    { 
    "employer": "Massey University - MUSAC",
    "title": "Software Developer",
    "location": "Palmerston North",
    "dates": "April 2002 - December 2015",
    "description": "VB6 and C# - programmer for the MUSAC 'Classic Suite' of school management software programs"
    },
    { 
    "employer": "St Alban's Church",
    "title": "Finance Administrator",
    "location": "Palmerston North",
    "dates": "April 1999 - August 2002",
    "description": "Maintained church accounts, payroll, PAYE, GST, Annual Financial Statements prepared for Audit"
    },
    { 
    "employer": "Palmerston North Girls' High School",
    "title": "Economics Teacher",
    "location": "Palmerston North",
    "dates": "July 2000 - December 2000",
    "description": "Taught Economics to Year 10 and Year 12 students"
    },
    { 
    "employer": "Previously employed in South Africa",
    "title": "Programmer (Factory Systems) and Teacher (Accounting)",
    "location": "",
    "dates": "",
    "description": ""
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
      "name": "Van Zyl and Pritchard Training Institute",
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
      "dates": "Currently studying"
    }
  ],
  "otherCourses": [
    {
      "title": "Business Analysis Short Courses",
      "school": "Equinox IT",
      "dates": "",
      "url": ""
    },
    {
      "title": "Various Programming Short Courses",
      "school": "UCOL, Youbee",
      "dates": "",
      "url": ""
    }
  ]
};

//Projects
var projects = {
  "projects":[
   /* {
      "title": "Project A",
      "dates": " - ",
      "description": "unknown",
      "images": ["./images/fry.jpg", "./images/fry.jpg" ]
    },  {
      "title": "Project B",
      "dates": " - ",
      "description": "unknown",
      "images": ["./images/fry.jpg", "./images/fry.jpg" ]
    }*/

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
/*
$("#main").append(internationalizeButton);*/

$("#mapDiv").append(googleMap);