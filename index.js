function show() {
    switch (document.getElementById("theme").value) {
        case "black": document.getElementById("catImage").src = "https://www.purinaone.ru/cat/sites/default/files/2019-03/article_indoor-outdoor.jpg"; break;
        case "white": document.getElementById("catImage").src = "https://cdnn1.img.sputniknews-uz.com/img/1326/89/13268900_0:0:1000:630_1920x0_80_0_0_ee7e1e506191b93ba0bf7e152bb8868a.jpg"; break;
        case "cream": document.getElementById('all').style.backgroundColor = 'cream'; break;
    }
}