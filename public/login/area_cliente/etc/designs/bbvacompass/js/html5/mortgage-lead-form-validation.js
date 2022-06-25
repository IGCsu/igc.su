// JavaScript Document

var MortgageLead = {
	objs : {},
	enableGoogleRecaptcha : true,
	recaptchaPublicKey : '6LfIZDMUAAAAAI5eL1efBI_dv7UZOqPAC2G2mmem',
	recaptchaPublicKeyStage : '6LdtWDIUAAAAACQ1DBL2vqHChV1FCpsUcJDiZNj3',
	init : function(){
		MortgageLead.objs['collateral'] = $('#collateral');
		MortgageLead.objs['creditScore'] = $('#creditScore');
		MortgageLead.objs['propertyLocation'] = $('#propertyLocation');
		MortgageLead.objs['barrowedValue'] = $('#barrowedValue');
		MortgageLead.objs['currentValue'] = $('#currentValue');
		MortgageLead.objs['form'] = $('#mortgageLeadForm');
		MortgageLead.objs['fname'] = $('#firstName');
		MortgageLead.objs['lname'] = $('#lastName');
		MortgageLead.objs['email'] = $('#email');
		MortgageLead.objs['tel1'] = $('#tel1');
		MortgageLead.objs['tel2'] = $('#tel2');
		MortgageLead.objs['tel3'] = $('#tel3');
		MortgageLead.objs['loanType'] = $('#loanType');
		MortgageLead.objs['recaptcha'] = $('#g-recaptcha-response');
		MortgageLead.objs['formMsg'] = $('#formMsg');
		MortgageLead.injectCSS();
		if(MortgageLead.enableGoogleRecaptcha){
			if(document.location.href.indexOf('bbvacompass.com') == -1){
				MortgageLead.recaptchaPublicKey = MortgageLead.recaptchaPublicKeyStage;
			}
			$('.g-recaptcha').attr('data-sitekey',MortgageLead.recaptchaPublicKey);
		    setTimeout(function(){$.getScript('https://www.google.com/recaptcha/api.js');},100);	
		}
		if(document.location.href.indexOf('adobecqms.net') > -1){
			$('#mortgage-leadform').attr('action','https://secure-test.bbvacompass.com/compassweb/mortgage/leadForm/');
		}
	},
	injectCSS : function(){
		$("<style type='text/css'> .formErr{ border: 1px solid #c83369 !important;} .formMsg{ color: #c83369 !important;} </style>").appendTo("head");
	},
	validateMoney : function(obj,required){
		var maxval = parseFloat('999999999.00');
		var valid = true;
		var regex  = /^\d+(?:\.\d{0,2})$/;
		var numStr = obj.val().trim();
		if(numStr.length == 0 && (! required)){ return true; }
		numStr = numStr.replace(/[^a-zA-Z0-9\\.]/g,'');
		if(numStr.indexOf('.') == -1){
			numStr += '.00';
		}
		valid = (regex.test(numStr));
		var suppliedval = parseFloat(numStr);
		if(suppliedval > maxval){valid=false;}
		if(valid){
			obj.val(numStr);
		} // set the form value to the updated value
		return valid;
	},
	validateEmail : function(email){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email.toLowerCase());
	},
	validateForm : function(){
		var invalids = [];
		if(MortgageLead.objs['fname'].val().length < 1){invalids.push(MortgageLead.objs['fname']);}
		if(MortgageLead.objs['lname'].val().length < 1){invalids.push(MortgageLead.objs['lname']);}
		if(MortgageLead.objs['email'].val().length < 7 || (! MortgageLead.validateEmail(MortgageLead.objs['email'].val())) ){invalids.push(MortgageLead.objs['email']);} 
		if(MortgageLead.objs['tel1'].val().replace(/[^0-9]/g,'').length != 3){invalids.push(MortgageLead.objs['tel1']);}
		if(MortgageLead.objs['tel2'].val().replace(/[^0-9]/g,'').length != 3){invalids.push(MortgageLead.objs['tel2']);}
		if(MortgageLead.objs['tel3'].val().replace(/[^0-9]/g,'').length != 4){invalids.push(MortgageLead.objs['tel3']);}
		var loanType = MortgageLead.objs['loanType'].val();
		if(loanType.length < 1 || loanType.indexOf('Select') == 0){invalids.push(MortgageLead.objs['loanType']);}
		if(MortgageLead.objs['currentValue'].length > 0){
			if(! MortgageLead.validateMoney(MortgageLead.objs['currentValue'])){
				invalids.push(MortgageLead.objs['currentValue']);
			}
		} 
		if(MortgageLead.objs['barrowedValue'].length > 0){
			if(! MortgageLead.validateMoney(MortgageLead.objs['barrowedValue'])){
				invalids.push(MortgageLead.objs['barrowedValue']);
			}
		}
		MortgageLead.clearFormErrorStyles();
		MortgageLead.addFormErrorStyles(invalids);
		var isValid = (invalids.length == 0);
		if(! isValid){
		   MortgageLead.formMsg('Please correct the highlighted fields.');	
		}
		else{
			if(MortgageLead.enableGoogleRecaptcha){
				MortgageLead.objs['recaptcha'] = $('#g-recaptcha-response');
				if(MortgageLead.objs['recaptcha'].length < 1 || MortgageLead.objs['recaptcha'].val().length < 7){invalids.push(MortgageLead.objs['recaptcha']);}
				isValid = (invalids.length == 0);
				if(! isValid){
					MortgageLead.formMsg('Please confirm you are not a robot.');
					$('.rc-anchor').addClass('formErr');
				}
				else{
					MortgageLead.formMsg('<span style="color:#000000;">Sending...</span>');
				}
			}	
		}
		return isValid;
	},
	addFormErrorStyles : function(invalids){
		for(var i=0,ii=invalids.length; i<ii; i++){
		   var obj = invalids[i];
		   var id = obj.attr('id');
		   var obj2 = $('#select2-'+id+'-container');
		   if(obj2 && obj2.length > 0){
			   obj2 = obj2.parent();
			   obj2.addClass('formErr');
		   }
		   obj.addClass('formErr');
		}
	},
	formMsg : function(msg){
		MortgageLead.objs['formMsg'].html(msg);
	},
	clearFormErrorStyles : function(){
		MortgageLead.objs['formMsg'].html('');
		for (var key in MortgageLead.objs) {
			if (MortgageLead.objs.hasOwnProperty(key)) {
				var obj = MortgageLead.objs[key];
				var id = obj.attr('id');
			    var obj2 = $('#select2-'+id+'-container');
			    if(obj2 && obj2.length > 0){
				   obj2 = obj2.parent();
				   obj2.removeClass('formErr');
			    }
				obj.removeClass('formErr');
			}
		}
	}
}
$(document).ready(MortgageLead.init); 