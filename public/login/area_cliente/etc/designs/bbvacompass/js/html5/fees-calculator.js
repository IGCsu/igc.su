
/*
 * @dependency - jquery
 * @author Katherine McGonigle
 * @description  Adds an unordered list of "fees." Requires the fees-calculator class on the parent element to run.
 */

var feesCalculator = {
	
	init : function(calculator){
        // Identify element containing the fees total amount
        var feesTotal = $(calculator).find('.fees-total');

        // Add all fee amounts as data attributes on the .fee-amount element
        $(calculator).find('.fee-amount').each(function(){
            feesCalculator.feeSetDataAttr($(this));
        });

        // Add fee total as a data attribute on .fees-total
        feesCalculator.feeSetDataAttr(feesTotal);

        // On click, add or subtract the fee amount to the total
        $('input[type=checkbox]').on('click', function(){
            feesCalculator.calculateFeesTotal($(this), feesTotal);
        });
	},

    feeSetDataAttr: function(feeContainer){
        // Strip dollar sign / errant characters from value; cast as a number with 2 decimal places
        var feeString = $(feeContainer).text(),
            feeValue = Number(feeString.replace(/[^0-9\.]+/g,"")).toFixed(2);

        // Add data attribute to element
        $(feeContainer).attr('data-fee', feeValue);
    },

    calculateFeesTotal: function(clickedFee, feesTotal){
        // Click can trigger adding OR subtracting a fee amount
        var newFee = parseFloat($(clickedFee).nextAll('.fee-amount').attr('data-fee')),
            totalFees = parseFloat($(feesTotal).attr('data-fee')),
            newTotalFees;

        if ($(clickedFee).parent().hasClass('selected')) {
            // Subtract fee from total
            newTotalFees = (totalFees - newFee).toFixed(2);

        } else {
            // Add fee to total
            newTotalFees = (totalFees + newFee).toFixed(2);
        }

        // Display new total fee amount
        $(feesTotal).html('$'+newTotalFees);

        // Update data attribute on .fees-total
        $(feesTotal).attr('data-fee', newTotalFees);

        // Toggle "selected" class for different styling from default 
        $(clickedFee).parent().toggleClass('selected');
    }
}


$(document).ready( function(){
    if ($('.fees-calculator')[0]){
        // Element with .fees-calculator class exists; init the calculator
        $('.fees-calculator').each(function(){
            feesCalculator.init(this);
        });
    }
});
