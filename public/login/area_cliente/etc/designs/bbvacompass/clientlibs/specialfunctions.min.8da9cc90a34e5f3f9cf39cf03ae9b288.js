function loadMoreArticles(b){var e=$(b).parent().next();
if(e&&e.length!==0){$(e).removeClass("hide");
$(window).data("ajaxready",true)
}else{if($("#no-more-results").val()!="true"){var d=$("#articlesCount").val();
d=d*9;
var f=$("#blogfamily").val();
var a=$("#categoryselectors").val();
var c="/bin/bbvacompass/blog/featuredarticles."+d+"."+f+".json";
if(a!==""){c="/bin/bbvacompass/blog/featuredarticles."+d+"."+f+"."+a+".json"
}$.getJSON(c,function(l){$(window).data("ajaxready",true);
var j=l.count;
if(j>0){var h=parseInt($("#articlesCount").val());
$("#articlesCount").val(h+1);
var k=false;
if(j>0&&j<=9){var g='<div id="articles'+h+'">';
g+=formEditorialDiv(l.featuredArticles,"editorial",k);
g+=formCardsDiv(l.featuredArticles);
g+=formEditorialDiv(l.featuredArticles,"flipped",k);
g+="</div>";
$(".featuredArticles").append(g)
}}else{$("#no-more-results").val("true");
$(window).unbind("scroll")
}})
}}}function formEditorialDiv(e,g,b){var c=true;
var f=b;
var d='<div class="bbva-cards bbva-cards-editorial card-stack">';
if(g==="flipped"){d='<div class="bbva-cards bbva-cards-editorial bbva-cards-editorial-alternate card-stack">';
c=false
}var a=d+'<div class="container"><div class="row"><section class="card-block"><div class="col-xs-12 col-md-6">';
a+=c?getArticleHTML(e[0]):getArticleHTML(e[8]);
a+='</div><div class="col-xs-12 col-md-6">';
a+=c?getArticleHTML(e[1]):getArticleHTML(e[7]);
a+=c?getArticleHTML(e[2]):getArticleHTML(e[6]);
a+="</div></section></div>";
a+=c?"":f?getViewMoreText():"";
a+="</div></div>";
return a
}function getArticleHTML(b){var a="";
if(b){var c;
if(b.blogType=="brightfutures"&&b.blogCssCategory=="economic-reports"){c=b.blogArticleDate
}else{c=b.blogCategory
}a='<a href="'+b.blogArticlePath+'" class="card-wrap"><span class="card-img" style="background-image: url('+b.blogArticleImagePath+')"><span class="image-header-overlay"></span>Image alt text can appear here.</span><div class="card-text"><h4 class="article-category h6 bullet '+b.blogCssCategory+'">'+c+'</h4><h3 class="h5">'+b.blogArticleTitle+"</h3><p>"+b.blogArticleDescription+'</p></div><p class="faux-link">Read More</p></a>'
}else{a+='<a class="card-wrap" style="box-shadow: 0 0 0 0 "></a>'
}return a
}function formCardsDiv(b){var a='<div class="bbva-cards card-stack"><div class="container"><div class="row"><section class="card-block">';
a+='<div class="col-xs-12 col-md-4">'+getArticleHTML(b[3])+"</div>";
a+='<div class="col-xs-12 col-md-4">'+getArticleHTML(b[4])+"</div>";
a+='<div class="col-xs-12 col-md-4">'+getArticleHTML(b[5])+"</div>";
a+=" </section></div></div></div>";
return a
}function getViewMoreText(){var a='<div class="row"><div class="col-xs-12"><div class="view-more"><a onclick="loadMoreArticles(this);" class="icon-link"><span class="icon bbva-coronita_add"></span> View more articles</a></div></div></div>';
return a
}if($("div.bbva-cards-editorial-alternate").length){$(window).data("ajaxready",true).scroll(function(b){if($(window).data("ajaxready")==false){return
}if($(window).scrollTop()>=$("div.bbva-cards-editorial-alternate:visible:last").offset().top+$("div.bbva-cards-editorial-alternate:visible:last").outerHeight()-window.innerHeight){$(window).data("ajaxready",false);
var a=$("div.bbva-cards-editorial-alternate:visible:last");
loadMoreArticles(a)
}})
}$(document).ready(function(){$(".vertical-tabs .nav-tabs").responsiveTabs({accordionOn:["xs","sm"]});
function b(c){var d='<span class="accordion-icons"><span class="icon bbva-coronita_plus-stag"></span><span class="icon bbva-coronita_minus-stag"></span>',f=$(".vertical-tabs .tab-content .accordion-link"),e=false,c=c;
if(c<769){$(f).append(d);
e=true
}else{if(e){$("accordion-icons").remove()
}}}var a=$(window).width();
b(a);
$(window).resize(function(){var c=$(window).width();
b(c)
})
});
$(document).ready(function(){$("#card-drawer .tab-pane img").click(function(){var d=$(this).attr("src");
var b=$(this).attr("cardid");
var c="Selected Card - "+$(this).attr("alt");
$(".chooseyourcard  img.card-selected").attr("src",d);
$(".chooseyourcard  img.card-selected").attr("cardid",b);
$(".chooseyourcard  img.card-selected").attr("alt",c);
LocalStorageUtil.setCachedItem("cardImg",d);
LocalStorageUtil.setCachedItem("cardid",b);
LocalStorageUtil.setCachedItem("cardalt",c);
UrlParams.addOAOApplicationParams({img1:b})
});
if(LocalStorageUtil.getCachedItem("cardImg")){$(".chooseyourcard  img.card-selected").attr("src",LocalStorageUtil.getCachedItem("cardImg"));
$(".chooseyourcard  img.card-selected").attr("cardid",LocalStorageUtil.getCachedItem("cardid"));
var a=LocalStorageUtil.getCachedItem("cardalt");
if(a&&(a!==undefined||a!=="")){$(".chooseyourcard  img.card-selected").attr("alt",LocalStorageUtil.getCachedItem("cardalt"))
}}if($("#card-drawer")[0]){$("#card-drawer .tab-content img").on("click",function(){$("#card-drawer").collapse("hide")
})
}});
$(document).ready(function(){var a={};
var b=$("#shopping-cart-continue");
a.productid=b.attr("data-productid");
UrlParams.addOAOApplicationParams(a);
$("#add-check").change(function(){if(this.checked){a.additional=b.attr("data-additional");
UrlParams.addOAOApplicationParams(a)
}else{b.attr("href",UrlParams.remove("additional",b.attr("href")))
}})
});
function captchaCallback(a){GoogleRecaptcha.captchaResponse=a;
PdfDownload.statusMsg("&nbsp;")
}function captchaExpiredCallback(a){GoogleRecaptcha.captchaResponse=null;
PdfDownload.statusMsg("&nbsp;")
}var PdfDownload={urls:{generatePdf:"/bin/pdf-from-webpage",emailPdf:"/bin/email-disclosure"},captchaResponse:null,captchaPublicKey:null,sendCountCookieName:"disclosurepdf.sends",formInputErrorClass:"error",emailFormSelector:"#email-disclosure form",downloadButtonSelector:".pdf-download",emailInputSelector:"#ctaEmailInput",emailSendButtonSelector:"#ctaSendEmail",emailTextBodySelector:"#ctaEmailTextbody",emailHtmlBodySelector:"#ctaEmailHtmlbody",emailSubjectSelector:"#ctaEmailSubject",msgIdSelector:"#msgId",defaultMsgId:"disclosurepdf",attachmentFilenameSelector:"#ctaEmailAttachmentFilename",statusSelector:"#ctaEmailStatusMsg",successStatus:"SUCCESS",spinnerElement:'<img src="/etc/designs/bbvacompass/images/spinners/spinner-pink-16px.gif" />',init:function(){GoogleRecaptcha.init();
var c=$(PdfDownload.downloadButtonSelector);
if(c&&c.length>0){c.attr("href",PdfDownload.getDownloadPageUrl())
}var b=$(PdfDownload.emailSendButtonSelector);
if(b&&b.length>0){b.on("click",PdfDownload.onEmailSendButtonClick)
}var a=$(PdfDownload.emailInputSelector);
if(a&&a.length>0){a.on("keyup",function(){PdfDownload.statusMsg("&nbsp;")
})
}return true
},getDownloadPageUrl:function(){return PdfDownload.getCurrentPageUrl()+"?download=true"
},getEmailPageUrl:function(){return window.url
},getCurrentPageUrl:function(){return document.location.href.split("?")[0]
},getCurrentPageUrlRootRelative:function(){var a=PdfDownload.getCurrentPageUrl();
if(a.charAt(0)==="/"){return a
}a=a.replace("http://").replace("https://");
a=a.substring(a.indexOf("/"),a.length);
return a
},onEmailSendButtonClick:function(){if(SendCount.isExceeded(PdfDownload.sendCountCookieName)){PdfDownload.showLockout()
}else{if(PdfDownload.validateEmailForm()){PdfDownload.doEmailSend()
}}},doEmailSend:function(){SendCount.incrementSendsThisSess(PdfDownload.sendCountCookieName);
var b=encodeURIComponent(PdfDownload.getCurrentPageUrlRootRelative());
var a=encodeURIComponent($(PdfDownload.emailInputSelector).val());
var c=$(PdfDownload.msgIdSelector).val();
if((!c)||(c.length<2)){c=PdfDownload.defaultMsgId
}$.ajax({url:PdfDownload.urls.emailPdf,success:PdfDownload.onEmailSendSuccess,data:"url="+b+"&email="+a+"&msgId="+c+"&g-recaptcha-response="+encodeURIComponent(GoogleRecaptcha.captchaResponse),error:PdfDownload.onEmailSendError,method:"POST"})
},onEmailSendSuccess:function(a){var b=a.status;
if(b&&b==PdfDownload.successStatus){PdfDownload.displaySuccessMessage()
}else{PdfDownload.displayFailMessage()
}grecaptcha.reset();
GoogleRecaptcha.captchaResponse=null
},onEmailSendError:function(a){console.log("email servlet  error");
console.log(a);
PdfDownload.displayFailMessage();
grecaptcha.reset();
GoogleRecaptcha.captchaResponse=null
},validateEmailForm:function(){var c=$(PdfDownload.emailFormSelector);
var a=$(PdfDownload.emailInputSelector);
var d=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var b=d.test(a.val());
if(!b){a.addClass("input-error");
PdfDownload.statusMsg("Please provide a valid email address.");
a.focus();
return false
}else{if(GoogleRecaptcha.captchaResponse==null||GoogleRecaptcha.captchaResponse.length<10){PdfDownload.statusMsg("Please confirm you are not a robot.");
return false
}else{a.removeClass("input-error");
PdfDownload.statusMsg(PdfDownload.spinnerElement+"&nbsp;Sending your document...");
return true
}}},displaySuccessMessage:function(){var a=$(PdfDownload.emailInputSelector);
a.val("");
PdfDownload.statusMsg("Your document has been sent.")
},displayFailMessage:function(){PdfDownload.statusMsg("Document send failed, please re-try.")
},statusMsg:function(b){var a=$(PdfDownload.statusSelector);
a.html(b)
},showLockout:function(){$(PdfDownload.statusSelector).html("This form is temporarily unavailable.")
}};
var SendCount={maxSendsPerSess:10,getNumSendsThisSess:function(b){var a=LocalStorageUtil.getCachedItem(b);
if(a){a=parseInt(a)
}else{a=0
}return a
},incrementSendsThisSess:function(b){var a=SendCount.getNumSendsThisSess(b);
a++;
LocalStorageUtil.setCachedItem(b,a)
},isExceeded:function(a){return(SendCount.getNumSendsThisSess(a)>=SendCount.maxSendsPerSess)
}};
if(typeof($)!="undefined"){$(document).ready(function(){PdfDownload.init();
$("#email-disclosure").on("shown.bs.modal",function(){var a=$(PdfDownload.emailInputSelector);
a.focus();
grecaptcha.render("g-captcha",{sitekey:GoogleRecaptcha.publicKey,theme:"light",callback:captchaCallback,"expired-callback":captchaExpiredCallback})
});
$("#email-disclosure").on("hidden.bs.modal",function(){var a=$(PdfDownload.emailInputSelector);
a.removeClass("input-error");
a.val("");
PdfDownload.statusMsg("&nbsp;");
GoogleRecaptcha.captchaResponse=null;
grecaptcha.reset()
})
})
}else{console.log("PdfDownload.init aborted - jQuery not available")
}if(typeof(uiconsole)==="undefined"||typeof(uiconsole.log)==="undefined"){var uiconsole={};
window.uiconsole=uiconsole;
uiconsole.log=function(){return false
};
uiconsole.error=function(){return false
}
}var CRMLog={LOG_LEVEL:"debug",init:function(){var a=UrlParams.get("logLevel");
if(a&&a.length>1){CRMLog.LOG_LEVEL=a
}},debug:function(b,a){if(CRMLog.LOG_LEVEL!=="debug"){return false
}CRMLog.log(b,a)
},warn:function(b,a){if((CRMLog.LOG_LEVEL!=="warn"||CRMLog.LOG_LEVEL!=="debug")){return false
}CRMLog.log(b,a)
},error:function(b,a){if((CRMLog.LOG_LEVEL!=="error"||CRMLog.LOG_LEVEL!=="debug"||CRMLog.LOG_LEVEL!=="warn")){return false
}CRMLog.log(b,a)
},log:function(c,b,a){console.log(c);
uiconsole.log(c);
if(b){console.log(b);
uiconsole.log(b)
}if(a){console.log(a);
uiconsole.log(a)
}}};
var $log=CRMLog;
var CRM={crmConfig:null,dispositionDemo:false,ajaxTimeout:(5*1000),ilBaseUrl:"https://olb.bbvacompass.com",ilContext:"/secure-il",applyInBranchUrl:"https://secure.bbvacompass.com/locations/",expiredPageURL:"/special.html",reservationCodePDFUrl:"/bin/bbvacompass/reservation-code-pdf",notQualifiedPageURL:"/special.html",paramReservationCode:"reservationCode",paramCampaignCode:"campaignCode",paramPlatform:"platform",paramAppVersion:"appVersion",applyOnlineUrl:null,applyOnlineUrl2:null,useApplyOnlineUrl2:false,applyByPhoneNumber:"",callbackParent:null,oaoData:false,copyCtaToTopOfPageForMobile:true,applyOnlineDetachedForMobile:false,currentChannel:"",crmConfig:null,startSessionInProgress:true,doApplyOnlineTimeout:null,doApplyOnline2Timeout:null,wasRedirectedHere:false,channelNameOnline:"online",channelNameMobile:"mobile",isCrmPath:(document.location.href.indexOf("/special/crm/")>-1),isMobileWebview:(document.location.href.indexOf("appVersion")>-1),hasCrmButtons:false,controller:false,keycodes:{backspace:8,del:46},init:function(){CRMLog.init();
if(CRMUtil.isEditMode()){CRMUtil.setupEditMode();
return false
}CRM.crmConfig=CRMUtil.getCrmConfig();
CRM.setApplyOnlineUrl();
CRM.setApplyOnlineUrl2();
CRM.initInputData();
CRM.setupILUrls();
CRMUtil.setupProofMode();
if(CRMUtil.isStageEnv()){CRM.ajaxTimeout=(10*1000)
}if(CRMMobile.isCRMMobileRequest()){CRMMobile.init();
$log.debug("CRM channel: Mobile")
}else{if(CRMOnline.isCRMOnlineRequest()){CRMOnline.init();
$log.debug("CRM channel: Online")
}else{if(CRMEmail.isCRMEmailRequest()){CRMEmail.init();
$log.debug("CRM channel: Email")
}else{CRMPapermail.init();
$log.debug("CRM channel: Papermail / OpenMarket")
}}}CRMReservationCode.init();
CRMUi.setupDetachedApplyOnlineButtonForMobile();
if(CRMUtil.pageHasCrmContainer()){if(CRMUi.makeCTAInvisible()){CRMUi.hideCTA()
}else{CRMUi.unhideCTA()
}CRMUi.setupCTAButtons()
}},inputData:null,inputDataFields:{campaignCode:null,activityCode:null,subchannelCode:null,sequenceNr:null,adLocation:null,expired:null,token:null,cif:null,nickname:null,agentCode:null,reservationCode:null,source:null,entityPk:null},initInputData:function(){var e=0;
var c=Object.keys(CRM.inputDataFields);
for(var a=0,b=c.length;
a<b;
a++){var d=UrlParams.get(c[a]);
if(!d){d=LocalStorageUtil.getCachedItem(c[a])
}if(d){if(!CRM.inputData){CRM.inputData={}
}CRM.inputData[c[a]]=d;
e++
}}if(CRM.inputData){CRM.fixInputData()
}if((CRM.crmConfig&&CRM.crmConfig.dispositionOnPageView)||(CRMDisposition.dispositionRedirectsImmediately===true&&CRMUtil.isRedirectDestination())){CRMDisposition.dispositionUponPageView=true
}CRM.setApplyByPhoneNumber(CRM.crmConfig.applyByPhoneNumber);
return e
},fixInputData:function(){if(CRM.inputData){if(!CRM.inputData.token){var a=UrlParams.get("ssot");
if(a&&a.length>0){CRM.inputData.token=a
}}if(!CRM.inputData.token){var a=UrlParams.get("oneTimeToken");
if(a&&a.length>0){CRM.inputData.token=a
}}if((!CRM.inputData.adLocation)||(CRM.inputData.adLocation.length<2)){CRM.inputData.adLocation="ACSU"
}if((CRM.inputData.source)&&(CRM.inputData.source==="SBA")){CRM.inputData.source="sba"
}}},selectors:{crmConfig:"#crm-config",crmContainer:".crm-disposition-buttons",crmMobileContainerOutermost:".crm-mobile-cta-outermost",crmContainerOutermost:".crm-disposition-buttons-outermost",crmCtaBtn:".crm-cta-button",mobileCtaConfig:".crm-mobile-cta-config",detachedApplyOnlineButtonOutermost:".crm-detached-apply-online-outermost",applyOnlineButtonDetached:".crm-apply-online-detached",applyOnlineButton:".crm-apply-online",applyOnlineButton2:".crm-apply-online2",applyInBranchButton:".crm-apply-in-branch",applyByPhoneButton:".crm-apply-by-phone",askLaterButton:".crm-ask-later",noInterestButton:".crm-no-interest",noInterestContainer:".crm-no-interest-container",responsesDropdown:".crm-responses-dropdown",crmMobile:".crm-mobile",crmOnline:".crm-online",prequalTrue:".crm-prequal-true",offerExpired:".crm-expired-offer-true",isEditMode:".wcm-edit",pdfEmailButton:"",emailOfferLinkButton:".crm-email-offer-link",emailOfferLinkContainer:".crm-email-offer-link-container",reservationCodeInput:".crm-reservation-code-input",reservationCodeContainer:".crm-reservation-code",reservationCodeSubmitBtn:".crm-reservation-code-submit",reservationCodeUserMsg:".crm-reservation-code-msg",reservationCodeErrorMsg:".crm-reservation-code-error-msg",reservationCodeFormGroup:".crm-reservation-code-form-group",reservationCodeDownloadButton:".crm-download-reservation",reservationCodeEmailButton:".crm-email-reservation",reservationCodeEmailModal:"#email-reservation-code-modal",reservationCodeValue:"#crm-reservation-code-value",ctaBtnCustomClasses:"#cta-btn-classes",imgBtn:".crm-image-button",ctaHeadline:".cta-headline"},oao:{urlPattern:".bbvacompass.com/apply",reservationParam:"reservationCode",channelCodeParam:"channelCode",platformParam:"platform",appVersionParam:"appVersion",channelMediumCodeParam:"channelMediumCode",channelServiceCodeParam:"channelServiceCode",subchannelCodeParam:"subchannelCode"},getApplyOnlineUrl:function(){try{if((!CRM.useApplyOnlineUrl2)&&CRM.applyOnlineUrl===null){return null
}else{if((CRM.useApplyOnlineUrl2)&&CRM.applyOnlineUrl2===null){return null
}}var e=CRMReservationCode.getReservationCode();
var c=(CRM.useApplyOnlineUrl2)?CRM.applyOnlineUrl2:CRM.applyOnlineUrl;
var a=(CRM.useApplyOnlineUrl2)?"applyOnlineUrl2":"applyOnlineUrl";
if(e&&e.length>2&&CRMUtil.isReservationCodeProduct()){CRM[a]=CRMReservationCode.addReservationCodeToUrl(c,e,CRM.oaoData);
c=CRMReservationCode.addReservationCodeToUrl(c,e,CRM.oaoData)
}c=CRMUtil.addPlatformFlagToUrl(c);
c=CRMUtil.addAppVersionToUrl(c);
if(CRMUtil.isStageEnv()){if(CRM.currentChannel==CRM.channelNameOnline||CRM.currentChannel==CRM.channelNameMobile){if(c.indexOf("online.bbvacompass.com")>-1){c=c.replace("online.bbvacompass.com","monarchqa2.bbvacompass.com")
}}}var b=UrlParams.get("oaoPro");
if(b&&b.length&&b.length>0){if(CRMUtil.isOAOUrl(c)){c=UrlParams.set("oaoPro",b,c)
}}return c
}catch(d){$log.error("Error getting crm apply online url: ",d);
var c=(CRM.useApplyOnlineUrl2)?CRM.applyOnlineUrl2:CRM.applyOnlineUrl;
return c
}},getApplyOnlineClosure:function(a){var b=function(){CRM.useApplyOnlineUrl2=false;
CRM.applyOnlineUrl=a;
CRM.controller.doApplyOnline()
};
return b
},getApplyByPhoneClosure:function(a){var b=function(){CRM.setApplyByPhoneNumber(a);
CRM.controller.doApplyByPhone()
};
return b
},getFindABranchClosure:function(){var a=function(){CRM.controller.doGoToBranch()
};
return a
},getApplyOnline2Closure:function(a){var b=function(){CRM.useApplyOnlineUrl2=true;
CRM.applyOnlineUrl2=a;
CRM.controller.doApplyOnline2()
};
return b
},setApplyOnlineUrl:function(a){if(a&&a.length>0){CRM.applyOnlineUrl=a
}else{if(CRM.crmConfig&&CRM.crmConfig.applyOnlineUrl&&CRM.crmConfig.applyOnlineUrl.length>3){CRM.applyOnlineUrl=CRM.crmConfig.applyOnlineUrl
}}},setApplyOnlineUrl2:function(a){if(a&&a.length>0){CRM.applyOnlineUrl2=a
}else{if(CRM.crmConfig&&CRM.crmConfig.applyOnlineUrl2&&CRM.crmConfig.applyOnlineUrl2.length>3){CRM.applyOnlineUrl2=CRM.crmConfig.applyOnlineUrl2
}}},getILBaseUrl:function(){var b=CRM.crmConfig.ilBaseUrl;
var a=(b&&b.length>0)?b:CRM.ilBaseUrl;
return a
},getILContext:function(){var b=CRM.crmConfig.ilContext;
var a=(b&&b.length>0)?b:CRM.ilBaseUrl;
return a
},getILUrlFromCookie:function(){try{var g=LocalStorageUtil.getCachedItem("crm.il.url");
var a=null;
if(g&&g.length>5&&g.indexOf("http")>-1){var f=g.split("//");
var h=f[0];
var d=f[1];
var e=d.split("/")[0];
var b=d.split("/")[1];
a={ilBaseUrl:h+"//"+e,ilContext:"/"+b}
}return a
}catch(c){$log.error("Error getting IL url from cookie: ",c);
return null
}},setupILUrls:function(){var b=CRM.getILUrlFromCookie();
if(null!=b){CRM.ilBaseUrl=b.ilBaseUrl;
CRM.ilContext=b.ilContext
}else{var c=CRM.getILBaseUrl();
var a=CRM.getILContext();
if((c&&c.length>0)&&(a&&a.length>0)){c=(c.charAt(c.length-1)==="/")?c.slice(0,-1):c;
CRM.ilBaseUrl=c;
CRM.ilContext=a
}}},setApplyByPhoneNumber:function(a){if(a&&a.length>5){CRM.applyByPhoneNumber=a.replace(/[^0-9a-z]/gi,"");
return true
}var c="";
var b=$(CRM.selectors.applyByPhoneButton);
if(b&&b.length>0){c=b.attr("data-phone");
if(c&&c.length>0){CRM.applyByPhoneNumber=c.replace(/[^0-9a-z]/gi,"")
}}}};
var CRMUtil={getContentIdFromUrl:function(){var a=document.location.href;
var b=a.substring(a.lastIndexOf("/")+1,a.lastIndexOf("."));
return b
},getKeyCode:function(a){var b=(a)?(a.keyCode||a.charCode):null;
return(b)?b:null
},getCrmConfig:function(){var a=$(CRM.selectors.crmConfig);
if(a&&a.length>0){var d=[];
d.dispositionOnPageView=a.attr("data-dispositionOnPageView");
d.makeCtaInvisible=a.attr("data-makeCtaInvisible");
d.enableApplyOnlineDisposition=a.attr("data-enableApplyOnlineDisposition");
d.enableApplyByPhoneDisposition=a.attr("data-enableApplyByPhoneDisposition");
d.enableFindABranchDisposition=a.attr("data-enableFindABranchDisposition");
d.applyOnlineUrl=a.attr("data-applyOnlineUrl");
d.applyOnlineButtonText=a.attr("data-applyOnlineButtonText");
d.applyOnlineUrl2=a.attr("data-applyOnlineUrl2");
d.applyOnline2ButtonText=a.attr("data-applyOnline2ButtonText");
d.applyByPhoneNumber=a.attr("data-applyByPhoneNumber");
d.ctaButtonClasses=a.attr("data-ctaButtonClasses");
d.ilBaseUrl=a.attr("data-ilBaseUrl");
d.ilContext=a.attr("data-ilContext");
return d
}else{if(CRMUtil.isRedirectDestination()||CRMUtil.isDeepLinkDestination()){if(LocalStorageUtil.getCachedItem("crm.config")){try{var b=atob(LocalStorageUtil.getCachedItem("crm.config"));
b=b.replace(new RegExp('"true"',"g"),"true");
b=b.replace(new RegExp('"false"',"g"),"false");
var d=JSON.parse(b);
return d
}catch(c){$log.error(c)
}}}}var d=[];
d.dispositionOnPageView=false;
d.makeCtaInvisible=false;
d.enableApplyOnlineDisposition=false;
d.enableApplyByPhoneDisposition=false;
d.enableFindABranchDisposition=false;
d.applyOnlineButtonText="Apply Now";
d.applyOnline2ButtonText="";
d.ctaButtonClasses="btn-aqua";
d.applyByPhoneNumber="18002667277";
d.ilBaseUrl=CRM.ilBaseUrl;
d.ilContext=CRM.ilContext;
return d
},deleteCRMCookies:function(b){try{var a=["crm.landingPageRedirect","nickname","oneTimeToken","token","platform","crm.bannerClickTimestamp","reservationCode","source","sourceApplication","subchannelCode","channelCode","channelMediumCode","channelServiceCode","campaignCode","adLocation","activityCode","cif","platform","expired","sequenceNr"];
if(!b){b=a
}for(var c=0,d=b.length;
c<d;
c++){LocalStorageUtil.deleteCachedItem(b[c])
}return true
}catch(e){return false
}},fmtPhone:function(a){var b="";
a=a.replace(/[^0-9a-z]/gi,"");
if(a.length>10){b=a.charAt(0)+"-";
a=a.substring(1,11)
}a=b+a.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3");
return a
},isOAOUrl:function(c){var d="online.bbvacompass.com/apply";
var b="onlinepre.bbvacompass.com/apply";
var a="monarchqa2.bbvacompass.com/apply";
return(c&&c.length>0&&(c.indexOf(d)>-1||c.indexOf(a)>-1||c.indexOf(b)>-1))
},isReservationCodeProduct:function(d){var f=[".bbvacompass.com"];
for(var b=0,c=f.length;
b<c;
b++){var e=f[b];
var a=(CRM.useApplyOnlineUrl2)?CRM.applyOnlineUrl2:CRM.applyOnlineUrl;
if(d&&d.length>0){a=d
}if(a&&a.indexOf(e)>-1){return true
}}return false
},removeCrmOnlineContent:function(){try{$(".sign-in").hide();
$(".apply").hide();
$(".search-trigger").hide();
$(".bbva-coronita_return").parent().hide();
$(".navbar-toggle").hide()
}catch(a){}},getSecondsSinceBannerClick:function(){try{var d=parseInt(Date.now());
var c=LocalStorageUtil.getCachedItem("crm.bannerClickTimestamp");
if(c&&c.length>0){c=parseInt(c);
var a=parseInt((d-c)/1000);
return a
}return 0
}catch(b){return 0
}},getMinutesSinceBannerClick:function(){var a=CRMUtil.getSecondsSinceBannerClick();
var b=0;
if(a>0){b=parseInt(a/60)
}return b
},addPlatformFlagToUrl:function(b,c){var a=(c)?c:UrlParams.get("platform");
if(a&&a.length>0){b=UrlParams.set("platform",a,b)
}return b
},addAppVersionToUrl:function(c,b){var a=(b)?b:UrlParams.get("appVersion");
if(a&&a.length>0){c=UrlParams.set("appVersion",a,c)
}return c
},pageHasCrmContainer:function(){var a=$(CRM.selectors.crmContainer);
return(a&&a.length>0)
},pageHasReservationCodeInput:function(){var a=$(CRM.selectors.reservationCodeInput);
return(a&&a.length>0)
},isStageEnv:function(){var a=false;
if(document.location.href.indexOf("adobecqms")>-1||document.location.href.indexOf("preview")>-1){a=true
}return a
},isLocalEnv:function(){return(document.location.href.indexOf("localhost")>-1)
},isEditMode:function(){return($(CRM.selectors.isEditMode).length>0)
},setupEditMode:function(){var a=$(CRM.selectors.applyOnlineButton);
$(CRM.selectors.emailOfferLinkContainer).removeClass("hidden");
CRMUi.unhideNoInterestAskLater();
CRMUi.unhideCrmContainer();
return false
},oaoLinksOutsideCta:null,getAllOAOLinksOutsideCRMCta:function(){var b=[];
var c="online.bbvacompass.com/apply";
var a='a[href*="'+c+'"]';
$(a).each(function(e,f){var g=$(this);
var d=g.hasClass("crm-cta-button");
if((!d)&&(g.closest(".crm-disposition-buttons").length<1)&&(g.closest(".crm-mobile-disposition-buttons-outermost").length<1)){b.push(g)
}});
if(b.length>0){CRMUtil.oaoLinksOutsideCta=b;
return b
}return null
},telLinks:null,getAllTelLinks:function(){var b=[];
var c="tel:";
var a='a[href*="'+c+'"]';
$(a).each(function(d,e){var f=$(this);
b.push(f)
});
if(b.length>0){CRMUtil.telLinks=b;
return b
}return null
},findBranchLinks:null,getAllFindABranchLinks:function(){var b=[];
var c="secure.bbvacompass.com/locations";
var a='a[href*="'+c+'"]';
$(a).each(function(d,e){var f=$(this);
b.push(f)
});
if(b.length>0){CRMUtil.findBranchLinks=b;
return b
}return null
},setupProofMode:function(){var a=UrlParams.get("proof");
if((a)&&(a==="true"||a==="1")){CRM.ajaxTimeout=100
}},isRedirectDestination:function(){var a=document.location.href.replace("http://","").replace("https://","");
if(a.indexOf("?")>-1){a=a.split("?")[0]
}var b=LocalStorageUtil.getCachedItem("crm.landingPageRedirect");
if(b){b=b.replace("http://","").replace("https://","")
}if(b&&b.indexOf("?")>-1){b=b.split("?")[0]
}var c=(b&&a.indexOf(b)>-1);
if(c){}return c
},isDeepLinkDestination:function(){var c=CRMUtil.isRedirectDestination();
var a=CRMUtil.isStandardLpLocation();
var b=((!c)&&(!a));
if(b){}return b
},isStandardLpLocation:function(){return(document.location.href.indexOf("/special/crm")>-1)
},getILSessCookie:function(){var a=LocalStorageUtil.getCachedItem(CRMSso.sessTokenCookieName);
if(a&&a.length>3){return a
}return null
},setILSessCookie:function(a){if(a&&a.length>3){var b={html5:true};
LocalStorageUtil.setCachedItem(CRMSso.sessTokenCookieName,a,b)
}},deleteILSessCookie:function(){LocalStorageUtil.setCachedItem(CRMSso.sessTokenCookieName,"0")
},deleteSSOAuthCookies:function(b){try{var a=["token"];
if(!b){b=a
}for(var c=0,d=b.length;
c<d;
c++){LocalStorageUtil.deleteCachedItem(b[c])
}return true
}catch(e){return false
}}};
var CRMUi={disableAskLaterNotInterestedButtons:true,setupCTAButtons:function(){CRMUi.setupApplyOnlineButton();
CRMUi.setupApplyOnlineButton2();
CRMUi.setupAskLaterNoInterestButtons();
CRMUi.setupApplyByPhoneButton();
CRMUi.setupEmailRescodeButton();
CRMUi.setupFindABranchButton()
},setupApplyOnlineButton:function(){var b=$(CRM.selectors.applyOnlineButton);
if(b&&b.length>0){var a=CRM.applyOnlineUrl.toString();
b.on("click",CRM.getApplyOnlineClosure(a));
b.attr("href","javascript:;")
}},setupApplyOnlineButton2:function(){var a=$(CRM.selectors.applyOnlineButton2);
if(a&&a.length>0){if(CRM.applyOnlineUrl2&&CRM.applyOnlineUrl2.length>3){a.on("click",CRM.getApplyOnline2Closure(CRM.applyOnlineUrl2));
a.attr("href","javascript:;")
}}},setupAskLaterNoInterestButtons:function(){var b=$(CRM.selectors.askLaterButton);
if(b&&b.length>0){b.on("click",CRM.controller.doAskLater)
}var a=$(CRM.selectors.noInterestButton);
if(a&&a.length>0){a.on("click",CRM.controller.doNotInterested)
}},setupApplyByPhoneButton:function(){var a=$(CRM.selectors.applyByPhoneButton);
if(a&&a.length>0){CRM.setApplyByPhoneNumber();
CRMOnline.applyByPhoneModalId=a.attr("modalObjId");
CRMOnline.applyByPhoneModalContentId=a.attr("modalContentId");
CRMOnline.applyByPhoneModalContentUrl=a.attr("modalUrl");
a.on("click",CRM.controller.doApplyByPhone)
}},setupEmailRescodeButton:function(){var a=$(CRM.selectors.reservationCodeEmailButton);
if(a&&a.length>0){a.on("click",CRM.controller.doEmailReservationCode)
}},setupFindABranchButton:function(){var a=$(CRM.selectors.applyInBranchButton);
if(a&&a.length>0){a.on("click",CRM.controller.doGoToBranch)
}},makeCTAInvisible:function(){var a=(CRM.crmConfig&&CRM.crmConfig.makeCtaInvisible&&CRM.crmConfig.makeCtaInvisible=="true");
return a
},hideCTA:function(){CRMUi.hideCrmContainer()
},unhideCTA:function(){CRMUi.unhideNoInterestAskLater();
CRMUi.unhideCrmContainer()
},hideNoInterestAskLater:function(){$(CRM.selectors.noInterestContainer).remove()
},unhideNoInterestAskLater:function(){if(CRMUi.disableAskLaterNotInterestedButtons===true){return false
}$(CRM.selectors.noInterestContainer).css({visibility:"visible"})
},unhideCrmContainer:function(){$(CRM.selectors.crmContainer).css("visibility","visible")
},hideCrmContainer:function(){$(CRM.selectors.crmContainerOutermost).hide();
$(CRM.selectors.crmContainer).hide()
},hideElementsForMobile:function(){$(".sign-in").remove();
$("#header-sign-in-mobile").remove();
$(".navbar-toggle").remove();
if(MobileBanking.isWebview()){$(".navbar-header").hide()
}},hideApplyOnline:function(){var b=$(CRM.selectors.applyOnlineButton);
if(b&&b.attr("url")){var a=b.attr("url");
if((!CRM.applyOnlineUrl)||(CRM.applyOnlineUrl.length<5)){CRM.applyOnlineUrl=a
}}$(CRM.selectors.applyOnlineButton).remove()
},copyCtaToTopForMobile:function(){var a=$(CRM.selectors.crmContainerOutermost);
var b=$(CRM.selectors.crmMobileContainerOutermost);
if(a.length>0&&b.length>0){b.html(a.html());
a.remove()
}},convertRegularLinksToCrm:function(){var d=CRMUtil.getAllOAOLinksOutsideCRMCta();
if(d&&d.length>0){for(var b=0,c=d.length;
b<c;
b++){var e=d[b];
var a=e.attr("href");
e.attr("href","javascript:;");
e.attr("target","_self");
e.on("click",CRM.getApplyOnlineClosure(a))
}}},convertTelLinksToCrm:function(){var d=CRMUtil.getAllTelLinks();
if(d&&d.length>0){for(var b=0,c=d.length;
b<c;
b++){var e=d[b];
var a=e.attr("href");
a=a.replace("tel:","");
CRM.setApplyByPhoneNumber(a);
if(CRMMobile.isEnabled){e.attr("href","javascript:;")
}e.on("click",CRM.getApplyByPhoneClosure())
}}},convertFindABranchLinksToCrm:function(){var c=CRMUtil.getAllFindABranchLinks();
if(c&&c.length>0){for(var a=0,b=c.length;
a<b;
a++){var d=c[a];
if(CRMMobile.isEnabled){d.attr("href","javascript:;")
}d.on("click",CRM.getFindABranchClosure())
}}},addRescodeToOAOLinks:function(e){var f=UrlParams.get("reservationCode");
if(f&&f.length>3){var d=CRMUtil.getAllOAOLinksOutsideCRMCta();
if(d&&d.length>0){for(var b=0,c=d.length;
b<c;
b++){var g=d[b];
var a=g.attr("href");
if(CRMUtil.isReservationCodeProduct(a)){if(!e){e=CRMEmail.oao
}a=CRMReservationCode.addReservationCodeToUrl(a,f,e);
g.attr("href",a)
}}}}},setupDetachedApplyOnlineButtonForMobile:function(){var e=$(CRM.selectors.applyOnlineButtonDetached);
if(e&&e.length>0){var a=$(CRM.selectors.detachedApplyOnlineButtonOutermost);
if(CRMUtil.pageHasCrmContainer()){e.text(CRM.crmConfig.applyOnlineButtonText);
e.on("click",CRM.getApplyOnlineClosure(CRM.applyOnlineUrl));
var d=CRM.crmConfig.ctaButtonClasses;
if(d&&d.length>0){e.addClass(d)
}e.attr("href","javascript:;")
}else{var f=CRM.crmConfig.applyOnlineButtonText;
var c=null;
var d=CRM.crmConfig.ctaButtonClasses;
var b=false;
if(typeof(crmMobileApplyButtonConfig)!="undefined"){f=crmMobileApplyButtonConfig.applyOnlineButtonText;
d=crmMobileApplyButtonConfig.ctaButtonClasses;
c=crmMobileApplyButtonConfig.applyOnlineUrl;
b=crmMobileApplyButtonConfig.showForAllMobilePhones
}e.text(f);
if(d&&d.length>0){e.addClass(d)
}e.on("click",CRM.getApplyOnlineClosure(c));
e.attr("href","javascript:;")
}if(CRMMobile.isEnabled||(b&&MobileBanking.isTouchDevice())){a.removeClass("hidden")
}}}};
var CRMDisposition={sendDispositionURL:"/api/marketing/leads/update",callbackParent:null,dispositionUponPageView:false,disableDispositioning:false,disableApplyOnlineDisposition:true,disableApplyByPhoneDisposition:true,disableFindABranchDisposition:true,disableNoActionDisposition:true,dispositionRedirectsImmediately:false,adToken:null,dispositionResponseCodes:{applyOnline:"0001",emailRescode:"0007",downloadRescode:"0001",goToBranch:"0002",applyByPhone:"0003",noInterest:"0004",askLater:"0005",noAction:"0006",pageViewed:"0005",emailOfferLink:"0007"},sendDisposition:function(c,b){CRMDisposition.dispositionRequestBody.responseCode=c;
if(CRMUtil.isStageEnv()){CRMDisposition.disableDispositioning=true
}if(CRMDisposition.disableDispositioning){$log.debug("All dispositions are disabled");
if(b){b.call()
}}else{if(CRMDisposition.dispositionDataReady()){if(CRMDisposition.disableApplyOnlineDisposition===true&&c==CRMDisposition.dispositionResponseCodes.applyOnline){$log.debug("Apply online disposition is disabled");
if(b){b.call()
}return
}else{if(CRMDisposition.disableApplyByPhoneDisposition===true&&c==CRMDisposition.dispositionResponseCodes.applyByPhone){$log.debug("Apply by phone disposition is disabled");
if(b){b.call()
}return
}else{if(CRMDisposition.disableFindABranchDisposition===true&&c==CRMDisposition.dispositionResponseCodes.goToBranch){$log.debug("Find a branch disposition is disabled");
if(b){b.call()
}return
}}}var a=false;
if(c==CRMDisposition.dispositionResponseCodes.noAction){CRM.ajaxTimeout=500;
a=true
}var d=true;
if((a)&&(CRMDisposition.disableNoActionDisposition)){if(b){b.call()
}}else{if(a){d=false
}$.ajax({url:CRMDisposition.getDispositionURL(),cache:false,dataType:"json",contentType:"application/json; charset=utf-8",data:CRMDisposition.getDispositionRequestBody(),type:"POST",async:d,crossDomain:true,headers:{Session:CRMSso.sessToken},timeout:CRM.ajaxTimeout}).done(function(f,e,g){$log.debug("Disposition call completed",f);
if(b){b.call(f,e,g)
}}).fail(function(f,e,g){if(b){b.call(f,e,g)
}})
}}else{if(b){b.call()
}}}},dispositionRequestBody:{campaignCode:"",activityCode:"",responseCode:"",subchannelCode:"",sequenceNr:"",adLocation:"",agentCode:"0"},getDispositionRequestBody:function(){var b="";
for(var a in CRM.inputData){if(CRMDisposition.dispositionRequestBody.hasOwnProperty(a)){var c=CRM.inputData[a];
if(null!==c){CRMDisposition.dispositionRequestBody[a]=c
}}}return JSON.stringify(CRMDisposition.dispositionRequestBody)
},getDispositionURL:function(){var a=CRM.ilBaseUrl+CRM.ilContext+CRMDisposition.sendDispositionURL;
if(document.location.href.indexOf("localhost")>-1){a+="/"
}return a
},dispositionDataReady:function(){var a=(CRM.inputData&&CRM.inputData.campaignCode&&CRM.inputData.activityCode&&CRM.inputData.sequenceNr&&CRMSso.sessToken&&CRMSso.sessToken.length>0);
return a
},setupDispositionsByConfig:function(b){var a=(b)?b:CRM.crmConfig;
if(null!=a){if(a.enableApplyOnlineDisposition===true){CRMDisposition.disableApplyOnlineDisposition=false
}if(a.enableApplyByPhoneDisposition===true){CRMDisposition.disableApplyByPhoneDisposition=false
}if(a.enableFindABranchDisposition===true){CRMDisposition.disableFindABranchDisposition=false
}if(a.dispositionOnPageView===true){CRMDisposition.dispositionUponPageView=true
}}}};
var CRMSso={getTokenUrl:"/api/sso/onetimetoken/request",authTokenUrl:"/api/sso/onetimetoken/authenticate",ssoDomain:".bbvacompass.com/apply",container:null,ssoData:null,oneTimeToken:null,ssoSource:null,sessToken:null,sessTokenCookieName:"crm.il.sess",authenticateTokenInProgress:false,isSsoDestination:function(a){var c=((a)&&(a.indexOf("apply/loan")>-1)&&(a.indexOf("productid=HLOC")>-1||a.indexOf("productid=HLOA")>-1));
if(c){return false
}var e=[".bbvacompass.com"];
for(var b=0,d=e.length;
b<d;
b++){if(a.indexOf(e[b])>-1){return true
}}return false
},oneTimeTokenRequestBody:{entityPK:"",destination:"oao"},getOneTimeTokenRequestBody:function(){CRMSso.oneTimeTokenRequestBody.entityPK=":"+CRM.inputData.nickname;
return JSON.stringify(CRMSso.oneTimeTokenRequestBody)
},getOneTimeToken:function(c,b){var a=CRM.getApplyOnlineUrl();
var d=false;
if(a&&a.length>0){d=CRMSso.getOneTimeTokenSsoIsReady(a)
}else{d=CRMSso.getOneTimeTokenSsoIsReady()
}if(d){$.ajax({url:CRMSso.getOneTimeTokenURL(),cache:false,dataType:"json",type:"POST",contentType:"application/json",crossDomain:true,data:CRMSso.getOneTimeTokenRequestBody(),headers:{Session:CRMSso.sessToken,Accept:"application/json"},timeout:CRM.ajaxTimeout}).done((c)?c:CRMSso.getOneTimeTokenComplete).fail((b)?b:CRMSso.getOneTimeTokenFail)
}else{CRMSso.getOneTimeTokenCancelled()
}},getOneTimeTokenComplete:function(e,d,h){var g=(CRM.inputData.source)?CRM.inputData.source:"sba";
if(e&&e.oneTimeToken&&e.oneTimeToken.length>0){var f=CRM.getApplyOnlineUrl();
f=UrlParams.set("source",g,f);
f=UrlParams.set("oneTimeToken",e.oneTimeToken,f);
CRMUtil.deleteCRMCookies();
document.location.href=f
}else{CRMSso.getOneTimeTokenFail(e,d,h)
}},getOneTimeTokenFail:function(e,d,f){$log.error("Get SSO token failed ",e);
CRMUtil.deleteCRMCookies();
document.location.href=CRM.getApplyOnlineUrl()
},getOneTimeTokenCancelled:function(e,d,f){$log.debug("Get SSO token: Cancelled ");
CRMUtil.deleteCRMCookies();
document.location.href=CRM.getApplyOnlineUrl()
},getOneTimeTokenURL:function(){var a=CRM.ilBaseUrl+CRM.ilContext+CRMSso.getTokenUrl;
if(document.location.href.indexOf("localhost")>-1){a+="/"
}return a
},getOneTimeTokenDataReady:function(){var a=(CRM.inputData&&CRM.inputData.nickname&&CRM.inputData.nickname.length>0&&CRMSso.sessToken&&CRMSso.sessToken.length>0);
return a
},getOneTimeTokenSsoIsReady:function(a){var b=(a&&a.length>0)?(CRMSso.getOneTimeTokenDataReady()&&CRMSso.isSsoDestination(a)):(CRMSso.getOneTimeTokenDataReady());
return b
},getAuthenticateTokenRequestBody:function(){if(CRM.inputData&&CRM.inputData.token){CRMSso.authenticateTokenRequestBody.oneTimeToken=CRM.inputData.token;
return JSON.stringify(CRMSso.authenticateTokenRequestBody)
}return""
},authenticateTokenRequestBody:{oneTimeToken:"",application:"sba"},authenticateToken:function(){var a=false;
if(CRMUtil.isDeepLinkDestination()){a=CRMUtil.getILSessCookie()
}if(a){var b={token:a};
CRMSso.authenticateTokenDone(b);
return true
}else{if(!CRMSso.authenticateTokenDataReady()){CRMSso.authenticateTokenCancelled();
return false
}else{CRMSso.authenticateTokenInProgress=true;
$.ajax({url:CRMSso.getAuthenticateTokenURL(),contentType:"application/json; charset=utf-8",type:"POST",crossDomain:true,dataType:"json",data:CRMSso.getAuthenticateTokenRequestBody(),timeout:CRM.ajaxTimeout}).done(CRMSso.authenticateTokenDone).fail(CRMSso.authenticateTokenFail)
}}},authenticateTokenDone:function(e,d,f){CRMSso.authenticateTokenInProgress=false;
if(e&&e.token&&e.token.length>3){CRMSso.sessToken=e.token;
if(CRMUtil.isRedirectDestination()){CRMUtil.setILSessCookie(e.token)
}else{CRMUtil.deleteILSessCookie()
}CRMUi.convertRegularLinksToCrm();
if(CRMMobile.isEnabled){CRMUi.convertTelLinksToCrm();
CRMUi.convertFindABranchLinksToCrm()
}if(CRM.inputData.token){CRM.inputData.token=null
}CRMUtil.deleteSSOAuthCookies()
}else{if(CRMMobile.isEnabled&&CRMUtil.isStageEnv()){alert((e)?"Token error[1]\n\n"+JSON.stringify(e):"Token error[1]")
}}if(CRMDisposition.dispositionUponPageView){CRM.controller.doPageViewed()
}},authenticateTokenFail:function(e,d,f){CRMSso.authenticateTokenInProgress=false;
if(CRMMobile.isEnabled&&CRMUtil.isStageEnv()){alert("Token error[2]")
}return false
},authenticateTokenCancelled:function(e,d,f){$log.debug("Authenticate token call cancelled ");
CRMSso.authenticateTokenInProgress=false;
return false
},authenticateTokenDataReady:function(){var a=(CRM.inputData&&CRM.inputData.token&&CRM.inputData.token.length>5);
return a
},getAuthenticateTokenURL:function(){var a=CRM.ilBaseUrl+CRM.ilContext+CRMSso.authTokenUrl;
if(document.location.href.indexOf("localhost")>-1){a+="/"
}return a
}};
var CRMOnline={oao:{channelCode:"4",channelMediumCode:"7",channelServiceCode:"48",subchannelCode:"0"},isEnabled:false,applyByPhoneModalId:null,applyByPhoneModalContentId:null,applyByPhoneModalContentUrl:null,init:function(){CRM.callbackParent="CRMOnline";
CRM.controller=CRMOnline;
CRM.oaoData=CRMOnline.oao;
CRM.currentChannel=CRM.channelNameOnline;
CRMOnline.isEnabled=true;
CRMDisposition.setupDispositionsByConfig();
CRMSso.authenticateToken()
},doApplyOnline:function(){if((CRMSso.authenticateTokenInProgress===true)&&(CRM.applyOnlineWaits<1)){CRM.doApplyOnlineTimeout=setTimeout(function(){CRMOnline.doApplyOnline()
},500)
}else{CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyOnline);
CRMSso.getOneTimeToken()
}},doApplyOnline2:function(){if((CRMSso.authenticateTokenInProgress===true)&&(CRM.applyOnlineWaits<1)){CRM.doApplyOnlineTimeout=setTimeout(function(){CRMOnline.doApplyOnline2()
},500)
}else{CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyOnline);
CRMSso.getOneTimeToken()
}},doApplyByPhone:function(a){CRMOnline.openApplyByPhoneModal();
CRMDisposition.cancelNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyByPhone,CRMOnline.dispositionPhoneComplete)
},doEmailReservationCode:function(a){CRMOnline.openEmailReservationCodeModal();
CRMDisposition.cancelNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.emailRescode,CRMOnline.dispositionEmailRescodeComplete)
},doGoToBranch:function(a){CRMDisposition.cancelNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.goToBranch,CRMOnline.dispositionBranchComplete)
},doAskLater:function(a){CRMDisposition.cancelNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.askLater,CRMOnline.dispositionAskLaterComplete)
},doNotInterested:function(a){CRMDisposition.cancelNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.noInterest,CRMOnline.dispositionNoInterestComplete)
},doNoAction:function(a){CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.noAction,CRMOnline.dispositionNoActionComplete)
},doPageViewed:function(a){CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.pageViewed,CRMOnline.dispositionPageViewedComplete)
},dispositionOnlineComplete:function(e,d,f){$log.debug("Apply Online disposition complete",e)
},dispositionBranchComplete:function(e,d,f){$log.debug("Find a Branch disposition complete",e);
document.location.href=CRM.applyInBranchUrl
},dispositionPhoneComplete:function(e,d,f){$log.debug("Apply By Phone disposition complete",e)
},dispositionEmailRescodeComplete:function(e,d,f){$log.debug("Email Reservation Code disposition complete",e)
},dispositionDownloadRescodeComplete:function(e,d,f){$log.debug("Download Reservation Code disposition complete",e)
},dispositionNoInterestComplete:function(e,d,f){$log.debug("Not Interested disposition complete",e);
CRMOnline.closeWindow()
},dispositionNoActionComplete:function(e,d,f){$log.debug("No Action disposition complete",e)
},dispositionPageViewedComplete:function(e,d,f){$log.debug("Page viewed disposition complete",e)
},dispositionAskLaterComplete:function(e,d,f){$log.debug("Ask Later disposition complete",e);
CRMOnline.closeWindow()
},closeWindow:function(){window.open("","_self").close()
},openApplyByPhoneModal:function(){if(!CRMOnline.applyByPhoneModalId){return false
}var a=$("#"+CRMOnline.applyByPhoneModalId);
if(a&&a.length>0){a.on("hidden.bs.modal",function(){var b=$(CRM.selectors.responsesDropdown);
b.val($("option:first",b).val())
});
a.modal();
$("#"+CRMOnline.applyByPhoneModalContentId).load(CRMOnline.applyByPhoneModalContentUrl)
}},openEmailReservationCodeModal:function(){var a=$(CRM.selectors.reservationCodeEmailModal);
a.modal()
},isCRMOnlineRequest:function(){var a=LocalStorageUtil.getCachedItem("platform");
var e=(document.location.href.indexOf("?wcmmode=disabled")>-1);
var d=((!e)&&document.location.href.indexOf("?")>-1);
var c=(a&&(a==="online"||a==="olb")&&(!d));
if(c){var f=CRMUtil.getMinutesSinceBannerClick();
var b=(f>20);
if(b){c=false;
$log.debug("CRM Online data present, but session is expired")
}}return c
}};
var CRMMobile={oao:{channelCode:"4",channelMediumCode:"6",channelServiceCode:"49",subchannelCode:"0"},isEnabled:false,platformMobile:"mobil",init:function(){CRM.callbackParent="CRMMobile";
CRM.controller=CRMMobile;
CRM.currentChannel=CRM.channelNameMobile;
CRM.oaoData=CRMMobile.oao;
CRMMobile.isEnabled=true;
CRMUi.hideElementsForMobile();
CRMUtil.removeCrmOnlineContent();
CRMDisposition.setupDispositionsByConfig();
CRMSso.authenticateToken()
},doNativeAppAction:function(b,a){CRMMobile.doCustomProtocolRequest(b,a);
$log.debug("mobile app action: code="+b+" location="+a)
},doCustomProtocolRequest:function(c,a){var b="bbvacompass://crm/?responseCode="+c;
if(a&&a.length>0){a=encodeURIComponent(a);
b+="&location="+a
}document.location.href=b
},doApplyOnline:function(){Spinner.show();
clearTimeout(CRM.doApplyOnlineTimeout);
if((CRMSso.authenticateTokenInProgress===true)){CRM.doApplyOnlineTimeout=setTimeout(function(){CRMMobile.doApplyOnline()
},500)
}else{CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyOnline);
CRMSso.getOneTimeToken()
}},doApplyOnline2:function(){Spinner.show();
clearTimeout(CRM.doApplyOnline2Timeout);
if((CRMSso.authenticateTokenInProgress===true)){CRM.doApplyOnline2Timeout=setTimeout(function(){CRMMobile.doApplyOnline2()
},500)
}else{CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyOnline);
CRMSso.getOneTimeToken()
}},doApplyByPhone:function(b){CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.applyByPhone,CRMMobile.dispositionPhoneComplete);
var a=CRM.applyByPhoneNumber;
CRMMobile.doNativeAppAction(CRMDisposition.dispositionResponseCodes.applyByPhone,a)
},doEmailReservationCode:function(a){CRMOnline.doEmailReservationCode(a)
},doGoToBranch:function(a){CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.goToBranch,CRMMobile.dispositionBranchComplete);
CRMMobile.doNativeAppAction(CRMDisposition.dispositionResponseCodes.goToBranch,"")
},doAskLater:function(a){CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.askLater,CRMMobile.dispositionAskLaterComplete);
CRMMobile.doNativeAppAction(CRMDisposition.dispositionResponseCodes.askLater,"")
},doNotInterested:function(a){CRMDisposition.disableNoActionDisposition=true;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.noInterest,CRMMobile.dispositionNoInterestComplete);
CRMMobile.doNativeAppAction(CRMDisposition.dispositionResponseCodes.noInterest,"")
},doNoAction:function(a){CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.noAction,CRMMobile.dispositionNoActionComplete);
CRMMobile.doNativeAppAction(CRMDisposition.dispositionResponseCodes.noAction,"")
},doPageViewed:function(a){CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.pageViewed,CRMMobile.dispositionPageViewedComplete)
},dispositionEmailRescodeComplete:function(e,d,f){$log.debug("Email Reservation Code",e)
},dispositionOnlineComplete:function(e,d,f){},dispositionBranchComplete:function(e,d,f){$log.debug("Find a Branch disposition complete",e)
},dispositionPhoneComplete:function(e,d,f){$log.debug("Apply By Phone disposition complete",e)
},emailOfferLinkComplete:function(e,d,f){},dispositionNoInterestComplete:function(e,d,f){$log.debug("Not Interested disposition complete",e)
},dispositionNoActionComplete:function(e,d,f){$log.debug("No Action disposition complete",e)
},dispositionPageViewedComplete:function(e,d,f){$log.debug("Page viewed disposition complete",e)
},dispositionAskLaterComplete:function(e,d,f){$log.debug("Ask Later disposition complete",e)
},isCRMMobileRequest:function(){var b=UrlParams.get("platform");
if(!(b&&b.length>1)){b=LocalStorageUtil.getCachedItem("platform")
}var a=((b&&b.indexOf("mobil")>-1));
return a
}};
var CRMPapermail={isEnabled:false,oao:{channelCode:"5",channelMediumCode:"13",channelServiceCode:"39",subchannelCode:"0"},init:function(){CRMPapermail.isEnabled=true;
CRM.oaoData=CRMPapermail.oao;
CRM.controller=CRMPapermail;
CRMUi.hideNoInterestAskLater();
CRMReservationCode.showMsg("");
CRMReservationCode.showReservationCodeInput()
},doApplyOnline:function(){CRM.useApplyOnlineUrl2=false;
var a=CRM.getApplyOnlineUrl();
document.location.href=a
},doApplyOnline2:function(){CRM.useApplyOnlineUrl2=true;
var a=CRM.getApplyOnlineUrl();
document.location.href=a
},doGoToBranch:function(){CRMOnline.doGoToBranch()
},doApplyByPhone:function(){CRMOnline.doApplyByPhone()
}};
var CRMEmail={isEnabled:false,oao:{channelCode:"5",channelMediumCode:"13",channelServiceCode:"40",subchannelCode:"0"},init:function(){CRM.oaoData=CRMEmail.oao;
CRM.controller=CRMEmail;
CRMUi.hideNoInterestAskLater();
CRMEmail.isEnabled=true;
CRMReservationCode.messages.invalidCode=CRMReservationCode.messages.invalidCodeEmail;
CRMUi.addRescodeToOAOLinks(CRMEmail.oao)
},doApplyOnline:function(){var a=CRM.getApplyOnlineUrl();
document.location.href=a
},doApplyOnline2:function(){CRM.useApplyOnlineUrl2=true;
var a=CRM.getApplyOnlineUrl();
document.location.href=a
},isCRMEmailRequest:function(){if(UrlParams.get("platform")=="email"||UrlParams.get("channel")=="email"){return true
}var b=UrlParams.get("reservationCode");
var a=UrlParams.get("platform");
return(b&&b.length>2&&(a!=="mobile"))
},doGoToBranch:function(){CRMOnline.doGoToBranch()
},doApplyByPhone:function(){CRMOnline.doApplyByPhone()
}};
var CRMReservationCode={isEnabled:false,inputParam:"reservationCode",applyOnlineUrl:null,minlength:15,maxlength:15,reservationCode:null,messages:{invalidCode:"Please provide the 15-character code from your mail piece.",invalidCodeEmail:"Please provide the 15-character code from your email."},init:function(){var b=CRMReservationCode.getReservationCodeFromCookie();
var a=CRMReservationCode.getReservationCodeFromUrl();
var c=CRMUtil.pageHasReservationCodeInput();
if(c){$(CRM.selectors.reservationCodeInput).val("");
CRMReservationCode.setReservationCode("")
}if(a){CRMReservationCode.setReservationCode(a);
CRMReservationCode.prefill()
}else{if(b){CRMReservationCode.setReservationCode(b);
CRMReservationCode.prefill()
}}if(c){CRMReservationCode.isEnabled=true;
CRMReservationCode.setupSubmitButtonClick();
CRMReservationCode.prefill();
CRMUi.hideApplyOnline()
}CRMReservationCode.openMarket.init()
},setupSubmitButtonClick:function(){var a=$(CRM.selectors.reservationCodeSubmitBtn);
if(a&&a.length>0){a.attr("href","javascript:;");
a.on("click",CRMReservationCode.onReservationCodeSubmit)
}},onReservationCodeSubmit:function(a){var b=$(CRM.selectors.reservationCodeInput);
var c=(b&&b.length>0)?CRMReservationCode.removeHyphens(b.val()):"";
var d=CRMReservationCode.validateCodeWithErrorMessage(c);
if(d){if(CRM.crmConfig.applyOnlineUrl&&CRM.crmConfig.applyOnlineUrl.length>0){CRM.applyOnlineUrl=CRM.crmConfig.applyOnlineUrl
}CRMReservationCode.setReservationCode(c);
CRM.controller.doApplyOnline()
}else{CRMReservationCode.setReservationCode("")
}},validateCodeWithErrorMessage:function(c,a){var a=(a&&a.length>0)?a:$(CRM.selectors.reservationCodeInput);
var b=false;
c=(c&&c.length)?c:CRMReservationCode.getReservationCode();
if(CRMReservationCode.openMarket.enabled){a=$(CRMReservationCode.openMarket.selectors.rescodeInput);
c=a.val()
}if(c){c=c.replace(/[^a-zA-Z0-9]/g,"");
b=CRMReservationCode.isValidCode(c)
}if(b){a.removeClass("crm-reservation-code-error")
}else{a.addClass("crm-reservation-code-error");
CRMReservationCode.showMsg(CRMReservationCode.messages.invalidCode,true)
}return b
},isValidCode:function(b){var a=false;
if(b){b=b.replace(/[^a-zA-Z0-9]/g,"");
a=((b.length>=CRMReservationCode.minlength)&&(b.length<=CRMReservationCode.maxlength))
}return a
},setReservationCode:function(a){var b=$(CRM.selectors.reservationCodeValue);
if(b.length<1){$('<div id="crm-reservation-code-value" class="hidden"></div>').appendTo($(document.body));
b=$(CRM.selectors.reservationCodeValue)
}if(b.length>0){b.html(CRMReservationCode.removeHyphens(a))
}},getReservationCode:function(){var a=$(CRM.selectors.reservationCodeValue);
return(a.length>0)?CRMReservationCode.removeHyphens(a.html().toUpperCase()):""
},prefill:function(){var b=CRMReservationCode.getReservationCode();
var a=$(CRM.selectors.reservationCodeInput);
if(b&&(!CRMPapermail.isEnabled)){if(CRMReservationCode.isValidCode(b)){a.val(b);
CRMReservationCode.hideReservationCodeInput();
CRMReservationCode.showMsg("Reservation code:<br/><span class='crm-reservation-code-display'><strong>"+CRMReservationCode.addHyphens(CRMReservationCode.getReservationCode())+"</strong></span>")
}else{a.removeClass("error");
a.on("keyup",CRMReservationCode.hyphenateTextInput)
}}else{a.on("keyup",CRMReservationCode.hyphenateTextInput)
}},hideReservationCodeInput:function(){var a=$(CRM.selectors.reservationCodeFormGroup);
a.hide()
},showReservationCodeInput:function(){var a=$(CRM.selectors.reservationCodeFormGroup);
if(a&&a.length>0){a.show()
}},showMsg:function(d,b){var a=(b)?$(CRM.selectors.reservationCodeErrorMsg):$(CRM.selectors.reservationCodeUserMsg);
var c=(b)?"#da3851":"#121212";
a.css("color",c);
a.html(d);
a.show()
},hideMsg:function(b){var a=(b)?$(CRM.selectors.reservationCodeErrorMsg):$(CRM.selectors.reservationCodeUserMsg);
a.hide()
},addReservationCodeToUrl:function(a,c,b){c=(c)?c:CRMReservationCode.getReservationCode();
if(a&&c&&c.length>3){a=UrlParams.set(CRM.oao.reservationParam,c,a);
if(CRMUtil.isOAOUrl(a)){a=UrlParams.set(CRM.oao.channelCodeParam,b.channelCode,a);
a=UrlParams.set(CRM.oao.channelMediumCodeParam,b.channelMediumCode,a);
a=UrlParams.set(CRM.oao.channelServiceCodeParam,b.channelServiceCode,a);
a=UrlParams.set(CRM.oao.subchannelCodeParam,b.subchannelCode,a)
}}return a
},getReservationCodeFromCookie:function(){var a=LocalStorageUtil.getCachedItem("reservationCode");
if(a&&a.length>5&&CRMReservationCode.isValidCode(a)){return a
}return null
},getReservationCodeFromUrl:function(){var a=UrlParams.get("reservationCode");
if(a&&a.length>5&&CRMReservationCode.isValidCode(a)){return a
}return null
},addHyphens:function(b,d,j,f){try{if(b&&b.length>0){b=CRMReservationCode.removeHyphens(b)
}if((!b)||(b.length<4)){return b
}var k=false;
if((j&&j===true)){if(f){var l=CRMUtil.getKeyCode(f);
if((l&&(l===CRM.keycodes.backspace)||(l===CRM.keycodes.del))){k=true
}}}var a=[];
a.push(b.substring(0,4));
if(b.length>4){a.push(b.substring(4,10))
}if(b.length>9){a.push(b.substring(10,15))
}var c="";
if(!d){d="&ndash;"
}for(var g=0,m=a.length;
g<m;
g++){var h=((a.length>1&&g===(a.length-1)))?"":d;
c+=a[g]+h
}if(k&&(c.charAt(c.length-1)=="-")){c=c.substring(0,c.length-1)
}return c.trim()
}catch(e){return b
}},removeHyphens:function(b){var c="&ndash;";
var a=new RegExp(c,"g");
b=b.replace(a,"");
c="-";
a=new RegExp(c,"g");
b=b.replace(a,"");
return b
},hyphenateTextInput:function(a,b){var b=(b&&b.length&&b.length>0)?b:$(CRM.selectors.reservationCodeInput);
var c=b.val().toUpperCase();
b.val(CRMReservationCode.addHyphens(c,"-",true,a))
},openMarket:{channel:false,enabled:false,init:function(){var b=$(CRMReservationCode.openMarket.selectors.rescodeInput);
if(b&&b.length>0){CRMReservationCode.openMarket.enabled=true;
var e=$(CRMReservationCode.openMarket.selectors.rescodeSubmit);
var d=$(CRMReservationCode.openMarket.selectors.rescodeForm);
var c=d.attr("data-channel");
var a=$(CRMReservationCode.openMarket.selectors.modalToggle);
if(c&&c.length>0){CRMReservationCode.openMarket.channel=c
}b.removeClass("crm-reservation-code-error");
a.on("click",CRMReservationCode.openMarket.showModal);
b.on("keyup",function(f){CRMReservationCode.hyphenateTextInput(f,b)
});
e.on("click",function(f){CRMReservationCode.openMarket.submitModal()
})
}},selectors:{modal:"#reservationCodeModal",rescodeInput:"#reservationCodeModalInput",rescodeSubmit:"#reservationCodeSubmit",rescodeForm:"#reservationCodeModalForm",modalToggle:"#reservationCodeModalToggle",errorMsg:"#reservationCodeModalErrorMsg"},showModal:function(){var g=$(CRMReservationCode.openMarket.selectors.modal);
if(g&&g.length>0){g.modal();
var b=$(CRMReservationCode.openMarket.selectors.rescodeInput);
var a=$("#channel_papermail");
b.removeClass("crm-reservation-code-error");
var d="";
if(CRMOnline.isEnabled||CRMMobile.isEnabled||CRMEmail.isEnabled){var c=$(".reservationCodeModalReceived");
c.hide();
if(CRMOnline.isEnabled){$("#channel_online").prop("checked",true)
}else{if(CRMMobile.isEnabled){$("#channel_mobile").prop("checked",true)
}else{if(CRMEmail.isEnabled){$("#channel_email").prop("checked",true)
}}}var f=CRMReservationCode.getReservationCode();
if(f&&f.length>5){d=CRMReservationCode.addHyphens(f,"-")
}}else{a.prop("checked",true)
}b.val(d);
var e=$(CRMReservationCode.openMarket.selectors.errorMsg);
e.hide()
}},submitModal:function(){var f=CRMReservationCode.openMarket.validateCode();
if(f){var e=$(CRMReservationCode.openMarket.selectors.rescodeForm);
var b=e.attr("action");
var a=$(CRMReservationCode.openMarket.selectors.rescodeInput);
var d=a.val();
var c=(CRMReservationCode.openMarket.channel)?CRMReservationCode.openMarket.channel:$("input[name=channel]:checked").val();
b=CRMReservationCode.openMarket.appendRescodeAndChannel(b,d,c);
if(CRMOnline.isEnabled||CRMMobile.isEnabled){CRM.applyOnlineUrl=b;
CRMSso.getOneTimeToken()
}else{document.location.href=b
}}return f
},validateCode:function(){var a=$(CRMReservationCode.openMarket.selectors.rescodeInput);
var d=a.val();
var c=CRMReservationCode.validateCodeWithErrorMessage(d,a);
if(!c){var b=$(CRMReservationCode.openMarket.selectors.errorMsg);
b.show()
}return c
},appendRescodeAndChannel:function(a,c,b){if(b&&b.length>0&&c&&c.length>0){b=b.toLowerCase();
c=c.replace(/[^0-9a-zA-Z]/gi,"");
if(b.indexOf("papermail")>-1||b.indexOf("directmail")>-1){a=CRMReservationCode.addReservationCodeToUrl(a,c,CRMPapermail.oao)
}else{if(b.indexOf("email")>-1){a=CRMReservationCode.addReservationCodeToUrl(a,c,CRMEmail.oao)
}else{if(b.indexOf("online")>-1){a=CRMReservationCode.addReservationCodeToUrl(a,c,CRMOnline.oao)
}else{if(b.indexOf("mobile")>-1){a=CRMReservationCode.addReservationCodeToUrl(a,c,CRMMobile.oao)
}}}}}return a
}}};
function captchaCallback(a){GoogleRecaptcha.captchaResponse=a;
CRMReservationCodeEmail.statusMsg("&nbsp;")
}function captchaExpiredCallback(a){GoogleRecaptcha.captchaResponse=null;
CRMReservationCodeEmail.statusMsg("&nbsp;")
}var CRMReservationCodeEmail={urls:{emailPdf:"/bin/bbvacompass/reservation-code-email"},sendCountCookieName:"rescodepdf.sends",formInputErrorClass:"error",emailModalSelector:"#email-reservation-code-modal",emailFormSelector:"#email-reservation-code-modal form",emailInputSelector:"#rescodeEmailInput",emailSendButtonSelector:"#rescodeSendEmail",pdfTemplateSelector:"#crm-reservation-pdf-template",emailTemplateSelector:"#crm-reservation-email-template",statusSelector:"#rescodeEmailStatusMsg",successStatus:"SUCCESS",spinnerElement:'<img src="/etc/designs/bbvacompass/images/spinners/spinner-pink-16px.gif" />',init:function(){GoogleRecaptcha.init();
CRM.controller=CRMReservationCodeEmail;
var b=$(CRMReservationCodeEmail.emailSendButtonSelector);
if(b&&b.length>0){b.on("click",CRMReservationCodeEmail.onEmailSendButtonClick)
}var a=$(CRMReservationCodeEmail.emailInputSelector);
if(a&&a.length>0){a.on("keyup",function(){CRMReservationCodeEmail.statusMsg("&nbsp;")
})
}$(CRMReservationCodeEmail.emailModalSelector).on("shown.bs.modal",function(){var c=$(CRMReservationCodeEmail.emailInputSelector);
c.focus();
grecaptcha.render("g-captcha",{sitekey:GoogleRecaptcha.publicKey,theme:"light",callback:captchaCallback,"expired-callback":captchaExpiredCallback})
});
$(CRMReservationCodeEmail.emailModalSelector).on("hidden.bs.modal",function(){var c=$(CRMReservationCodeEmail.emailInputSelector);
c.removeClass("input-error");
c.val("");
CRMReservationCodeEmail.statusMsg("&nbsp;");
GoogleRecaptcha.captchaResponse=null;
grecaptcha.reset()
});
return true
},onEmailSendButtonClick:function(){if(typeof(SendCount)!=="undefined"&&SendCount.isExceeded(CRMReservationCodeEmail.sendCountCookieName)){CRMReservationCodeEmail.showLockout()
}else{if(CRMReservationCodeEmail.validateEmailForm()){CRMReservationCodeEmail.doEmailSend()
}}},doEmailSend:function(){if(typeof(SendCount)!=="undefined"){SendCount.incrementSendsThisSess(CRMReservationCodeEmail.sendCountCookieName)
}var b=encodeURIComponent($(CRMReservationCodeEmail.pdfTemplateSelector).html());
var a=encodeURIComponent($(CRMReservationCodeEmail.emailInputSelector).val());
var c=$(CRMReservationCodeEmail.emailTemplateSelector).html();
$.ajax({url:CRMReservationCodeEmail.urls.emailPdf,success:CRMReservationCodeEmail.onEmailSendSuccess,data:"pdfTemplate="+b+"&emailAddress="+a+"&emailTemplate="+c+"&reservationCode="+CRMReservationCode.getReservationCode()+"&g-recaptcha-response="+encodeURIComponent(GoogleRecaptcha.captchaResponse),error:CRMReservationCodeEmail.onEmailSendError,method:"POST"})
},onEmailSendSuccess:function(a){var b=a.status;
if(b&&b==CRMReservationCodeEmail.successStatus){CRMReservationCodeEmail.displaySuccessMessage()
}else{CRMReservationCodeEmail.displayFailMessage()
}grecaptcha.reset();
GoogleRecaptcha.captchaResponse=null
},onEmailSendError:function(a){console.log("email servlet  error");
console.log(a);
CRMReservationCodeEmail.displayFailMessage();
grecaptcha.reset();
GoogleRecaptcha.captchaResponse=null
},validateEmailForm:function(){var c=$(CRMReservationCodeEmail.emailFormSelector);
var a=$(CRMReservationCodeEmail.emailInputSelector);
var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var b=e.test(a.val());
if(!b){a.addClass("input-error");
CRMReservationCodeEmail.statusMsg("Please provide a valid email address.");
a.focus();
return false
}else{if(GoogleRecaptcha.captchaResponse==null||GoogleRecaptcha.captchaResponse.length<10){CRMReservationCodeEmail.statusMsg("Please confirm you are not a robot.");
return false
}else{var d=(CRMMobile.isCRMMobileRequest())?"&nbsp;Sending your code...":"&nbsp;Sending your reservation code...";
a.removeClass("input-error");
CRMReservationCodeEmail.statusMsg(CRMReservationCodeEmail.spinnerElement+d);
return true
}}},displaySuccessMessage:function(){var a=$(CRMReservationCodeEmail.emailInputSelector);
a.val("");
var b=(CRMMobile.isCRMMobileRequest())?"Your code has been sent.":"Your reservation code has been sent.";
CRMReservationCodeEmail.statusMsg(b)
},displayFailMessage:function(){CRMReservationCodeEmail.statusMsg("Send failed, please re-try.")
},statusMsg:function(b){var a=$(CRMReservationCodeEmail.statusSelector);
a.html(b)
},showLockout:function(){$(CRMReservationCodeEmail.statusSelector).html("This form is temporarily unavailable.")
}};
if(typeof($)!="undefined"){$(document).ready(CRMReservationCodeEmail.init)
}else{console.log("CRMReservationCodeEmail.init aborted - jQuery not available")
}var Spinner={htmlWrapper:false,inited:false,targetLoader:false,loaderDefault:"loader-default",init:function(){try{Spinner.targetLoader=(Spinner.targetLoader)?Spinner.targetLoader:Spinner.loaderDefault;
Spinner.addSpinnerCSSToPage();
Spinner.addSpinnerHTMLToPage();
Spinner.htmlWrapper=$(".loader-container");
Spinner.inited=true
}catch(a){console.log("Error initializing spinner");
console.log(a)
}},show:function(){try{if(typeof(MobileBanking)!=="undefined"){if(MobileBanking.isAndroidWebview()){return false
}}if(Spinner.inited!==true){Spinner.init()
}Spinner.centerElement(Spinner.htmlWrapper);
Spinner.htmlWrapper.show();
return(Spinner.isCurrentlyShown())
}catch(a){console.log("Error showing spinner");
console.log(a)
}},hide:function(){if(!Spinner.htmlWrapper){return false
}Spinner.htmlWrapper.hide();
return true
},isCurrentlyShown:function(){if(!Spinner.htmlWrapper){return false
}var a=Spinner.htmlWrapper.css("display");
return(a&&a.length>0&&a!="none")
},centerElement:function(a){$(a).css({position:"absolute",left:"50%",top:"50%","margin-left":parseInt((-$(a).outerWidth()/2)+$(window).scrollLeft())+"px","margin-top":parseInt((-$(a).outerHeight()/2)+$(window).scrollTop())+"px"})
},addSpinnerHTMLToPage:function(){var a='<div class="loader-container"><div class="'+Spinner.targetLoader+'"></div></div>';
$(a).appendTo("body")
},addSpinnerCSSToPage:function(){var a="<style type='text/css'> 				 .loader-container { 				  position: absolute; 				  display: none; 				  margin-left: 0px; 				  margin-top: 0px; } 				.loader-default { 				  border: 4px solid #f3f3f3; 				  /* Light grey */ 				  border-top: 4px solid #295f90; 				  /* Blue */ 				  border-radius: 50%; 				  width: 30px; 				  height: 30px; 				  animation: spin 1s linear infinite; } 				@keyframes spin { 				  0% { 				    transform: rotate(0deg); } 				  100% { 				    transform: rotate(360deg); } } 			  </style>";
$(a).appendTo("head")
}};
if(typeof($)!="undefined"){$(document).ready(function(){CRM.init()
});
$(window).unload(function(){if(CRMOnline.isEnabled||CRMMobile.isEnabled){if(!CRMDisposition.disableNoActionDisposition){CRMOnline.doNoAction()
}}return true
})
}else{console.log("CRM init aborted - jQuery not available")
}$(document).ready(function(){var a=UrlParams.get("pbid");
$("#workplaceId").text(a)
});
var mobileClose=function(){if(typeof(CRMDisposition)!=="undefined"){try{CRMDisposition.ajaxTimeout=500;
CRMDisposition.sendDisposition(CRMDisposition.dispositionResponseCodes.noAction,false)
}catch(a){}}window.location.assign("bbvacompass://closeWebView")
};
var uiconsole={log:function(h,f){var c=$("#uiconsole");
if(c.length>0){try{if(typeof(h)!=="string"){h=(typeof(JSON)!=="undefined"&&typeof(JSON.stringify)!=="undefined")?JSON.stringify(h):"[object]"
}var b=c.html();
var e=(f&&f===true)?"<span style='color:red;'>":"<span>";
var d="<br/><br/>";
var a=b+e+" "+h+"</span>"+d;
c.html(a)
}catch(g){console.log(g)
}}},error:function(a){uiconsole.log(a,true)
},init:function(){var a=$("#uiconsole");
if(a.length>0){a.css({"min-height":"300px",border:"1px solid #cccccc","white-space":"pre-wrap","word-wrap":"break-word",padding:"5px"})
}}};
uiconsole.init();
var MobileBanking={init:function(){if(typeof(MobileTermsAccept)!=="undefined"){MobileTermsAccept.init()
}},notifyAppOfLinkClick:function(b){if((!b)||(b.length<1)){b=(document.location.href.indexOf("/eca-")>-1)?"compass://ecaterms/?details=true":"compass://terms/?details=true"
}var a=document.createElement("iframe");
a.src=b;
a.height="1";
a.width="1";
a.style.visibility="hidden";
document.body.appendChild(a)
},clickDetail:function(){MobileBanking.notifyAppOfLinkClick()
},isTouchDevice:function(){var b=navigator.userAgent.toLowerCase();
var a=false;
if((typeof(Modernizr)!=="undefined"&&Modernizr.touch)||b.match(/(iphone|ipod|ipad)/)||b.match(/(android)/)||b.match(/(iemobile)/)||b.match(/iphone/i)||b.match(/ipad/i)||b.match(/ipod/i)||b.match(/blackberry/i)||b.match(/bada/i)){a=true
}return a
},isAndroid:function(){var a=navigator.userAgent;
return(a&&a.toLowerCase().match(/(android)/))
},isAndroidWebview:function(){var b=false;
if(MobileBanking.isAndroid()){var a=navigator.userAgent.toLowerCase();
if(a.indexOf(" wv")>-1){b=true
}}return b
},isIOS:function(){var a=navigator.userAgent;
return(a&&a.toLowerCase().match(/(iphone|ipod|ipad)/))
},isIphone:function(){var a=navigator.userAgent.toLowerCase();
return(a&&a.match(/(iphone)/))
},isIphoneWebview:function(){var b=false;
if(MobileBanking.isIphone()){var a=navigator.userAgent.toLowerCase();
if(a.indexOf("safari")===-1){b=true
}}return b
},isWebview:function(){return(MobileBanking.isIphoneWebview()||MobileBanking.isAndroidWebview())
}};
MobileBanking.init();
var _agreement=MobileBanking;
function loadMoreMortgageOfficers(c){var b=$("#viewmoreid");
var a=$(b).prev();
var d=$(a).find(".hide")[0];
if(d&&$(d).hasClass("hide")){$(d).removeClass("hide");
if((d.childElementCount<=20)&&(d.nextElementSibling==null)&&$(d).attr("id")!=="mofficers4"){$(b).addClass("hide")
}}else{if(a.children().length>=5){var h=$("#state").val();
var f=$("#county").val();
var g=$("#officersCount").val();
g=g*20;
var e="/bin/bbvacompass/blog/mortgageofficers."+g+"."+h+"."+f+".json";
$.getJSON(e,function(n){var l=parseInt($("#officersCount").val());
$("#officersCount").val(l+1);
var k=n.count;
var m=true;
if(k<20){m=false
}if(k>0&&k<=20){var j='<div id="mofficers'+l+'">';
j+=formResultSetsDiv(n.mortgageOfficers);
j+="</div>";
$(a).append(j);
if(!m){$(b).addClass("hide")
}}})
}}}function formResultSetsDiv(b){var a="";
for(i=0;
i<b.length;
i++){a+='<div class="col-md-3 mediummargin"><p class="h5"><a href="'+b[i].mortgageOfficerLink+'">'+b[i].name+"</a></p><p>"+b[i].jobTitle+"<br>NMLS ID#: "+b[i].id+"<br>"+b[i].contactNumber+'(Office) <br><a href="'+b[i].mortgageOfficerLink+'">Visit My Website</a> </p> </div>'
}return a
}$(document).ready(function(){if($("#officerresults").children(":first").children().length<20){$("#viewmoreid").addClass("hide")
}if($("#viewmoreid").prev().children().length===1&&$("#officerresults").children(":first").children().length===20){$("#viewmoreid").addClass("hide")
}});