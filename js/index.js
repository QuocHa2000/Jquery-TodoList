$(function() {
    $(".change").click(function() {
        if ($(".testing").css("background-color") == "rgb(125, 153, 237)") {
            $(".testing").css("background-color", "rgb(254,100,100)");
        } else {
            $(".testing").css("background-color", "rgb(125,153,237)");
        }
    })
    $(".input").keypress(function(event) {
        if (event.keyCode == 13) {
            var input = $(".input").val().trim();
            if (!input) {
                alert("Nothing to add");
            } else {
                var addItem = $("<li class='item'></li>");
                var text = $(`<p>${input}</p>`);
                var rm = $("<button class='remove'> Remove </button>").click(function() {
                    $(this).parent().fadeOut(function() {
                        $(this).remove();
                    });
                });
                var complete = $("<button class='complete'> Complete </button>").click(function() {
                    $(this).parent().css("text-decoration", "line-through");
                    $(this).parent().css("background-color", "rgb(255, 195, 0)");
                })
                addItem.append(text, rm, complete);
                $(".list").append(addItem);
                addItem.fadeIn('slow');
            }
            $(".input").val("");
        }
    })
    $(".remove-all").click(function() {
        $(".list").fadeOut(function() {
            $(".list").html("");
        })
    })
});