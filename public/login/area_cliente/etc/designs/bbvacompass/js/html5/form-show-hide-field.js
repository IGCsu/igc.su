
/*
 * Meant to be used in conjunction with form fields that have radio buttons that show/hide an additional field.
 * This is an extension of Bootstrap JS's toggle function (data-toggle).
 * The field that triggers the form to be revealed needs a class of "reveal-hidden-field" for this script to work correctly.
 * An example of this functionality is at: http://blueplaybook.com/coronita/pages/snippets/wufoo-forms.php#example01
 * Inspect/click the "Please contact me by" set of radio buttons to see the behavior.
 * @dependency - jquery
 * @dependency - bootstrap js
 * @author Katherine McGonigle
 */

var radioButtonShowHide = {

    init : function(){
        // If a label toggle exists (to reveal a hidden form field), init
        if ('label.reveal-hidden-field'[0]){

            $('label.reveal-hidden-field').each(function(){

                var toggleEl = $(this),
                    targetField = $(toggleEl).attr('data-target'),
                    toggleClicked = false;

                $(toggleEl).on('click', function(){
                    toggleClicked = true;
                });

                $(targetField).on('show.bs.collapse', function(e) {
                    // If the hidden field is closed and a label other than toggleEl has been clicked,
                    // keep it closed -- do not toggle it open
                    // Only toggleEl should trigger element to toggle open
                    if (!toggleClicked) {
                        e.preventDefault();
                    }

                    toggleClicked = false;
                });

                $(targetField).on('hide.bs.collapse', function(e) {
                    // If the hidden field is already open, keep it open
                    if (toggleClicked) {
                        e.preventDefault();
                    } 

                    // If the hidden field is closed and a label other than toggleEl has been clicked,
                    // keep it closed -- do not toggle it open
                    // Only toggleEl should trigger element to toggle open
                    else {
                        if (!$(targetField).hasClass('in')) {
                            e.preventDefault();
                        }
                    }

                    toggleClicked = false;
                });
            });
        } 
    } // init
} // radioButtonShowHide

$(document).ready( function(){
    radioButtonShowHide.init();
});