# online Resume
##Intro
Using jQuery, this is an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.
##How to Run
###File Structure
* CSS
  * `style.css` custom css styles for the web page
* js
  * `helper.js` File contains all of the code running in the background that makes resumeBuilder.js possible
  * `resumeBuilder.js` File Contains main objects of the page.
  * `jQuery.js`
* images
* `index.html` 

###JavaScript Objects Structure.
  
  * `bio` contains:
        
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:
      
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (Can be 'in progress')
                 description: string 
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters
            
To Experience The Webpage [**click Here**](https://prajwalkumarshettigar.github.io/Online-Resume/).

Feel free to exchange thoughts on the projects.
