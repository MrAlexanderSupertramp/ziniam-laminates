var url = "";

function doAction(url, name, brand) {

    $('.main-image').css('background-image', 'url(' + url + ')');

    $('.post-title').html('  ' + name);

    $('.brand-name').html('  ' + brand);

    $('.image-selected').attr("src", url);


    // $('.post-finish').html(finish)

}