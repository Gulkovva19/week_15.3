let show = () => {
    switch (document.getElementById("theme").value) {
        case "black": document.body.style.backgroundColor = "black"; break;
        case "white": document.body.style.backgroundColor = "white"; break;
        case "cream": document.body.style.backgroundColor = "#FFFDD0"; break;
    }
}