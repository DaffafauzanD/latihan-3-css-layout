function myfuction() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var iname = document.getElementById("iname").value;
    var country = document.getElementById("country").value;
    var tname = document.getElementById("tname").value;

    confirm(
        "anda yakin dengan ini? \n" +
        "nama : " +
        fname +
        "\n" +
        "email : " +
        lname +
        "\n" +
        "'idcard : " +
        iname +
        "\n" +
        "destinasi : " +
        country +
        "\n" +
        "ticket : " +
        tname +
        "'" +
        "\njika yakin klik OK"
    );

    alert("info selanjut nya akan dikirimkan melalui email terima kasih");
}