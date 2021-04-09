/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'A program that stores data as a user instructs'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "The site on which the data is stored, allowing the user to access both their own data and that of others. This creates a forum on which programmers can rely."
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: "Git init is a command that allows a user to create an empty repository within their system, or link an existing repository (existing on the GitHub site) to their system.",
    code: "git init (you may enter a URL here as well)"
}
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: "Clone is a command that allows a user to create a previously copied repository (from GitHub) to their system.",
    code: "git clone (URL here)"
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: "This command outputs the current status of information (if any) that is ready to be staged or pushed to GitHub. It will also alert the user to any errors currently occurring with the data storage process.",
    code: "git status"
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = {
    description: "This is the command that alerts git that you are about to make changes. It will monitory your current directory and be prepared to commit any changes.",
    code: "git add ."
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: "The commit command is the keyword that lets git know that it should save the changes it has been monitoring. It will save but not upload, and it allows for further changes to be staged",
    code: "git commit -m'"
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description: "This is a command that allows you to do a variety of things all in relation to a remote repository on your system. The add command specifically is another way to initialize another repository on your system.",
    code: "git remote add ()"
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = {
    description: "The push command is the command tells the system to send your staged changes to GitHub. Anything that it has staged in your current directory will be stored in the linked repository in the cloud.",
    code: "git push"
}