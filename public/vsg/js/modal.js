function setSignUpFormHeight() {
    var doc = $(window).height(); // document height
    var head = $(".modal-header").height(); // modal header height
    var footer = $(".modal-footer").height(); // modal footer height
    var modheight = doc - head - footer - 170; // 170 is extra margins and it will not effect the height of modal any way if not changed.
    $('#email-body').css('height', modheight);
}
function openModal() {

    if ($('#txtEmail').val().length > 0) {
    
        $('#myModal1').slideDown('slow');
        $('#myModal1').addClass('in');
        $('<div class="modal-backdrop"></div>').appendTo(document.body);
        setSignUpFormHeight();
        $('input[name=EMAIL]').val($('#txtEmail').val());
        $('#txtEmail').val('');
        return false;
    }
    else {
        alert('Please Enter Email Address');
    }
}
function modalclose() {
        $(".modal-backdrop").remove();
        $("#myModal1").slideUp("fast", function () {
        });

    }

    $("#mc-embedded-subscribe").on('click', function () {
        if ($('input[name = EMAIL]').length > 0) {
            


            if (!(/^[a-zA-Z0-9_\.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/.test($("#mce-EMAIL").val()))) {


        }
        else {

            alert("Thank you for subscribing");
            modalclose();
        }
    }

    });

    $('#txtEmail').on('keypress', function (event) {
        if (event.which === 13) {
            if ($(this).val().length > 0) {
                $('#myModal1').slideDown('slow');
        $('#myModal1').addClass('in');
        $('<div class="modal-backdrop"></div>').appendTo(document.body);
        setSignUpFormHeight();
        $('input[name=EMAIL]').val($('#txtEmail').val());
        $('#txtEmail').val('');
        return false;
            }
            else {
                alert('Please Enter Email Address');
            }
        }
    });
$(document).ready(function () { 
    setSignUpFormHeight();
    setfootertextalign();

});
window.onresize = function (event) {
    setSignUpFormHeight();
    setfootertextalign();
};
function setfootertextalign() {

    if ($(window).width() >= 1200) {

        $("#msirights-text").removeClass("col-xs-12").addClass("pull-right");
        $("#txt-align").removeClass("text-center");
    }
    else {
        $("#msirights-text").removeClass("pull-right").addClass("col-xs-12");
        $("#txt-align").addClass("text-center");
    }
}



// 

// (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[5]='MMERGE5';ftypes[5]='zip';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
(function ($) {
	window.fnames = new Array();
	window.ftypes = new Array();
	fnames[0] = 'EMAIL';
	ftypes[0] = 'email';
	fnames[1] = 'FNAME';
	ftypes[1] = 'text';
	fnames[2] = 'LNAME';
	ftypes[2] = 'text';
	fnames[5] = 'MMERGE5';
	ftypes[5] = 'zip';
	fnames[3] = 'ADDRESS';
	ftypes[3] = 'address';
	fnames[4] = 'PHONE';
	ftypes[4] = 'phone';
	fnames[6] = 'MMERGE6';
	ftypes[6] = 'text';
	fnames[7] = 'MMERGE7';
	ftypes[7] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);