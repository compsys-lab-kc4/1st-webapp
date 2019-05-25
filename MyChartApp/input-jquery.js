function formSetDay() {
    var lastday = formSetLastDay($('.chmon').val());
    var option = '';
    for (var i = 1; i <= lastday; i++) {
        if (i === $('.chday').val()) {
            option += '<option value="' + i + '" selected="selected">' + i + '</option>\n';
        } else {
            option += '<option value="' + i + '">' + i + '</option>\n';
        }
    }
    $('.chday').html(option);
}

function formSetLastDay(month) {
    var lastday = new Array(0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    return lastday[month];
}

