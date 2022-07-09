
let images = [
    "images/artist.png",
    "images/beauty1.png",
    "images/beauty.png",
    "images/book.png",
    "images/cool.png",
    "images/costume.png",
    "images/crying.png",
    "images/dancing.png",
    "images/dinosaur.png",
    "images/doctor.png",
    "images/drunk.png",
    "images/embarrassed.png",
    "images/exercise.png",
    "images/fear.png",
    "images/in-love.png",
    "images/jungle.png",
    "images/laughing.png",
    "images/movie.png",
    "images/music.png",
    "images/painter.png",
    "images/phone-call.png",
    "images/photographer.png",
    "images/reading.png",
    "images/santa-claus.png",
    "images/scientist.png",
    "images/shower.png",
    "images/sing.png",
    "images/swim.png",
    "images/thief.png",
    "images/think.png",
    "images/warm.png",
    "images/worker.png"]

let eat = [
    "images/chef.png",
    "images/drink.png",
    "images/eat.png",]
class Dino {
    constructor(name, hunger = 0, sleepiness = 0, boredom = 0, age = 0) {
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
    feed() {
        this.hunger--
    }

    sleep() {
        this.sleepiness--
    }

    exercise() {
        this.boredom--
    }
}
let light;
let extinct = false;
let randoms;
let pictures;
let dino = new Dino()
const nameDino = () => {
    dino.name = prompt('what is your DINOGOTCHI name?').toUpperCase()
    const nameDino = document.querySelector("#name")
    nameDino.innerText = `${dino.name}`
}

const numRamdom = () => {
    randoms = Math.floor(Math.random() * 2)
    return randoms
}
const restart = () => {
    let restart = confirm("Do you want to RESTART DINOGOTCHI?");
    if (restart) {
        alert("Let’s start over!");
        document.location.reload(true);
    } else {
        alert("Good decision!");
    }
}

const start = () => {
    let play = confirm("LET'S PLAY DINOGOTCHI!");

    if (play) {
        document.querySelector("#start-button").setAttribute("id", "egg")
        document.querySelector("#egg").src = "images/egg.png";
        document.querySelector("#egg").setAttribute("onclick", "hatch()")
        nameDino()
    } else {
        alert("I WILL SEE YOU NEXT TIME");
    }
    light = true
    return light
}

const rules = () => {
    let rules = confirm("Do you want to read the rules of DINOGOTCHI?");
    if (rules) {
        window.open("rules.html");
    } else {
        alert("Are you sure you don't need to know the rules?");
    }
}
const hatch = () => {
    hatching()
    alert("Your DINOGOTCHI is hatched!")
    document.querySelector("#egg").src = "images/hatch.png";
}
const playPic = () => {
    pictures = Math.floor(Math.random() * images.length)
    let play = images[pictures]
    document.querySelector("#hatch").src = (play)
}
const eatPic = () => {
    pictures = Math.floor(Math.random() * eat.length)
    let play = eat[pictures]
    document.querySelector("#hatch").src = (play)
}
const hatching = () => {
    document.querySelector("#egg").setAttribute("id", "hatch")
    numRamdom(randoms)
    if (randoms !== 0) {
        document.querySelector("#hatch").src = "images/dinosaur\ (5).png";
    }
    else {
        document.querySelector("#hatch").src = "images/chick.png";

    }
    document.querySelector("#hatch").setAttribute("onclick", "none")
    hunger()
    boredom()
    sleepiness()
    age()
    lightStwitch()
}
const lightOn = () => {
    document.querySelector(".game").style.backgroundImage = "url('images/jungle.png')"
    document.body.style.backgroundColor = "cyan"
    document.querySelector("#buttons").style.backgroundColor = "#7DF9FF"
    document.body.style.color = "#483C32"
    light = true
}

const lightOff = () => {
    document.querySelector("#sleepiness").innerText = `${dino.sleepiness}`;
    document.querySelector(".game").style.backgroundImage = "url('images/dark-forest.jpg')"
    document.body.style.backgroundColor = "black"
    document.querySelector("#buttons").style.backgroundColor = "darkgrey"
    document.body.style.color = "white"
    light = false
}
const lightStwitch = () => {
    if (dino.sleepiness !== 0) {
        if (light) {
            sleep()
            lightOff()
        }
        else {
            lightOn()
        }
    }
}

const extinction = () => {
    alert(`Your ${dino.name} is now extinct`)
    document.querySelector(".num").remove()
    document.querySelector("#hatch").setAttribute("id", "extinction")
    document.querySelector("#extinction").src = ('images/extinction.png')

    clearInterval(time);
}
const hunger = () => {
    const time = setInterval(() => {
        document.querySelector("#hunger").innerText = `${dino.hunger}`;
        if (dino.hunger > 9) {
            extinction()
            clearInterval(time);
            return;
        }
        numRamdom(randoms)
        dino.hunger += randoms
    }, 1000)
}
const boredom = () => {
    const time = setInterval(() => {
        document.querySelector("#boredom").innerText = `${dino.boredom}`;

        if (dino.boredom === 10) {
            extinction()
            clearInterval(time);
            return;
        }
        numRamdom(randoms)
        dino.boredom += randoms
    }, 1000)
}
const sleepiness = () => {
    const time = setInterval(() => {
        document.querySelector("#sleepiness").innerText = `${dino.sleepiness}`;
        if (dino.sleepiness === 10) {
            extinction()
            clearInterval(time);
            return;
        }
        numRamdom(randoms)
        dino.sleepiness += randoms
    }, 1000)
}
const displayAge = () => {

    document.querySelector("#age").innerText = `${dino.age}`;
}
const age = () => {
    setInterval(() => {
        dino.age++
        displayAge()
        if (extinct == false) {
            if (dino.age === 1) {
                document.querySelector("#hatch").src = "images/dinosaur\ (1).png"
                alert(`Your ${dino.name} is ${dino.age}y old`)
            }
            if (dino.age === 10) {
                document.querySelector("#hatch").src = "images/dinosaur\ (4).png"
                alert(`Your ${dino.name} is ${dino.age}y old`)
            }
            if (dino.age === 15) {
                document.querySelector("#hatch").src = "images/dinosaur\ (2).png"
                alert(`Your ${dino.name} is ${dino.age}y old`)
            }
            if (dino.age === 20) {
                alert(`Your ${dino.name} is ${dino.age}y old`)
                document.querySelector("#hatch").src = "images/dinosaur\ (3).png"
            }
        }
        else {
            return
        }
    }, 800)
}
const feed = () => {
    if (dino.hunger <= 0) {
        alert(`Your ${dino.name} is not hungry, feed your DINOGOTCHI later!`)
    } else {
        dino.feed()
        document.querySelector("#hunger").innerText = `${dino.hunger}`;
        eatPic()
    }
}
const exercise = () => {
    if (dino.boredom <= 0) {
        alert(`Your ${dino.name} is not bored, play with your DINOGOTCHI later!`)
    } else {
        dino.exercise()
        document.querySelector("#boredom").innerText = `${dino.boredom}`;
        playPic()
    }
}
const sleep = () => {
    const time = setInterval(() => {
        document.querySelector("#sleepiness").innerText = `${dino.sleepiness}`;
        if (dino.sleepiness == 0) {
            alert(`Your ${dino.name} is awake!`)
            lightOn();
            clearInterval(time);
            return;
        }

        dino.sleep()
    }, 500)

}





