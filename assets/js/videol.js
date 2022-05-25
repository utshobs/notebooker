/* which year selected */

$(document).ready(function () {
    $('#year a').on('click', function () {
        var txt = ($(this).text());
        //alert("Your semester is "+txt);
        $(document).ready(function () {
            $("#vyear").on('DOMSubtreeModified', function () {
                //alert("change"); bug alert shows multiple time
                getOption2();

            });

        });

        document.getElementById("vyear").innerHTML = txt;

    });
});

/*
$(document).ready(function () {
    $("#vyear").on('DOMSubtreeModified', function () {
        alert("change ");
    });

});*/


/* which semester selected */

$(document).ready(function () {
    $('#semester a').on('click', function () {
        var txt = ($(this).text());
        //alert("Your semester is "+txt);
        $(document).ready(function () {
            $("#vsemester").on('DOMSubtreeModified', function () {
                //alert("change"); bug alert shows multiple time
                getOption();

            });

        });

        document.getElementById("vsemester").innerHTML = txt;

    });
});

/* which department selected */

$(document).ready(function () {
    $('#department a').on('click', function () {
        var txt = ($(this).text());
        //alert("Your department is "+txt);
        document.getElementById("vdepartment").innerHTML = txt;
        checkSelect();
    });
});



// which database is called :


let database = [

    {
        code: "2nd2ndComputer Science and Engineering (CSE)",
        //link: "https://youtu.be/rJ6oRlCDBxc <br>https://youtu.be/31IAMGlxl2o <br> https://youtu.be/NmoafjwvMnU <br> https://youtu.be/rJ6oRlCDBxc",
        "lcourses": ["EEE 101", "MATH 107", "PHY 115", "MAT 105", "CE 126"],
        "courses": ["EEE101", "MATH107", "PHY115", "MAT105", "CE126"],
        "link": ["https://youtu.be/rJ6oRlCDBxc11",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link2": ["https://youtu.be/rJ6oRlCDBxc22",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link3": ["https://youtu.be/rJ6oRlCDBxc33",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link4": ["https://youtu.be/rJ6oRlCDBxc44",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link5": ["https://youtu.be/rJ6oRlCDBxc55",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
    },
    {
        code: "1st1stElectrical and Electronic Engineering (EEE)",
        "lcourses": ["EEE 101", "MATH 107", "PHY 115", "MAT 105", "CE 126"],
        "courses": ["EEE101", "MATH107", "PHY115", "MAT105", "CE126"],
        "link": ["https://youtu.be/rJ6oRlCDBxc11st",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link2": ["https://youtu.be/rJ6oRlCDBxc22st",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link3": ["https://youtu.be/rJ6oRlCDBxc33st",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link4": ["https://youtu.be/rJ6oRlCDBxc44",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link5": ["https://youtu.be/rJ6oRlCDBxc55",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
    },
    {
        code: "nd2ndComputer Science and Engineering (CSE)",
        "lcourses": ["EEE 101", "MATH 107", "PHY 115", "MAT 105", "CE 126"],
        "courses": ["EEE101", "MATH107", "PHY115", "MAT105", "CE126"],
        "link": ["https://youtu.be/rJ6oRlCDBxc11",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link2": ["https://youtu.be/rJ6oRlCDBxc22",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link3": ["https://youtu.be/rJ6oRlCDBxc33",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link4": ["https://youtu.be/rJ6oRlCDBxc44",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
        "link5": ["https://youtu.be/rJ6oRlCDBxc55",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/31IAMGlxl2o",
                 "https://youtu.be/NmoafjwvMnU"],
    },
    {
        code: "kafis Sarwar Khan",
        contact: "+8801883440500",
        faculty: "CR IPE-46",
        terms: "IPE46 CR IPE 46 Production cr IPE cr",
    },
    {
        code: "kafis Sarwar Khan",
        contact: "+8801883440500",
        faculty: "CR IPE-46",
        terms: "IPE46 CR IPE 46 Production cr IPE cr",
    }
];


// displaying results:


function checkSelect() {

    var year = document.getElementById("vyear").textContent
    var semester = document.getElementById("vsemester").textContent
    var department = document.getElementById("vdepartment").textContent

    //var finder = year + semester + department;
    //alert(finder);

    if (year == "______" || semester == "______") {
        alert("You haven't choose year or semester");

    } else {
        getOption();
    }


}



/*
function getOption() {

    var year = document.getElementById("vyear").textContent
    var semester = document.getElementById("vsemester").textContent
    var department = document.getElementById("vdepartment").textContent

    var finder = year + semester + department;



    if (database[0].name == finder) {

        let text = "";
        for (let i = 0; i < database[0].link.length; i++) {
            text += database[0].link[i] + "<br>";
        }

        document.getElementById("pager").innerHTML = text;


    } else if (database[1].name == finder) {

        let text = "";
        for (let i = 0; i < database[1].link.length; i++) {
            text += database[1].link[i] + "<br>";
        }

        document.getElementById("pager").innerHTML = text;
    } else {
        document.getElementById("pager").innerHTML = "";
    }


}
*/


function getOption2() {

    var year = document.getElementById("vyear").textContent
    var semester = document.getElementById("vsemester").textContent
    var department = document.getElementById("vdepartment").textContent

    var finder = year + semester + department;



    if (semester == "______" && department == "______") {

        console.log("Year selected");

    } else {

        getOption();

    }


}


function getOption() {

    var year = document.getElementById("vyear").textContent
    var semester = document.getElementById("vsemester").textContent
    var department = document.getElementById("vdepartment").textContent

    var value;
    var finder = year + semester + department;

    if (department == "Computer Science and Engineering (CSE)") {
        value = database[0];
        getResult();

    } else if (department == "Electrical and Electronic Engineering (EEE)") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else if (department == "Physics") {
        value = database[1];
        getResult();

    } else {
        alert("Error");
        document.getElementById("pager2").innerHTML = "";
    }


    function getResult() {


        if (value.code == finder) {

            let text = "";
            let text2 = "";
            let text3 = "";
            let text4 = "";
            let text5 = "";

            for (let i = 0; i < value.link.length; i++) {
                // text += value.link[i] + "<br>";
                index = i + 1;
                text += "<li>" + "Class-" + index + ":" + " <a href=" + value.link[i] + " target=" + "_blank" + ">" + value.link[i] + "</a>" + "</li>";
            }

            for (let i = 0; i < value.link2.length; i++) {
                // text += value.link[i] + "<br>";
                index = i + 1;
                text2 += "<li>" + "Class-" + index + ":" + " <a href=" + value.link2[i] + " target=" + "_blank" + ">" + value.link2[i] + "</a>" + "</li>";
            }

            for (let i = 0; i < value.link3.length; i++) {
                // text += value.link[i] + "<br>";
                index = i + 1;
                text3 += "<li>" + "Class-" + index + ":" + " <a href=" + value.link3[i] + " target=" + "_blank" + ">" + value.link3[i] + "</a>" + "</li>";
            }

            for (let i = 0; i < value.link4.length; i++) {
                // text += value.link[i] + "<br>";
                index = i + 1;
                text4 += "<li>" + "Class-" + index + ":" + " <a href=" + value.link4[i] + " target=" + "_blank" + ">" + value.link4[i] + "</a>" + "</li>";
            }

            for (let i = 0; i < value.link5.length; i++) {
                // text += value.link[i] + "<br>";
                index = i + 1;
                text5 += "<li>" + "Class-" + index + ":" + " <a href=" + value.link5[i] + " target=" + "_blank" + ">" + value.link5[i] + "</a>" + "</li>";
            }

            document.getElementById("intro").innerHTML = "Subject-wise video links are here :";

            document.getElementById("lcourseName").innerHTML = value.lcourses[0];
            document.getElementById("courseName").innerHTML = value.courses[0];
            document.getElementById("pager").innerHTML = text;
            document.getElementById("lcourseName2").innerHTML = value.lcourses[1];
            document.getElementById("courseName2").innerHTML = value.courses[1];
            document.getElementById("pager2").innerHTML = text2;
            document.getElementById("lcourseName3").innerHTML = value.lcourses[2];
            document.getElementById("courseName3").innerHTML = value.courses[2];
            document.getElementById("pager3").innerHTML = text3;
            document.getElementById("lcourseName4").innerHTML = value.lcourses[3];
            document.getElementById("courseName4").innerHTML = value.courses[3];
            document.getElementById("pager4").innerHTML = text4;
            document.getElementById("lcourseName5").innerHTML = value.lcourses[4];
            document.getElementById("courseName5").innerHTML = value.courses[4];
            document.getElementById("pager5").innerHTML = text5;


        } else {
            document.getElementById("lcourseName").innerHTML = "";
            document.getElementById("courseName").innerHTML = "";
            document.getElementById("pager").innerHTML = "";
            document.getElementById("lcourseName2").innerHTML = "";
            document.getElementById("courseName2").innerHTML = "";
            document.getElementById("pager2").innerHTML = "";
            document.getElementById("lcourseName3").innerHTML = "";
            document.getElementById("courseName3").innerHTML = "";
            document.getElementById("pager3").innerHTML = "";
            document.getElementById("lcourseName4").innerHTML = "";
            document.getElementById("courseName4").innerHTML = "";
            document.getElementById("pager4").innerHTML = "";
            document.getElementById("lcourseName5").innerHTML = "";
            document.getElementById("courseName5").innerHTML = "";
            document.getElementById("pager5").innerHTML = "";
        }

    }


}
