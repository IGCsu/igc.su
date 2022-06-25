// ------------------------------------------------ //
// Match Bonus Calculator
// ------------------------------------------------ //
/*
 * Used on Build My Savings to provide an interactive match bonus calculator using sliders.
 * @dependency - jquery
 * @dependency - noUiSlider
 * @author Andrew Arant
 * @author Katherine McGonigle
 *
 * Options available for override:
 * Match Percentage (defaults to 1%)    - matchPercent
 * Maximum Yearly Bonus (12 month plan) - yearlyBonusMax12Month
 * Maximum Yearly Bonus (6 month plan)  - yearlyBonusMax6Month
 * Opening Balance Minimum              - openingBalMin
 * Opening Balance Maximum              - openingBalMax
 * Transfer Amount Minimum              - transferAmtMin
 * Transfer Amount Maximum              - transferAmtMax
 */

(function() {

	this.matchBonusCalc = function() {

		// ---------------------------------------------------- //

		// Define option defaults
		var defaults = {
			matchPercent			: (1/100), // 1% match for all transer amounts, etc.

	      	yearlyBonusMax12Month	: 50,
			yearlyBonusMax6Month	: 25,

			openingBalMin			: 25,
			openingBalMax			: 5000,

			transferAmtMin			: 25,
			transferAmtMax			: 1500
	    }

		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}

		// Utility method to extend defaults with user options
		function extendDefaults(source, properties) {
			var property;
			for (property in properties) {
				if (properties.hasOwnProperty(property)) {
					source[property] = properties[property];
				}
			}
			return source;
		}

		// ---------------------------------------------------- //

		var _lang = (typeof(lang) != 'undefined') ? lang : 'en';
		
		var yearlyBonusMax;
		var openingBal,transferAmt,term;
		this.init = init();
		function init(){
			 //Opening Balance	
			var balanceSlider = $('#balance-range')[0];
			var bonusElem = $('#bonus');
			
			noUiSlider.create(balanceSlider, {
				start: [0],
				step: 5,
				range: { 'min': [  defaults.openingBalMin ], 'max': [ defaults.openingBalMax ] }
			});
			
			var balanceElement = $('#balance-value');
			balanceSlider.noUiSlider.on('update', function( values, handle ) {
				 _log('update');
				 bonusElem.css('visibility','visible');
				 var amt = parseInt(values[handle]);
				 if(amt < 25){
					 bonusElem.html('');return;
				 }
				 balanceElement.html('$'+amt);
				 getMatch();
			});
			
			//Transfer Amount
			var transferSlider = $('#transfer-range')[0];
			
			noUiSlider.create(transferSlider, {
				start: [0],
				step: 5,
				range: { 'min': [ defaults.transferAmtMin ], 'max': [ defaults.transferAmtMax ] }
			});

			var transferElement = $('#transfer-value');
			transferSlider.noUiSlider.on('update', function( values, handle ) {
				 bonusElem.css('visibility','visible');
				 var amt = parseInt(values[handle]);
				 if(amt < 25){
					 bonusElem.html('');return;
				 }
				 transferElement.html ('$'+amt); 
				 getMatch();
			});
			
			$('input[name="frequency"]').on('change',function(){
					MatchingCalc.getMatch();
			});
			
			$('input[name="term"]').on('change',function(){
					MatchingCalc.getMatch();
			});
			
		    bonusElem.css('visibility','hidden');
		}
		this.getMatch = getMatch;
		function getMatch(){
			var isEveryOtherWeek = $('#frequency-every-other-week').is(":checked");
			var openingBal = parseInt($('#balance-value').text().replace(/[^A-Za-z0-9]/g, ''));
			var transferAmt=parseInt($('#transfer-value').text().replace(/[^A-Za-z0-9]/g, ''));
			if(openingBal == 0 || transferAmt == 0){$('#bonus').html('');return;}
			var term = parseInt($('input[name="term"]:checked').val());
			var is12MonthTerm = (term == 12);
			yearlyBonusMax = (is12MonthTerm) ? defaults.yearlyBonusMax12Month : defaults.yearlyBonusMax6Month;
			var frequency = parseInt($('input[name="frequency"]:checked').val());
			var isWeeklyFrequency = (frequency === 4);
			var totalAmtTransferred; 
			if(isWeeklyFrequency || isEveryOtherWeek){
				var numberOfWeeks;
				if(isEveryOtherWeek){
			        numberOfWeeks= (is12MonthTerm) ? 26 : 13;
				}
				else{
					numberOfWeeks= (is12MonthTerm) ? 52 : 26;
				}
				totalAmtTransferred = openingBal + (transferAmt * numberOfWeeks);
			}
			else{
				totalAmtTransferred = openingBal + ((transferAmt * frequency) * term); 
			}
			var matchAmt = totalAmtTransferred * defaults.matchPercent;
			var matchContent = '';
			var maxNote = '<span class="max-note">&nbsp;&nbsp;(Max bonus for '+term+' month term is $'+yearlyBonusMax+')</span>';
			if(matchAmt > yearlyBonusMax){
				matchAmt = yearlyBonusMax;
				matchContent = '$'+(matchAmt.toFixed(2)) + maxNote;
			}
			else{ 
			    var matchDollars = (isNaN(matchAmt)) ? "" : "$"+matchAmt.toFixed(2);
			    matchContent = matchDollars; 
			}
			$('#bonus').html(matchContent);
			_log('match amount='+matchAmt);
		}
		function _log(msg){ if(typeof(console) != 'undefined'){console.log(msg);}}

	}

}());

var matchBonusCalc = new matchBonusCalc({
	// Define any options as needed here to override defaults
});
