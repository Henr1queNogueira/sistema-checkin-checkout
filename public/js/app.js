/*FUNÇÃO que serve para confirmar ou não a removação de usuario. */
function confirmDelete(event, form){
    //impede que o formulário seja submetido
    event.preventDefault();
    var decision = confirm('Você tem certeza que quer excluir?');

    if(decision == true){
        form.submit();
    }

};



/*$('.datepicker').datepicker({
    format: 'dd/mm/yyyy', 
    language: 'pt-BR'
    
});*/
