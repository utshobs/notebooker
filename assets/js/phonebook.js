
let database = [{
        name: "Rajib Sir",
        contact: "+88017........",
        faculty: "Department of Electrical And Electronic Engineering",
        terms: "Associate Professor",
    },
    {
        name: "X",
        contact: "+88017........",
        faculty: "--",
        terms: "office admin",
    },
    {
        name: "XX",
        contact: "+880191......",
        faculty: "--",
        terms: "--",
    },
    {
        name: "XXX",
        contact: "+88017........",
        faculty: "---",
        terms: "--",
    },
    {
        name: "XXXX",
        contact: "+88017........",
        faculty: "---",
        terms: "---",
    },
    {
        name: "Hridoy Sarkar",
        contact: "+8801759024240",
        faculty: "Department of Electrical And Electronic Engineering",
        terms: "CR 8th batch",
    },
];

window.onload = function () {
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");
    let books;

    //document.getElementById("database").innerHTML = database.length + " Contacts";//for showing how many contacts
    registerSW(); //pwa service register function

    //this function searches the booklist
    const searchBooks = async searchText => {
        books = database;
        //get matches
        let matches = books.filter(book => {
            const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
            return (
                book.name.match(regex) ||
                book.faculty.match(regex) ||
                book.terms.match(regex) ||
                book.contact.match(regex)
            );
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = "";
        }

        outputHtml(matches);

        console.log(matches);
    };

    //show results in html

    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches
                .map(
                    match => `
        <div class="card">
        <p class="card-title"><br>Name: ${match.name}</p><p>${match.faculty}</p><br><p>${match.terms}</p><br>
        <p><a href="tel:${match.contact}" id="url">📞${match.contact}</a></p><br>
        </div>
        `
                )
                .join("");
            console.log(html);
            document.getElementById("suggestion").style.display = "none";
            document.getElementById("emergency").style.display = "none";
            matchList.innerHTML = html;
        } else {
            matchList.innerHTML = null;
            document.getElementById("suggestion").style.display = "inline-block";
            document.getElementById("emergency").style.display = "inline-block";
        }
    };

    window.addEventListener("DOMContentLoaded", searchBooks);
    search.addEventListener("keyup", () => searchBooks(search.value));
    console.log(database.length);
};

//books

function displayBooks() {
    var search = document.getElementById("book-display-list").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

    //this function searches the booklist
    const searchBooks = async searchText => {
        books = database;
        //get matches
        let matches = books.filter(book => {
            const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
            return book.faculty.match(regex) || book.terms.match(regex);
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = "";
        }

        outputHtml(matches);

        console.log(matches);
    };

    //show results in html

    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches
                .map(
                    match => `
        <div class="card">
        <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br><p>${match.terms}</p><br>
        <p><a href="tel:${match.contact}" id="url">📞${match.contact}</a></p><br>
        </div>
        `
                )
                .join("");
            console.log(html);

            matchList.innerHTML = html;
        } else {
            matchList.innerHTML = null;
        }
    };

    window.addEventListener("DOMContentLoaded", searchBooks);
    searchBooks(search);
}

function displayCR() {
    var batch = document.getElementById("batch-display-list").value;
    if (batch === "batch45") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye45">YE</option>
              <option value="FE45">FE</option>
              <option value="WPE45">WPE</option>
              <option value="AE45">AE</option>
              <option value="tem45">TEM</option>
              <option value="tfd45">TFD</option>
              <option value="ipe45">IPE</option>
              <option value="dce45">DCE</option>
              <option value="tmdm45">TMDM</option>
              <option value="ESE45">ESE</option>
            </select>`;
    } else if (batch === "batch46") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
          <option value="">Select Department</option>
            <option value="ye46">YE</option>
            <option value="FE46">FE</option>
            <option value="WPE46">WPE</option>
            <option value="AE46">AE</option>
            <option value="tem46">TEM</option>
            <option value="tfd46">TFD</option>
            <option value="ipe46">IPE</option>
            <option value="dce46">DCE</option>
            <option value="tmdm46">TMDM</option>
            <option value="ESE46">ESE</option>
          </select>`;
    } else if (batch == "batch44") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye44">YE</option>
              <option value="FE44">FE</option>
              <option value="WPE44">WPE</option>
              <option value="AE44">AE</option>
              <option value="tem44">TEM</option>
              <option value="tfd44">TFD</option>
              <option value="ipe44">IPE</option>
              <option value="dce44">DCE</option>
              <option value="tmdm44">TMDM</option>
            </select>`;
    } else if (batch == "batch43") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
            <option value="">Select Department</option>
              <option value="ye43">YE</option>
              <option value="FE43">FE</option>
              <option value="WPE43">WPE</option>
              <option value="AE43">AE</option>
              <option value="tem43">TEM</option>
              <option value="tfd43">TFD</option>
              <option value="ipe43">IPE</option>
              <option value="dce43">DCE</option>
              <option value="tmdm43">TMDM</option>
            </select>`;
    }
}

//cr

function showCR() {
    console.log("Show Cr Called");
    var search = document.getElementById("cr-display-list").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

    //this function searches the booklist
    const searchBooks = async searchText => {
        books = database;
        //get matches
        let matches = books.filter(book => {
            const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
            return book.faculty.match(regex) || book.terms.match(regex);
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = "";
        }

        outputHtml(matches);
        console.log(matches);
    };

    //show results in html

    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches
                .map(
                    match => `
<div class="card">
<p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br><p>${match.terms}</p><br>
<p><a href="tel:${match.contact}" id="url">📞${match.contact}</a></p><br>
</div>
`
                )
                .join("");
            console.log(html);

            matchList.innerHTML = html;
        } else {
            matchList.innerHTML = null;
        }
    };

    window.addEventListener("DOMContentLoaded", searchBooks);
    searchBooks(search);
}

//bus

function displayCR() {
    var batch = document.getElementById("batch-display-list").value;
    if (batch == "batch45") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye45">YE</option>
        <option value="FE45">FE</option>
        <option value="WPE45">WPE</option>
        <option value="AE45">AE</option>
        <option value="tem45">TEM</option>
        <option value="tfd45">TFD</option>
        <option value="ipe45">IPE</option>
        <option value="dce45">DCE</option>
        <option value="tmdm45">TMDM</option>
        <option value="ESE45">ESE</option>
      </select>`;
    } else if (batch == "batch44") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye44">YE</option>
        <option value="FE44">FE</option>
        <option value="WPE44">WPE</option>
        <option value="AE44">AE</option>
        <option value="tem44">TEM</option>
        <option value="tfd44">TFD</option>
        <option value="ipe44">IPE</option>
        <option value="dce44">DCE</option>
        <option value="tmdm44">TMDM</option>
      </select>`;
    } else if (batch == "batch46") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
      <option value="YE46">YE</option>
      <option value="FE46">FE</option>
      <option value="WPE46">WPE</option>
      <option value="AE46">AE</option>
      <option value="TEM46">TEM</option>
      <option value="TFD46">TFD</option>
      <option value="IPE46">IPE</option>
      <option value="DCE46">DCE</option>
      <option value="TMDM46">TMDM</option>
      <option value="ESE46">ESE</option>
      </select>`;
    } else if (batch == "batch43") {
        document.getElementById(
            "cr-holder"
        ).innerHTML = `  <select id="cr-display-list" onChange="showCR()" class="book-display-list">
      <option value="">Select Department</option>
        <option value="ye43">YE</option>
        <option value="FE43">FE</option>
        <option value="WPE43">WPE</option>
        <option value="AE43">AE</option>
        <option value="tem43">TEM</option>
        <option value="tfd43">TFD</option>
        <option value="ipe43">IPE</option>
        <option value="dce43">DCE</option>
        <option value="tmdm43">TMDM</option>
      </select>`;
    }
}


//bus

function showBus() {
    console.log("Show Bus Called");
    var search = document.getElementById("batch-display-list").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

    //this function searches the booklist
    const searchBooks = async searchText => {
        books = database;
        //get matches
        let matches = books.filter(book => {
            const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with
            return book.faculty.match(regex) || book.terms.match(regex);
        });

        if (searchText.length === 0) {
            matches = [];
            matchList.innerHTML = "";
        }

        outputHtml(matches);
        console.log(matches);
    };

    //show results in html

    const outputHtml = matches => {
        if (matches.length > 0) {
            const html = matches
                .map(
                    match => `
  <div class="card">
  <p class="card-title">Name: ${match.name}</p><p>${match.faculty}</p><br><p>${match.terms}</p><br>
  <p><a href="tel:${match.contact}" id="url">📞${match.contact}</a></p><br>
  </div>
  `
                )
                .join("");
            console.log(html);

            matchList.innerHTML = html;
        } else {
            matchList.innerHTML = null;
        }
    };

    window.addEventListener("DOMContentLoaded", searchBooks);
    searchBooks(search);
}

//code for PWA

async function registerSW() {
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("./sw.js");
        } catch (e) {
            console.log("Service worker registration failed");
        }
    }
}
