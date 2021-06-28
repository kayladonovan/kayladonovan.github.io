// var experts = [
//     {
//         name: "No preference",
//         unavailableDates: "";
//     },
//     {
//         name: "Dr. Jennifer Thompson",
//         unavailableDates: 1;
//     },
//     {
//         name: "Dr. Charles Campbell",
//         unavailableDates: 4;
//     },
//     {
//         name: "Jessica Brown",
//         unavailableDates: 3;
//     },
//     {
//         name: "Will Richardson",
//         unavailableDates: 2;
//     }
// ];


// Function to verify that the phone number is correct.
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /(^\(\d{3}\)\s\d{3}\s\d{4}$)/; 
    

    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    var filter = /(^\d{4}\s\d{4}\s\d{4}\s\d{4}$)/; 

    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateExp(txtExp) {
    var a = document.getElementById(txtExp).value;
    var filter = /(^\d{2}\/\d{2}$)/; 

    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateSecurity(txtSec) {
    var a = document.getElementById(txtSec).value;
    var filter = /(^\d{3}$)/; 

    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["07/01/2021","08/02/2021","09/06/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date, ) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts

$(document).ready(function(){

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Incorrect phone number format.");
            $("#phone").val("(xxx) xxx xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // Error for invalid card entries
    $("#debit").on("change", function(){
        if (!validateCard("debit")){
            alert("Invalid card entry.");
            $("#debit").val("xxxx xxxx xxxx xxxx");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });
    $("#exp").on("change", function(){
        if (!validateExp("exp")){
            alert("Invalid format for date of expiry.");
            $("#exp").val("MM/YY");
            $("#exp").addClass("error");
        }
        else {
            $("#exp").removeClass("error");
        }
    });
    $("#security").on("change", function(){
        if (!validateSecurity("security")){
            alert("Invalid security code.");
            $("#security").val("xxx");
            $("#security").addClass("error");
        }
        else {
            $("#security").removeClass("error");
        }
    });


    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1st 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

});
