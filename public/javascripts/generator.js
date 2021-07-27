let button = document.getElementById("generate_samples");
let load   = document.getElementById("loading_wheel");
let file0  = document.getElementById("audio_item_0");
let file1  = document.getElementById("audio_item_1");
let file2  = document.getElementById("audio_item_2");
let file3  = document.getElementById("audio_item_3");
let file4  = document.getElementById("audio_item_4");
let file5  = document.getElementById("audio_item_5");
let file6  = document.getElementById("audio_item_6");
let file7  = document.getElementById("audio_item_7");
let file8  = document.getElementById("audio_item_8");
let file9  = document.getElementById("audio_item_9");

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