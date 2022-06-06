$(document).ready(function () {


    const URL = "http://localhost:8080/customers"

    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        cors: true,
        crossDomain: true,
        contentType: 'application/json',
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }, success: function (customers) {
            customers.forEach(customer => {
                createCustomerCard(customer);
            });
        }, error: function (result) {

        }
    });


    function createCustomerCard(customer) {
        const subtitle = $("<p></p>").text(customer.email);
        subtitle.addClass("card-subtitle")
        const title = $("<h4></h4>").text(customer.name);
        title.addClass("card-title")
        const header = $("<div></div>");
        header.addClass("card-header");
        header.append(title,subtitle);
        const card = $("<div></div>").append(header);
        card.addClass("card col-lg-2 col-md-4 col-sm-6")
        $("body").append(card);
    }

});