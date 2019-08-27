// This chrome extension was written to make it easier to request keys at keymailer, it should not be used to fully script requesting keys. With this extension the user 
// will still have to select each game they want individually.

// Checks all items that are passed to it
// TODO: Allow the user to select which platforms they want selected rather than selecting all
function checkItems(item) {
    item.checked = true;
}

// Detects if the modal for selecting platforms is open
function findModal(item) {
    if (item.id == "request_key") {
        return true;
    }
}



$(document).ready( function() {
    // This checks for the continue button, if it is present it will click it, this happens once the page is loaded and ready
    if($('.g-recaptcha').length > 0){ 
        $('.g-recaptcha').click();
    }
    // Once you have claimed the key and gone to the key page this detects the success bar near the top and brings you back to the page where you can see all the games
    else if ($('.alert-box').length > 0 && $('.success').length > 0) {
        history.go(-2);
    }
    // Checks for modal opening and checks all items
    // TODO: Click the submit request button after all items have been selected
    else {
            setInterval(function(){
                for (let item of document.getElementsByClassName("reveal-modal")) {
                    if (findModal(item)) {
                        document.querySelectorAll('input[type=checkbox]').forEach(checkItems);
                        // Not yet fully functional here
                        $('.submit-request').click();
                        clearInterval();
                    }
                }}, 1000);
    }
    
    
        
});

