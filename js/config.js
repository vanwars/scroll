/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var pages = [
    
    /********************************************/
    /* Stuff that gets loaded on the front page */
    /********************************************/
    {
        template_path: "main-menu.html",
        target: ".globalnav",       //loads main menu into the .globalnav div
        className: "navwrapper cf"
    },
    {
        template_path: "spokes.html",
        target: ".explore_mainnav"  //loads spokes menu into the .explore_mainnav div
    },
    {
        template_path: "help.html",
        target: ".vcenter"          //loads the help menu menu into the .vcenter div
    },
    
    /***********************************************/
    /* Stuff that gets loaded when a new URL loads */
    /***********************************************/
    {
        url: "help",
        template_path: "help.html"
    },
    {
        url: "a-g",
        template_path: "ag-requirements.html"
    },
    {
        url: "scholarships",
        template_path: "scholarships.html",
        //type: "detail"
        table_id: 4
    },
    {
        url: "outside-school",
        template_path: "extra-curriculars.html"
    },
    {
        url: "profile",
        template_path: "profile.html",  
    },
    {
        url: "test-prep",
        template_path: "test-prep.html"
    },
    {
        url: "essays",
        template_path: "essays.html"
    }
    
];