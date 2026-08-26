
var ul = document.getElementById("ul");
var quizbox = document.getElementById("questionBox");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("btnNext");
var scoreCard = document.getElementById("score-card-2");

var app = {
    questions: [
        {
            q: "Apa kepanjangan dari HTML?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 1
        },
        {
            q: "Bahasa pemrograman yang digunakan untuk membuat halaman web interaktif adalah?",
            options: [
                "Python",
                "Java",
                "JavaScript",
                "C++"
            ],
            answer: 3
        },
        {
            q: "Dalam Java, tipe data yang digunakan untuk menyimpan nilai True dan False adalah?",
            options: [
                "int",
                "boolean",
                "char",
                "string"
            ],
            answer: 2
        },
        {
            q: "CSS digunakan untuk?",
            options: [
                "Menyimpan data",
                "Mengatur tampilan halaman web",
                "Membuat database",
                "Menjalankan server"
            ],
            answer: 2
        },
        {
            q: "Proses untuk mencari dan memperbaiki kesalahan atau bug pada kode program disebut:",
            options: [
                "Kompilasi",
                "Looping",
                "Debugging",
                "Formatting"
            ],
            answer: 3
        },
        {
            q: "Manakah yang merupakan tipe data JavaScript?",
            options: [
                "String",
                "Character",
                "Pointer",
                "Real"
            ],
            answer: 1
        },
        {
            q: "Method JavaScript untuk menampilkan popup adalah?",
            options: [
                "prompt()",
                "console.log()",
                "message()",
                "alert()"
            ],
            answer: 4
        },
        {
            q: "Apa fungsi perintah 'for' dalam pemrograman?",
            options: [
                "Membuat variabel",
                "Menghapus data",
                "Melakukan perulangan",
                "Menyimpan file"
            ],
            answer: 3
        }
    ],

    index: 0,
    score: 0,

    load: function() {
        if (this.index <= this.questions.length - 1) {
            quizbox.innerHTML =
                (this.index + 1) + ". " +
                this.questions[this.index].q;

            opt1.innerHTML =
                this.questions[this.index].options[0];

            opt2.innerHTML =
                this.questions[this.index].options[1];

            opt3.innerHTML =
                this.questions[this.index].options[2];

            opt4.innerHTML =
                this.questions[this.index].options[3];
        } else {
            quizbox.innerHTML =
                "🎉 Quiz Selesai!<br><br>Skor Akhir Anda: "
                + this.score + "/" + this.questions.length;

            ul.style.display = "none";
            nextButton.style.display = "none";
        }
    },

    next: function() {
        this.index++;
        this.load();
    },

    check: function(ele) {
        var id = ele.id.split('');
        var selected = Number(id[id.length - 1]);

        if (selected === this.questions[this.index].answer) {
            this.score++;
            ele.classList.add("correct");
        } else {
            ele.classList.add("wrong");
        }

        this.updateScore();
    },

    preventClick: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    allowClick: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = "";
        }
    },

    updateScore: function() {
        scoreCard.innerHTML =
            this.score + "/" + this.questions.length;
    }
};

function button(ele) {
    app.check(ele);
    app.preventClick();
}

function nextQuestion() {
    app.next();
    app.allowClick();
}

app.load();