$(document).ready(function () {
    $('#calendar').fullCalendar({
        locale: 'pt-br',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay',
        },
        events: [], // Você pode adicionar eventos aqui
    });
});