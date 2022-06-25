/**
* jquery scrollTo plugin - Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
* Licensed under MIT
* @author Ariel Flesler
* @version 2.1.1
*/
$(document).ready(function(){
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
});

// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license
$(document).ready(function(){
(function($) {

    function fixTitle($ele) {
        if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    }

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
    }

    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function')
                                ? this.options.gravity.call(this.$element[0])
                                : this.options.gravity;

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);

                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>');
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function(options) {

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]();
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function() { get(this); });

        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    };

    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: -56,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

})(jQuery);
});

var codigo  = {

expandirCaja : function(i) {

               if (document.getElementById(i).className=='caja_abierta') {
               document.getElementById('p' + i).className = 'caja_cerrada';
               document.getElementById('d'+i).innerHTML="<strong class='desactivar'><span>Add a <em>company</em> to payee list</span></strong>";
               document.getElementById(i).className = 'caja_cerrada';
               }
                       else {
               document.getElementById('p' + i).className = 'caja_abierta';
               document.getElementById('d'+i).innerHTML="<strong class='activar'><span>Add a <em>company</em> to payee list</span></strong>";
               document.getElementById(i).className = 'caja_abierta';
                  }
               } ,


expandirCaja2 : function(i) {
                /*4LOLA*/
                /*
                 if (document.getElementById(i).className=='caja_abierta') {
                document.getElementById('p' + i).className = 'caja_cerrada';
                document.getElementById('d'+i).innerHTML="<strong class='desactivar' ></strong>";
                document.getElementById(i).className = 'caja_cerrada';
                }
                */
                if (document.getElementById(i).className=='caja_abierta widgetOpen') {
                document.getElementById('p' + i).className = 'caja_cerrada widgetClosed';
                document.getElementById('d'+i).innerHTML="<strong class='desactivar' ></strong>";
                document.getElementById(i).className = 'caja_cerrada widgetClosed';
                }
                /*/4LOLA*/
                        else {
                /*4LOLA*/
                /*
                document.getElementById('p' + i).className = 'caja_abierta';
                document.getElementById('d'+i).innerHTML="<strong class='activar'></strong>";
                document.getElementById(i).className = 'caja_abierta';
                */
                document.getElementById('p' + i).className = 'caja_abierta widgetOpen';
                document.getElementById('d'+i).innerHTML="<strong class='activar'></strong>";
                document.getElementById(i).className = 'caja_abierta widgetOpen';
                /*/4LOLA*/
                }
                },

expandirCaja3 : function(i) {

                if (document.getElementById(i).className=='caja_abierta') {
                document.getElementById('p' + i).className = 'caja_cerrada';
                document.getElementById('d'+i).innerHTML="<strong><span>Add a <em>company</em> to payee list</span></strong>";
                document.getElementById(i).className = 'caja_cerrada';
                }
                        else {
                document.getElementById('p' + i).className = 'caja_abierta';
                document.getElementById('d'+i).innerHTML="<strong class='activo'><span>Add a <em>company</em> to payee list</span></strong>";
                document.getElementById(i).className = 'caja_abierta';

                }
                } ,

expandirCaja4 : function(i) {
                 // 4LOLA
                 // Well done in order to preserve current class styles.
                 if ($("#" + i).hasClass("caja_abierta")) {
                	$("#" + i).removeClass("caja_abierta");
                	$("#" + i).addClass("caja_cerrada");
                	$("#d" + i).html("<strong class='desactivar' ></strong>");
                	$("#p" + i).addClass("caja_cerrada");
                 } else {
                	$("#" + i).removeClass("caja_cerrada");
                	$("#" + i).addClass("caja_abierta");
                	$("#d" + i).html("<strong class='activar' ></strong>");
                	$("#p" + i).addClass("caja_abierta");
                 }

                /*
                TODO: remove on production
                if (document.getElementById(i).className=='caja_abierta') {
                document.getElementById('p' + i).className = 'caja_cerrada';
                document.getElementById('d'+i).innerHTML="<strong class='desactivar' ></strong>";
                document.getElementById(i).className = 'caja_cerrada';
                }
                        else {
                document.getElementById('p' + i).className = 'caja_abierta';
                document.getElementById('d'+i).innerHTML="<strong class='activar'></strong>";
                document.getElementById(i).className = 'caja_abierta';
                }
                */
                // /4LOLA
                } ,


expandirCaja5 : function(i) {

                if (document.getElementById(i).className=='caja_abierta') {
                document.getElementById('p' + i).className = 'caja_cerrada';
                document.getElementById('d'+i).innerHTML="<strong class='desactivar' ></strong>";
                document.getElementById(i).className = 'caja_cerrada';
                }
                        else {
                document.getElementById('p' + i).className = 'caja_abierta';
                document.getElementById('d'+i).innerHTML="<strong class='activar'></strong>";
                document.getElementById(i).className = 'caja_abierta';

                }
                } ,


expandirCajaGeneral : function(i) {

                      //close accordion menu
                      if (document.getElementById(i).className=='caja_abierta') {
                      document.getElementById('p' + i).className = 'caja_cerrada';
                      document.getElementById('d'+i).innerHTML="<strong class='desactivar' ></strong>";
                      document.getElementById(i).className = 'caja_cerrada';
                      }
                      //open accordion menu
                      else {
                      document.getElementById('p' + i).className = 'caja_abierta';
                      document.getElementById('d'+i).innerHTML="<strong class='activar'></strong>";
                      document.getElementById(i).className = 'caja_abierta';
                      codigo.scrollToElement($('#p'+i));
                      }

                      } ,


expandirCajaSin : function(i) {

                  if (document.getElementById(i).className=='caja_abierta') {
                  document.getElementById('p' + i).className = 'caja_cerrada';
                  document.getElementById(i).className = 'caja_cerrada';
                  }
                          else {
                  document.getElementById('p' + i).className = 'caja_abierta';
                  document.getElementById(i).className = 'caja_abierta';

                  }
                  } ,

expandir : function(i) {

           if (document.getElementById(i).className=='box_abierta') {
           document.getElementById('p' + i).className = 'box_cerrada';
           document.getElementById(i).className = 'box_cerrada';
           }

           else {
           escondermenus();
           document.getElementById('p' + i).className = 'box_abierta';
           document.getElementById(i).className = 'box_abierta';

           }
           } ,

escondermenus : function() {
                arrayUl=document.getElementsByTagName("DIV");
                for(i=0;i<arrayUl.length;i++){
                	//para que funcione en explorer hay que preguntar por className y en otros navegadores por class.
                	if(arrayUl[i].getAttribute("className")=="box_abierta" || arrayUl[i].getAttribute("class")=="box_abierta"){
                		id=arrayUl[i].getAttribute("id");
                		document.getElementById('p' + id).className = 'box_cerrada';
                		arrayUl[i].className= 'box_cerrada';
                	}
                }
                } ,

applySelect2 : function(){
                		var title = $(this).attr('title');
                		var disabled = $(this).attr('disabled')? "disabled":"";
                		if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
                		$(this)
                			.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                			.after('<span class="select2 '+disabled+' "><em>' + title + '</em></span>')
                			.change(function(){
                				val = $('option:selected',this).text();
                				$(this).siblings("span.select2").html("<em>"+val+"</em>");
                				$(this).blur();
                				})
                	} ,

MM_jumpMenu : function(targ,selObj,restore){ //v3.0
                eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
                if (restore) selObj.selectedIndex=0;} ,


toggleLayer :  function( whichLayer )
               {
                 var elem, vis;
                 if( document.getElementById ) // this is the way the standards work
                   elem = document.getElementById( whichLayer );
                 else if( document.all ) // this is the way old msie versions work
                     elem = document.all[whichLayer];
                 else if( document.layers ) // this is the way nn4 works
                   elem = document.layers[whichLayer];
                 vis = elem.style;
                 // if the style.display value is blank we try to figure it out here
                 if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)
                   vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
                 vis.display = (vis.display==''||vis.display=='block')?'none':'block';
               } ,

               scrollToElement : function(elem){
               	var target = $(elem);
               	try{$('.form_tipo').scrollTo(target,{duration:400, offset : -15});}
               	catch(err){;}
               	//_log('scrollToElement');
               }



}




	$(document).ready(function(){


			// select element styling
			$('select.select').each(function(){
				var title = $(this).attr('title');
				var disabled = $(this).attr('disabled')? "disabled":"";
				if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
				$(this)
					.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
					.after('<span class="select '+disabled+' ">' + title + '</span>')
					.change(function(){
						val = $('option:selected',this).text();
						$(this).siblings("span.select").html(val);
//						$(this).next().text(val);
						$(this).blur();
						})
			});


			// select element styling
            			$('select.select2').each(codigo.applySelect2);
                        $('span.fila a span strong').each(function() {

                            $(this).addClass('desactivar');

                        });



                        //	$('.fn_showonrollovertrigger').hover(function(event) {
                        //		if ($(this).hasClass("fn_showonrolloverblock")) $context = $(this);
                        //		else $context = $(this).closest(".fn_showonrolloverblock");
                        //	    var t = setTimeout(function() {
                        //			$(".fn_showonrollovertarget", $context).slideDown("medium");
                        //		}, 500);
                        //		$(this).data('timeout', t);
                        //	//	$(".fn_showonrollovertarget", $context).closest("tr").children("td").animate({height: "100px"}, "fast");
                        // 	}, function(event) {
                        // 		var $context;
                        // 		clearTimeout($(this).data('timeout'));
                        // 		if ($(this).hasClass("fn_showonrolloverblock")) $context = $(this);
                        // 		else $context = $(this).closest(".fn_showonrolloverblock");
                        // 		var keepOn = $(".fn_showonrollovertarget", $context).data("keepOn");
                        // 		if (!keepOn || typeof keepOn == 'undefined') {
                        // 			$(".fn_showonrollovertarget", $context).slideUp("medium");
                        // //			$(".fn_showonrollovertarget", $context).closest("tr").children("td").animate({height: "100px"}, "fast");
                        // 		}
                        // 	});


                        	$("[data-deactivateallblock] input[type=radio]").change(function() {
                        		var $context = $(this).closest("[data-deactivateallblock]");
                        		var thename = $context.data("deactivateallblock");
                        		var $deactivatelink = $(".fn_deactivateall[data-deactivateallblock="+thename+"]");
                        		if ($("input[type=radio][value=1]:checked", $context).length > 0) $deactivatelink.removeClass("disabled");
                        		else $deactivatelink.addClass("disabled");
                        	})
                        	$(".fn_deleterowtrigger").click(function(event) {
                        		event.preventDefault();
                        		var name=$(this).data("deleterow");
                        		var $pop = $(".fn_deleterowconfirm[data-deleterow="+name+"]");
                        		if ($pop.length > 0) $pop.modal({escClose:false});
                        		else $(".fn_deleterowtarget[data-deleterow="+name+"]").slideUp("fast", function() {
                        			$(this).remove();
                        		});
                        	});
                        	$(".fn_deleterowconfirmtrigger").click(function(event) {
                        		event.preventDefault();
                        		var name = $(this).closest(".fn_deleterowconfirm").data("deleterow");
                        		$.modal.close();
                        		$(".fn_deleterowtarget[data-deleterow="+name+"]").slideUp("fast", function() {
                        			$(this).remove();
                        		});
                        	});
                        	$(".fn_deactivateall").click(function(event) {
                        		event.preventDefault();
                        		var thename = $(this).data("deactivateallblock");
                        		if ($(this).hasClass("disabled")) return;
                        		var $pop = $(".fn_deactivateallconfirm[data-deactivateallblock="+thename+"]");
                        		if ($pop.length > 0) $pop.modal({escClose:false});
                        		else {
                        			var $deactivatelink = $(".fn_deactivateall[data-deactivateallblock="+thename+"]");
                        			var $target = $("[data-deactivateallblock="+thename+"]").not($(".fn_deactivateall"));
                        			$("input[type=radio][value=0]").not(":checked").each(function() {
                        				$("[for="+$(this).attr("id")+"]").click();
                        			});
                        			$deactivatelink.addClass("disabled");
                        		}
                        	});
                        	$(".fn_deactivateallok").click(function(event) {
                        		event.preventDefault();
                        		var thename = $(this).closest(".fn_deactivateallconfirm").data("deactivateallblock");
                        		var $deactivatelink = $(".fn_deactivateall[data-deactivateallblock="+thename+"]");
                        		var $target = $("[data-deactivateallblock="+thename+"]").not($(".fn_deactivateall"));
                        		$("input[type=radio][value=0]").not(":checked").each(function() {
                        			$("[for="+$(this).attr("id")+"]").click();
                        		});
                        		$deactivatelink.addClass("disabled");
                        		$.modal.close();
                        	});
                        	$(".fn_showcategorytrigger").click(function(event) {
                        		event.preventDefault();
                        		var $context = $(this).closest(".fn_showcategoryblock");
                        		$('.fn_showonrollovertarget', $context).toggle("fast");
                        		var theText = $(this).data("showcategorymessage");
                        		$(this).data("showcategorymessage", $(this).text());
                        		$(this).text(theText).toggleClass("selected");
                        	});
                        	$(".fn_toggleblocktrigger").click(function(event) {
                        		event.preventDefault();
                        		var $this = $(this);
                        		var $context = $this.closest(".fn_toggleblockblock");
                        		var $target = $context.next("tr").find(".fn_toggleblocktargetblock");
                        		var theIndex = $(".fn_toggleblocktrigger", $context).index($(this));
                        		var $handle = $this.closest("tr.fn_toggleblockhandle");
                        		$(".fn_toggleblocktarget", $target).hide();
                        		$(".fn_toggleblocktargetblock").not($target).slideUp("fast")
                        		if ($target.is(":visible")) {
                        			if ($(".fn_toggleblocktarget:eq("+theIndex+")", $target).is(":visible")) return;
                        			else $(".fn_toggleblocktarget:eq("+theIndex+")", $target).show();
                        //			if ($(window).scrollTop() + window.innerHeight < $(document).height()) $("html, body").animate({scrollTop: $this.offset().top-30}, 500);
                        		} else {
                        //			$('.fn_showonrollovertarget').data("keepOn", false);
                        //			$('.fn_showonrollovertarget').not($('.fn_showonrollovertarget', $context)).hide();
                        			$(".tr_azul_seleccionado").removeClass("tr_azul_seleccionado");
                        			$(".fn_toggleblocktarget:eq("+theIndex+")", $target).show();
                        			$handle.addClass("tr_azul_seleccionado");
                        //			$('.fn_showonrollovertarget', $context).show();
                        			$target.slideDown("fast", function() {
                        				$("body").animate({scrollTop: $this.offset().top-30}, 500);
                        			})
                        		}
                        	});
                        	$(".fn_toggleblockclose").click(function(event) {
                        		event.preventDefault();
                        //		$(".fn_showonrollovertarget").fadeOut("fast");
                        		$(".tr_azul_seleccionado").removeClass("tr_azul_seleccionado");
                        		$(this).closest(".fn_toggleblocktargetblock").slideUp("fast");
                        		$('.fn_showonrollovertarget').data("keepOn", false)
                        	});
                        	$(".fn_togglepaneltrigger").click(function(event) {
                        		event.preventDefault();
                        		var $context = $(this).closest(".fn_togglepanelblock");
                        		$(".fn_togglepaneltarget",$context).slideToggle("fast");
                        	});
                        	$(".fn_togglepanelclose").click(function(event) {
                        		event.preventDefault();
                        		var $context = $(this).closest(".fn_togglepanelblock");
                        		$(".fn_togglepaneltarget",$context).slideUp("fast");
                        	});
                        	$(document).on("click", ".fn_splitremove", function(event) {
                        		event.preventDefault();
                        		var $context = $(this).closest(".fn_splitblock");
                        		var $theRow = $(this).closest(".fn_splititem");
                        		var numberOfSplits = $(".fn_splititem", $context).length;
                        		if (numberOfSplits <= 2) $(".fn_splitfirstshow", $context).fadeOut("fast");
                        		$theRow.fadeOut("fast", function() {
                        			$theRow.remove();
                        			$context.css({height: $(".category_cuadro_int", $context).height()}, 500)
                        		});
                        	});
                        	$(document).on("click", ".fn_cancel", function(event) {
                        		event.preventDefault();
                        		$.modal.close();
                        	});
                        	$(document).on("click", ".fn_splittrigger", function(event) {
                        		event.preventDefault();
                        		var $context = $(this).closest(".fn_splitblock");
                        //		$(this).removeClass("fn_splittrigger").addClass("fn_splitremove").addClass("remove_icon");
                        //		$("em", $(this)).text("Remove");
                        		$toAdd = $('<tr class="fn_splititem"><td class="w_slecte" ><label class="oculto">Category</label><span class="cajaboton2" ><select id="all_cat" name="all_cat" class="select2" title="Category"><option selected="selected">Category XYZ</option><option>Category XYZ</option><option>Category XYZ</option></select></span></td><td class="fn_splitfirstshow"><label class="oculto">Category</label><input class="tipo med10 ammount_on" value="$1,000.00"  onfocus="clearText(this)"   name="max_amount" id="max_amount" type="text"   /></td><td class="fn_splitfirstshow"><label class="oculto">Description</label><input class="tipo med10 ammount_on"   value=""  onfocus="clearText(this)"  name="max_amount" id="max_amount" type="text"   /></td><td class="w_select_multi fn_splitfirstshow"><select title="Select Account" class="multipleSplitClass" multiple="multiple" name="Select Account" size="4"><option value="option1"> Medical</option><option value="option2"> Business</option><option value="option3"> Tax Deductible</option><option value="option4"> Reimbursable</option></select></td><td class="fn_splitfirstshow"><a href="#" class="fc lc fn_splitremove button_gradient remove_icon" title="Remove"></a></td></tr>');
                        		$('select.select2', $toAdd).each(applySelect2);
                        		$("select.multipleSplitClass", $toAdd).multiselect({
                        			classes: "multipleSplitClass"
                        		});
                        		var $target = $(".fn_splititem", $context).last();
                        //		$toAdd = $('<tr class="ie_oculto"><td class="w_slecte"><label class="oculto">Category</label><span class="cajaboton2"><select id="all_cat" name="all_cat" class="select" title="All Categories" style="z-index: 10; opacity: 0;"> <option selected="selected">All Categories</option>   <option>Category XYZ</option>   <option>Category XYZ</option>  </select><span class="select">Category XYZ</span>  </span></td>  <td><label class="oculto">Category</label><input class="tipo med10 ammount_in" value="$1,000.00"  onfocus="clearText(this)" name="max_amount" id="max_amount" type="text"></td>  <td><label class="oculto">Description</label><input   class="tipo med10" name="max_amount" id="max_amount" type="text"></td><td><a href="#" class="fc lc button_gradient fn_splittrigger split_button"><em>Split</em></a></td></tr>');
                        		$toAdd.hide();
                        		$target.after($toAdd);
                        		var numberOfSplits = $(".fn_splititem", $context).length;
                        		if (numberOfSplits > 1) $(".fn_splitfirstshow", $context).fadeIn("fast");
                        		$toAdd.fadeIn("fast", function() {
                        			$context.css({height: $(".category_cuadro_int", $context).height()}, 500)
                        		})
                        	});
                        	$(".fn_radiopanelswitchtrigger").change(function() {
                        		var $context = $(this).closest(".fn_radiopanelswitchblock");
                        		var theIndex = $(this).data("radiopanelswitchtarget");
                        		$(".fn_radiopanelswitchtarget:visible",$context).fadeOut("fast", function() {
                        			$(".fn_radiopanelswitchtarget[data-radiopanelswitchtarget="+theIndex+"]",$context).fadeIn("fast");
                        		});
                        	});
                        $(".fn_showpaneltrigger").click(function(event) {
                        	event.preventDefault();
                        	var $context = $(this).closest(".fn_showpanelblock");
                        	var $target = $(".fn_showpaneltarget[data-showpaneltarget="+$(this).data("showpaneltarget")+"]", $context);
                        	if ($(this).hasClass("selected") || $(this).hasClass("boton_inactivo")) return;
                        	$(".fn_showpaneltrigger", $context).addClass("selected boton_inactivo");
                        	$(".fn_showpaneltarget", $context).hide();
                        	$target.show();
                        //	$(this).addClass("selected boton_inactivo");
                        });
                        $(".fn_showpanelclosetrigger").click(function(event) {
                        	event.preventDefault();
                        	var $context = $(this).closest(".fn_showpanelblock");
                        	$(".fn_showpaneltarget", $context).hide();
                        	$(".fn_showpaneltrigger", $context).removeClass("selected boton_inactivo");
                        });
                        	$(".toaccountpayment").change(function() {
                        	if ($(this).val()=="01") {
                             $(".combo_oculto_02").hide();
                             $(".due_oculto").hide();
                          	$(".combo_oculto").hide();
                         	$(".combo_oculto_01").show();

                         	}
                         	if ($(this).val()=="02") {
                              $(".combo_oculto_02").show();
                         	$(".combo_oculto_01").hide();
                              $(".due_oculto").hide();
                          		$(".combo_oculto").hide();
                         	}

                         	if ($(this).val()=="03") {
                              $(".combo_oculto").show();
                          		$(".combo_oculto_02").hide();
                         		$(".combo_oculto_01").hide();
                              $(".due_oculto").show();}
                        	});


                        /*
                        	$('#caja_login input.boton').click(function () {

                        		//reset all the items
                        		$('#caja_login input.boton').removeClass('active');

                        		//set current item as active
                        		$(this).addClass('active');

                        		//scroll it to the right position
                        		$('.mask').scrollTo($(this).attr('id'), 300);

                        		//disable click event
                        	    return false;

                        	});
                        	$('#caja_login a.boton').click(function () {

                        		//reset all the items
                        		$('#caja_login a.boton').removeClass('active');

                        		//set current item as active
                        		$(this).addClass('active');

                        		//scroll it to the right position
                        		$('.mask').scrollTo($(this).attr('rel'), 300);

                        		//disable click event
                        	    return false;

                        	});
                        */
	});

$(document).ready(function(){
$(function() {
 $('.graph_tab').tipsy({fade: true});
  });
  $(function() {
 $('.ov_vd').tipsy({fade: true});
  });
   $(function() {
 $('.ov_viewdetails').tipsy({fade: true});
  });
  $(function() {
 $('.normal_tab').tipsy({fade: true});
  });
 $(function() {
 $('.confirmation').tipsy({fade: true});
  });
 $(function() {
 $('.ov_no_decision').tipsy({fade: true});
  });
 $(function() {
 $('.goto_c').tipsy({fade: true});
  });

  $(function() {
 $('.reload_c').tipsy({fade: true});
  });
 $(function() {
 $('#help').tipsy({fade: true, gravity: 's'});
  });

   $(function() {
 $('#help_switch').tipsy({fade: true});
  });

  $(function() {
 $('#contact_us').tipsy({fade: true, gravity: 's'});
  });

   $(function() {
 $('#language').tipsy({fade: true});
  });
    $(function() {
 $('.play_icon').tipsy({fade: true});
  });

     $(function() {
 $('.actualizar_captcha').tipsy({fade: true});
  });
      $(function() {
 $('.sonido_captcha').tipsy({fade: true});
  });
      $(function() {
 $('.help_captcha').tipsy({fade: true});
  });
      $(function() {
 $('#mensajes').tipsy({fade: true});
  });
     $(function() {
 $('.ov_active').tipsy({fade: true});
  });

   $(function() {
 $('.ov_pending').tipsy({fade: true});
  });


   $(function() {
 $('.ov_close').tipsy({fade: true});
  });
    $(function() {
 $('.dlete').tipsy({fade: true});
  });
     $(function() {
 $('.make_payment_href').tipsy({fade: true});
  });
   $(function() {
 $('.leadDay').tipsy({fade: true});
  });
   $(function() {
 $('.ov_modify').tipsy({fade: true});
  });
    $(function() {
 $('.verify_icon').tipsy({fade: true});
  });
   $(function() {
 $('.activate_icon').tipsy({fade: true});
  });
  $(function() {
 $('.ov_receipt').tipsy({fade: true});
  });
   $(function() {
 $('.leyenda').tipsy({fade: true});
  });

    $(function() {
 $('.modify_icon').tipsy({fade: true});
  });

   $(function() {
 $('.remove_icon').tipsy({fade: true});
  });

   $(function() {
 $('.fn_splitremove').tipsy({fade: true});
  });

   $(function() {
 $('.remove_pp').tipsy({fade: true});
  });

    $(function() {
 $('.ov_goalhistory').tipsy({fade: true});
  });

    $(function() {
 $('.edit_pp').tipsy({fade: true});
  });

   $(function() {
 $('.delete_icon').tipsy({fade: true});
  });

   $(function() {
 $('.download_title').tipsy({fade: true});
  });

   $(function() {
 $('.print_title').tipsy({fade: true});
  });
});

function clearText(thefield){
if (thefield.defaultValue==thefield.value)
thefield.value = ""
}

$(".gear_service").mouseover(function(event) {
		event.preventDefault();
		$(".pref_tip").fadeIn('fast');
	});
	$(".gear_service").mouseout(function(event) {
		event.preventDefault();
		$(".pref_tip").fadeOut('fast');
	});

/*function scrollToElement(elem){
	var target = $(elem);
	try{$('.form_tipo').scrollTo(target,{duration:400, offset : -15});}
	catch(err){;}
	//_log('scrollToElement');
}*/

function _log(obj){ if(typeof(console) != 'undefined'){console.log(obj);}}
