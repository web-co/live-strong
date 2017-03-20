$(document).ready(function(){

		$( "#nav_payment" ).tabs();
		
		$("input:checkbox").removeAttr("checked"); 
		
		$("#checkbox_2").on('change', function(){
			  if ($(this).prop("checked")) {
				  $('#form_checked_w').show();
			  } else {
				  $('#form_checked_w').hide(); 
			  }
		});
		
		$('select[name="notifications"]').change(function(){
		var el = $(this).val();
			  $('.hide').hide();
			  $('#div_'+el).show();
		
		});
	
		
		$(".some_filed input, #other_sum input").on('change click onfocus onkeyup', function() {
         $('#pstep_finish span').text($("#pstep_finish").val());
		 
		 $("#form_donation_level_6").on("click", function(){
			 $("#other_sum").show();
		 })
		 $(".close_other_sum").on("click", function(){
			 $("#other_sum").hide();
		 })
		 
		});
		
		  $('.scroll').click(function() {
			$("html, body").animate({
			  scrollTop:0
			},1000);
		  })
});

