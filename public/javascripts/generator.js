let button = document.getElementById("generate_samples");
let load   = document.getElementById("loading_wheel");

button.onclick = function(event) {
    load.style.visibility = "visible";

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