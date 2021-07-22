let button = document.getElementById("generate-samples");

button.onclick = function(event) {
    $.ajax({
        type: "GET",
        url: "/generate",
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, err) {
            console.log(xhr.responseText);
        }
    });
}