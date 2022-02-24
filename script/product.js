

var show = true;

function showproduct() {
    event.preventDefault();
    var checkboxes = 
        document.querySelector("#productlist");

    if (show) {
        checkboxes.style.display = "block";
        
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}

function skinconcern() {
    event.preventDefault();
    var checkboxes = 
        document.getElementById("skinlist");

    if (show) {
        checkboxes.style.display = "block";
        
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}
function applicationarea() {
    event.preventDefault();
    var checkboxes = 
        document.getElementById("applicationarea");

    if (show) {
        checkboxes.style.display = "block";
        
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}
function productline() {
    event.preventDefault();
    var checkboxes = 
        document.getElementById("productlinelist");

    if (show) {
        checkboxes.style.display = "block";
        
        show = false;
    } else {
        checkboxes.style.display = "none";
        show = true;
    }
}


