$(document).ready(function () {
    $('#task-form').submit(function (event) {
      event.preventDefault() // impede que o formulário seja enviado
      var task = $('#task-input').val() // obtém o valor do campo de entrada
      if (task) {
        // verifica se a entrada não está vazia
        var listItem = $('<li>') // cria um novo elemento de lista
        var checkbox = $('<input>').attr('type', 'checkbox') // cria um novo elemento de checkbox
        var label = $('<label>').text(task) // cria um novo elemento de rótulo com o valor da entrada
        listItem.append(checkbox, label) // adiciona o checkbox e o rótulo ao elemento da lista
        $('#task-list').append(listItem) // adiciona o elemento da lista à lista de tarefas
        $('#task-input').val('') // limpa o campo de entrada
      }
    })
  })
  