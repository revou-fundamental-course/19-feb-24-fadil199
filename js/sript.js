var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i=0;i<imgList.length;i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

const nama1 = prompt("Siapa namamu?");
const nama = document.getElementById("name").innerHTML = nama1;

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    const lahir = document.forms['message-form']['tanggal_lahir'].value
    const jk = document.forms['message-form']['jenis_kelamin'].value
    const pesan = document.forms['message-form']['pesan'].value

    let years = Date();
    const a = years.toString().slice(0, 24);


    if (nama == '' || lahir == '' || jk == '' || pesan == '') {
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!!"
        document.getElementById("error-name1").innerHTML = "Tidak Boleh Kosong!!"
        document.getElementById("error-name2").innerHTML = "Tidak Boleh Kosong!!"
        document.getElementById("error-name3").innerHTML = "Tidak Boleh Kosong!!"

        return false
    }

    setName({nama, lahir, jk, pesan, a});

    return false;
}

function setName({nama, lahir, jk, pesan, a}) {
    document.getElementById("date").innerHTML = a;
    document.getElementById("name1").innerHTML = nama;
    document.getElementById("lahir").innerHTML = lahir;
    document.getElementById("jk").innerHTML = jk;
    document.getElementById("ps").innerHTML = pesan;
    document.getElementById("error-name").innerHTML = ""
    document.getElementById("error-name1").innerHTML = ""
    document.getElementById("error-name2").innerHTML = ""
    document.getElementById("error-name3").innerHTML = ""
}