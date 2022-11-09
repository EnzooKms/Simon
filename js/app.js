const red = document.getElementById("red")
const green = document.getElementById("green")
const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")

const allEl = [red, green, yellow, blue]

let sequance = []
const played = []
const color = ["red", "green", "blue", "yellow"]

function seq() {
    const random = Math.floor(Math.random() * color.length)
    sequance.push(color[random])

    for (let i = 0; i < sequance.length; i++) {

        setTimeout(() => {
            console.log(sequance);
            switch (sequance[i]) {
                case "red":
                    red.classList.add("secRed")
                    setTimeout(() => {
                        red.classList.remove("secRed")
                    }, 2 * 1000);
                    break
                case "green":
                    green.classList.add("secGreen")
                    setTimeout(() => {
                        green.classList.remove("secGreen")
                    }, 2 * 1000);
                    break
                case "blue":
                    blue.classList.add("secBlue")
                    setTimeout(() => {
                        blue.classList.remove("secBlue")
                    }, 2 * 1000);
                    break
                case "yellow":
                    yellow.classList.add("secYellow")
                    setTimeout(() => {
                        yellow.classList.remove("secYellow")
                    }, 2 * 1000);
                    break
            }

        }, (i + 1) * 2000);

        setTimeout(() => {
            play()
        }, (i + 1) * (1000 * (sequance.length + 1)));

    }

}

function verif() {

    for (let i = 0; i < allEl.length; i++) {

        if (played[i] !== sequance[i]) {
            alert('Pas bon !')
            sequance = []
            seq()
            return false
        }
        else {
            return true
        }

    }
}

function play() {

    for (let i = 0; i < allEl.length; i++) {

        allEl[i].addEventListener("click", () => {

            played.push(allEl[i].id)

            if (verif()) {
                console.log("Bon");
                seq()
            }

        })

    }

}

seq()