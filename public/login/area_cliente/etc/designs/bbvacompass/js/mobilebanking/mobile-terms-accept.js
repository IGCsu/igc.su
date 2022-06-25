var MobileTermsAccept = {
		
		isWebPlatform : false,
		isNativePlatform : true,
		lang : 'en',
		
		selectors : {
			container : '#mobile-terms-acceptance',
			acceptBtn : '#mobile-terms-agree-btn',
			declineBtn : '#mobile-terms-decline-btn',
			acceptChk : '#mobile-terms-checkbox',
			termsMsg : '#mobile-terms-msg',
			ecaTerms : '.mobile-banking-eca-terms',
			editMode : '.wcm-edit',
			termsDetailLinks : '.mobile-terms-detail',
			spanishFlag : '.terms-es'
		},
		
		customSchemeUrls : {
			target : null,
			mobileTerms : {
				accept : 'compass://terms/?agreed=1',
				decline : 'compass://terms/?agreed=0',
				details : 'compass://terms/?details=true'
			},
			ecaTerms : {
				accept : 'compass://ecaterms/?agreed=1',
				decline : 'compass://ecaterms/?agreed=0',
				details : 'compass://ecaterms/?details=true'
			}
		},
		
		  agree : function(){  
			var isAccepted = $(MobileTermsAccept.selectors.acceptChk).is(':checked');
			if(isAccepted){
				$(MobileTermsAccept.selectors.termsMsg).removeClass('mobile-terms-error-msg');
				if(MobileTermsAccept.isWebPlatform){
					if(window.parent){ 
					    window.parent.postMessage({ agreed: 1 }, "*"); 
					}
				}
				else{
					document.location.href = MobileTermsAccept.customSchemeUrls.target.accept;
				}
			}
			else{
				$(MobileTermsAccept.selectors.termsMsg).addClass('mobile-terms-error-msg');
			}
		  },
		  
		  decline : function(){ 
			var isAccepted = $(MobileTermsAccept.selectors.acceptChk).is(':checked');
			if(isAccepted){
				$(MobileTermsAccept.selectors.termsMsg).addClass('mobile-terms-error-msg');
				return false;
			}
			$(MobileTermsAccept.selectors.termsMsg).removeClass('mobile-terms-error-msg');

			if(MobileTermsAccept.isWebPlatform){
				if(window.parent){ 
				  window.parent.postMessage({ agreed: 0 }, "*"); 
				}
				$(MobileTermsAccept.selectors.termsMsg).removeClass('mobile-terms-error-msg');
			}
			else{
				document.location.href = MobileTermsAccept.customSchemeUrls.target.decline;
				$(MobileTermsAccept.selectors.termsMsg).removeClass('mobile-terms-error-msg');
			}
		  },
		  
		  clickTermsOfUse : function(){ 
			  var isAccepted = $(MobileTermsAccept.selectors.acceptChk).is(':checked');
			  if(isAccepted){
				  if(MobileTermsAccept.isNativePlatform){$(MobileTermsAccept.selectors.acceptBtn).attr('href', MobileTermsAccept.customSchemeUrls.target.accept);}
				  $(MobileTermsAccept.selectors.termsMsg).removeClass('mobile-terms-error-msg');
				  $(MobileTermsAccept.selectors.acceptBtn).addClass('btn-bbva-primary');
				  $(MobileTermsAccept.selectors.acceptBtn).removeClass('btn-bbva-default-app');
			  }
			  else{
				  if(MobileTermsAccept.isNativePlatform){$(MobileTermsAccept.selectors.acceptBtn).attr('href','javascript:;');}
				  $(MobileTermsAccept.selectors.acceptBtn).removeClass('btn-bbva-primary');
				  $(MobileTermsAccept.selectors.acceptBtn).addClass('btn-bbva-default-app');
			  }
		  },
		  
		  clickDetail : function(){
			  if(MobileTermsAccept.isWebPlatform){
				  window.parent.postMessage({link: true},"*");
			  }
			  else if(MobileTermsAccept.isNativePlatform){
				  var iframe = document.createElement('iframe');
				  iframe.src = MobileTermsAccept.customSchemeUrls.target.details;
				  iframe.height='1';
				  iframe.width='1';
				  iframe.style.visibility = 'hidden';
				  document.body.appendChild(iframe);
			  }
		  },
		  
		  initDetailLinkClickHandlers : function(){
			  var termsDetail = $(MobileTermsAccept.selectors.termsDetailLinks);
			  termsDetail.each(function(){
				 var obj = $(this);
				 if(obj.prop('tagName') && obj.prop('tagName').toLowerCase() === 'a'){
					 obj.on('click',MobileTermsAccept.clickDetail);
				 }
				 else{
					 $('a',obj).each(function(){
						 $(this).on('click',MobileTermsAccept.clickDetail);
					 });
				 }
			  });
		  },
		  
		  init : function(){  
			  var isEditMode = ( $(MobileTermsAccept.selectors.editMode).length > 0 );
			  var trigger = UrlParams.get('requestAcceptance');
			  if($(MobileTermsAccept.selectors.spanishFlag).length > 0){MobileTermsAccept.lang='es';}
			  if( (isEditMode) || (trigger && trigger === '1') ){
				  var platform = UrlParams.get('platform');
				  if(platform && platform === 'web'){
					  MobileTermsAccept.isWebPlatform=true;
					  MobileTermsAccept.isNativePlatform=false;
				  }
				  var container = $(MobileTermsAccept.selectors.container);
				  var isEcaTerms = ( $(MobileTermsAccept.selectors.ecaTerms).length > 0 );
				  if(isEcaTerms){
					  MobileTermsAccept.customSchemeUrls.target = MobileTermsAccept.customSchemeUrls.ecaTerms;
				  }
				  else{
					  MobileTermsAccept.customSchemeUrls.target = MobileTermsAccept.customSchemeUrls.mobileTerms;
				  }
				  $(MobileTermsAccept.selectors.acceptChk).attr('checked',false);
				  $(MobileTermsAccept.selectors.acceptBtn).on('click', MobileTermsAccept.agree);
				  $(MobileTermsAccept.selectors.declineBtn).on('click', MobileTermsAccept.decline);
				  $(MobileTermsAccept.selectors.acceptChk).on('click', MobileTermsAccept.clickTermsOfUse);
				  MobileTermsAccept.initDetailLinkClickHandlers();
				  container.css({'display':'block'});
			  }
		  }
}
