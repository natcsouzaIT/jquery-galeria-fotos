$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
        $(novoItem).fadeIn(1000);
    })
    $('ul').on('click','li', function(){
        $(this).toggleClass('completed');
    })
})