/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var pages = [{
        template_path: "help.html",
        url: "help",
        target: ".section-content"
    }, {
        template_path: "ag-requirements.html",
        url: "a-g",
        extras: { title: "hi", username: "vanwars" },
        target: ".section-content"
    }, {
        template_path: "scholarships.html",
        url: "scholarships",
        target: ".section-content"
    }, {
        template_path: "extra-curriculars.html",
        url: "outside-school",
        target: ".section-content"
    }, {
        template_path: "test-prep.html",
        url: "test-prep",
        target: ".section-content"
    }, {
        template_path: "essays.html",
        url: "essays",
        target: ".section-content"
    }, {
        template_path: "main-menu.html",
        target: ".globalnav",
        className: "navwrapper cf"
    }, {
        template_path: "spokes.html",
        target: ".explore_mainnav"
    }, {
        template_path: "help.html",
        target: ".section-content"
    }];