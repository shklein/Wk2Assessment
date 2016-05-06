$(document).ready(function () {
$('.generate').on('click', function () {
  console.log($(this).parent());

$(this).parent().append('<div class="container"></div>');
$('.container').append('<button class="delete-button">Delete</button>');
$('.container').append('<button class="change-button">Change Color</button>');
})

$('.delete-button').on('click', function () {
  console.log($(this).parent());
})
$('.change-button').on('click', function (){
  console.log($(this));
})


});
