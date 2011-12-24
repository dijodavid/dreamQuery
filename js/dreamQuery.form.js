/*!
 * DreamQuery jQuery Library v1.3.3alpha
 *
 * Copyright 2011, Dijo David
 * Released under GPL License.
 *
 * @dependency jQuery v1.4.2 and above
 */

(function($){
	$.dreamQuery = function(){
		
	}
	$.extend($.dreamQuery, {
		//dreamQuery basic setttings
		settings : {
			cssClassRef : {
				reqErrorClass   : 'dream_required', //error class for input
				errorModalClass : 'dream_error_indicator', //validation error modal class
				closeBtn        : 'dream_close_btn dream_fLeft' //validation modal close button style
			}
		},
		//common useful functions
		
		flush : function(el){
			$(el).parent().fadeOut('3000');
			return false;
		},
		
		//setup form for validation
		form : {
			//basic validation settings. Its configurable.
			validationSettings : {
				reqClass     : 'required',
				isAjax       : false,
				markRequired : false
			},
			
			clearErrors : function(){
				$('.dream_form_error').remove();
				$('.e_m_box').remove();
				//remove highlight class
				$('.'+$.dreamQuery.settings.cssClassRef.reqErrorClass).removeClass($.dreamQuery.settings.cssClassRef.reqErrorClass);
				//$('select').removeClass($.dreamQuery.settings.cssClassRef.reqErrorClass);
				//$('textarea').removeClass($.dreamQuery.settings.cssClassRef.reqErrorClass);
			},
			
			showError : function(el){
				var elPos = $(el).position();
				var elHeight = $(el).height();
				var elWidth = $(el).width();
				
				//collecting info from input
				var inputName = $(el).attr('name');
				var fieldLabel = $('label[for="'+inputName+'"]').text();
				
				//msg box materials
				if($('#msgbox_'+inputName).length <= 0){
					var errorMsg = '<div class="dream_fLeft">This '+fieldLabel+' field is required</div>';
					//add close button for the box
					errorMsg += '<a href="javascript:void(0);" class="'+$.dreamQuery.settings.cssClassRef.closeBtn+'" onclick="$.dreamQuery.flush(this);"></a>'
					var msgWrapper = '<div id="msgbox_'+inputName+'" class="e_m_box">'+errorMsg+'</div>';
					//append the msg wrapper to body
					$('body').append(msgWrapper);
				} else {
					//msg box is already shown
				}
				var msgBox= $('#msgbox_'+inputName);
				//add content and apply class
				$(el).css({
					'border-width' : '1px'
				});
				msgBox.addClass($.dreamQuery.settings.cssClassRef.errorModalClass);
				msgBox.css({
					'top'         : elPos.top,
					'left'        : elPos.left + elWidth + 5
				});
				
				//higlight input by applying an error class
				$(el).addClass($.dreamQuery.settings.cssClassRef.reqErrorClass);
			},
			
			checkType : function(){
				return true;
			},
			
			checkRequired : function(){
				submittable = true;
				//remove all the errors and error classes
				$.dreamQuery.form.clearErrors();
				
				//get required input fields
				requiredFields = $('input.'+this.validationSettings.reqClass);
				if(requiredFields.size() > 0){
					requiredFields.each(function(index){
						var fieldVal = $(this).val();
						if($.trim(fieldVal) == ""){
							//show error
							$.dreamQuery.form.showError(this);
							submittable = false;
						}
					});
				}
				return submittable;
			},
			
			setup : function(ajaxCallback){
				$('input[type="submit"]').click(function(event){
					//prevent default submit action 
					event.preventDefault();
					//check required fields are empty?
					if($.dreamQuery.form.checkRequired()){
						//check type
						if($.dreamQuery.form.checkType()){
							//if the form submit is ajax, call the ajaxCallback function or submit form
							if($.dreamQuery.form.validationSettings.isAjax){
								//the form is set as ajax submit
								if(ajaxCallback){
								console.debug('foo');
									//if call back funcyion available, return the function
									return ajaxCallback();
								}
							} else {
								//submit the corresponding form
								$('input[type="submit"]').parent().submit();
							}
						}
						
					}
				});
			}
		}
	});
})(jQuery);