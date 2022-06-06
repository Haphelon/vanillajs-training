$(document).ready(function () {

    const success = $('#success');
    const warning = $('#warning');
    const danger = $('#danger');

    success.addClass('d-none');
    warning.addClass('d-none');
    danger.addClass('d-none');

    $("#my_form").submit(function (e) {
        e.preventDefault();
        const URL = "http://localhost:8080/customers"
        let data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.sex = $('input[type=radio]:checked', '#my_form').val();
        data.ageGroup = $("#age_group").val();
        data.sendUpdates = $("#send_updates").is(':checked');

        data = JSON.stringify(data);

        $.ajax({
            url: URL,
            type: 'POST',
            dataType: 'json',
            data: data,
            cors: true,
            crossDomain: true,
            contentType: 'application/json',
            secure: false,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }, success: function (result) {
                $('#success-message').html(`${result.message}`);
                success.removeClass('d-none');
            }, error: function (result) {
                switch (result.status) {
                    case 400:
                        $('#warning-message').html(`${result.responseJSON.message}`);
                        warning.removeClass('d-none');
                        break;
                    case 500:
                        $('#danger-message').html(`${result.responseJSON.message}`);
                        danger.removeClass('d-none');
                        break;
                }
            }
        });

    })


});