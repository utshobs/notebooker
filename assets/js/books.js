let database = [{
    //EEE books
        name: "Alternating-Current Circuits",
        author: " - R.M. Kerchne, G.F. Corcoran",
        for: "EEE151 (Year-1 Semester-2)",
        link: "http://www.portcity.edu.bd/files/636443307011697543_Alternatingcurrentcircuits.pdf",
    },
    {
        name: "Introductory Circuit Analysis",
        author: " – Robert L.Boylestad",
        for: "EEE151 (Year-1 Semester-2)",
        link: "https://drive.google.com/file/d/1N5QtwMT30hdsLM-9U69NQ5BP5bngajoy/view?usp=sharing",
    },
    {
        name: "Fundamentals of Electric Circuits",
        author: "- C. K. Alexander M. N. O.Sadiku",
        for: "EEE151 (Year-1 Semester-2)",
        link: "https://app.box.com/s/5watybxvdycipcibrorv9zf3tmib0csa",
    },
    {
        name: " Linear Electric Circuits",
        author: " -W.L.Cassell",
        for: "EEE151 (Year-1 Semester-2)",
        link: "https://archive.org/details/linearelectricci00cass",
    },
    {
        name: "Microelectronic circuits",
        author: " - A.S. Sedra ,K.C. Smith",
        for: "EEE211 (Year-1 Semester-2)",
        link: "https://engineeringbookspdf.com/microelectronic-circuits-seventh-edition-pdf-free-download/6733/",
    },
    {
        name: "Electronic Principles",
        author: "  - Albert Malvino",
        for: "EEE211 (Year-1 Semester-2)",
        link: "https://1filedownload.com/wp-content/uploads/2019/12/Malvino-Electronic-Principles.pdf",
    },
    {
        name: "Electronic Devices and Circuit Theory",
        author: " - Robert L. Boylestad, Louis",
        for: "EEE211 (Year-1 Semester-2)",
        link: "http://www.rtna.ac.th/departments/elect/Data/EE306/Electronic%20Devices%20and%20Circuit%20Theory.pdf",
    },
    {
        name: "Principles of Electronics",
        author: " -V.K Mehta, Rohit Mehta",
        for: "EEE211 (Year-1 Semester-2)",
        link: "https://rnsinstituteoftechnology.org/wp-content/uploads/2020/04/principles-of-electronics-s-chand-v-k-mehta-rohit-mehta.pdf",
    },
    {
        name: "Basic Electronics: Solid State",
        author: " -B.L. Theraja",
        for: "EEE211 (Year-1 Semester-2)",
        link: "https://pdfcoffee.com/basic-electronics-by-bl-theraja-pdf-free.html",
    }, //Physics books
    {
        name: "Concepts of Modern Physics",
        author: " - Arthur Beiser",
        for: "PHY165 (Year-1 Semester-2)",
        link: "https://drive.google.com/file/d/1LuNM5AsSsUofAxvJkru1MwuRc2l2_RCM/view?usp=sharing",
    }, //Statistics books
    {
        name: "Probability and Statistics for Engineers",
        author: " - Richard-a-johnson",
        for: "STA167 (Year-1 Semester-2)",
        link: "https://drive.google.com/file/d/1py9jodg7lAbhJurLtcx8Pa5H0H60wePv/view?usp=sharing",
    }, //Chemistry books
    {
        name: "Solid State Physics",
        author: " - RK Puri VK Babbar",
        for: "CHE185 (Year-1 Semester-2)",
        link: "https://drive.google.com/file/d/1Nm8bUIT1kvnnMrcdRzubkD3V7hTcpylb/view?usp=sharing",
    }, 
    {
        name: "Essentials Of Physical Chemistry",
        author: " - Arun Bahl  B.s. Bahl",
        for: "CHE185 (Year-1 Semester-2)",
        link: "https://drive.google.com/file/d/16HpygC4xgM6Tduz0GcdkS8BVpk-CktRQ/view?usp=sharing",
    }

    

];

window.onload = function() {
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");
    let books;

    registerSW(); //pwa service register function

    //this function searches the booklist
    const searchBooks = async searchText => {
        books = database;
        //get matches
        let matches = books.filter(book => {
            const regex = new RegExp(`${searchText}`, "gi"); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
            return (
                book.name.match(regex) ||
                book.for.match(regex) ||
                book.author.match(regex)
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
        <p class="card-title"><br>Name: ${match.name}</p><p>${match.author}</p><p>${match.for}</p><br>
        <p><a href="${match.link}" id="url"  target="_blank">📖 Download</a></p><br>
        </div>
        `
                )
                .join("");
            console.log(html);
            document.getElementById("suggestion").style.display = "none";
            document.getElementById("emergency").style.display = "none";
            document.getElementById("hero").style.marginTop = "-110px";
            document.getElementById("para1").style.visibility = "hidden";
            document.getElementById("head1").style.visibility = "hidden";
            document.getElementById("bR1").style.display = "none"
            document.getElementById("bR2").style.display = "none"
            matchList.innerHTML = html;
        } else {
            matchList.innerHTML = null;
            document.getElementById("suggestion").style.display = "inline-block";
            document.getElementById("emergency").style.display = "inline-block";
            document.getElementById("bR1").style.display = "block"
            document.getElementById("bR2").style.display = "block"
        }
    };

    window.addEventListener("DOMContentLoaded", searchBooks);
    search.addEventListener("keyup", () => searchBooks(search.value));
    console.log(database.length);
};



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
