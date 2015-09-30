

$(document).ready(function(){
	
    $("#popup").on("show", function() {    // wire up the OK button to dismiss the modal when shown
        $("#popup a.btn").on("click", function(e) {
            console.log("button pressed");   // just as an example...
            $("#popup").modal('hide');     // dismiss the dialog
        });
    });
 
    $("#popup").on("hide", function() {    // remove the event listeners when the dialog is dismissed
        $("#popup a.btn").off("click");
    });
    $("#popup").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
        $("#popup").remove();
    });
    $("#popupBtn").on("click", function() {  // remove the actual elements from the DOM when fully hidden
        $("#popup").modal({                    // wire up the actual modal functionality and show the dialog
          "backdrop"  : "static",
          "keyboard"  : true,
          "show"      : true                     // ensure the modal is shown immediately
        });
    });
	
	
});


    
    
    