$(document).ready(function(){
    $("p").mouseenter(function(){
        $(".id").load('Ajax.txt');
    });
});