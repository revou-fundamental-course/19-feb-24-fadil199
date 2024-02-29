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
const nama = document.getElementById("name").innerHTML = nama1[0].toUpperCase() + nama1.slice(1);

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    const lahir = document.forms['message-form']['tanggal_lahir'].value
    const jk = document.forms['message-form']['jenis_kelamin'].value
    const pesan = document.forms['message-form']['pesan'].value

    let years = Date();
    const a = years.toString().slice(0, 24);


    // if (nama == '' || lahir == '' || jk == '' || pesan == '') {
    //     document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!!"
    //     document.getElementById("error-name1").innerHTML = "Tidak Boleh Kosong!!"
    //     document.getElementById("error-name2").innerHTML = "Tidak Boleh Kosong!!"
    //     document.getElementById("error-name3").innerHTML = "Tidak Boleh Kosong!!"

    //     return false
    // }

    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!!"
        return false
    } else {
        document.getElementById("error-name").innerHTML = ""
    }

    if (lahir == '') {
        document.getElementById("error-name1").innerHTML = "Tidak Boleh Kosong!!"
        return false
    } else {
        document.getElementById("error-name1").innerHTML = ""
    }

    if (jk == '') {
        document.getElementById("error-name2").innerHTML = "Tidak Boleh Kosong!!"
        return false
    } else {
        document.getElementById("error-name2").innerHTML = ""
    }

    if (pesan == '' || pesan.length < 10) {
        document.getElementById("error-name3").innerHTML = "Pesan tidak boleh kosong atau <br>pesan anda kurang dari 10 karakter!"
        return false
    } else {
        document.getElementById("error-name3").innerHTML = ""
    }

    
    setName({nama, lahir, jk, pesan, a});

    return false;
}

function setName({nama, lahir, jk, pesan, a}) {
    document.getElementById("date").innerHTML = a;
    document.getElementById("name1").innerHTML = nama[0].toUpperCase() + nama.slice(1);
    document.getElementById("lahir").innerHTML = lahir;
    document.getElementById("jk").innerHTML = jk;
    document.getElementById("ps").innerHTML = pesan[0].toUpperCase() + pesan.slice(1);
    document.getElementById("error-name").innerHTML = ""
    document.getElementById("error-name1").innerHTML = ""
    document.getElementById("error-name2").innerHTML = ""
    document.getElementById("error-name3").innerHTML = ""
}