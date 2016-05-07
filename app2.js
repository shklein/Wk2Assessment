$(document).ready(function () {
  var counter = 0;
  //generate button
$('.generate').on('click', function () {
$(this).parent().append('<div class="container"></div>');
var $el = $(this).parent().children().last();
$el.append('<button class="delete">Delete</button>');
$el.append('<button class="change-button">Change Color</button>');
counter++;
$el.append(counter);

});
//delete button
$('main').on('click','.delete', function () {
  $(this).parent().remove();
})
//changes color
var clicks = 0
$('main').on('click', '.change-button', function (){
  if (clicks % 2) {
  $(this).parent().css('background-color', 'yellow');
} else {
$(this).parent().css('background-color', 'red');
}
clicks++;

})
});
