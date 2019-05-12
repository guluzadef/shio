$(document).ready(function (e) {
    console.log("sadasd")
    $(".mens").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_men.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".yuxari").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "esas.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".homec").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "esas.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".womensa").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_women.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".babys").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_baby.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".sports").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_sport.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
    $(".contacts").click(function (e) {
        console.log("asdasdasd")
        $.ajax({
            url: "new_contact.html",
            method: "GET",
            success: function (data) {
                $(".main_photo").html(data)
            }


        })
    })
})