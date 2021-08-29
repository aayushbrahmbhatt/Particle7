

for (var i = 0; i < document.querySelectorAll(".like").length;i++) {
    document.querySelectorAll(".like")[i].addEventListener("click",function() {
        myfunc(this.classList)
    });
}



function myfunc(list) {
    for (var i = 0; i < list.length;i++) {
        if(list[i] == "clicked")
        {
            list.remove("clicked");
            document.querySelector("." + list[list.length - 1]).style.color = "#ebebeb";
            return;
        }
    }
    list.add("clicked");
    document.querySelector("." + list[list.length - 2]).style.color = "#FC5185";
}