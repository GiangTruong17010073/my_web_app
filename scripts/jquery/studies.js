jQuery(document).ready(function(){
    alert("Hello!");
});

$(function(){
  alert("hi!");
  
  $('td').on('click', function(event){
    event.preventDefault();
    $('highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
  });
})
