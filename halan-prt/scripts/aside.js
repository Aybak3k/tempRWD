document.querySelector("button#My-Account").addEventListener("click", _ => {
    document.querySelector("aside").classList.toggle("shown")
    document.querySelector("#arrow").classList.toggle("open")
})

// Future Animation
    // document.querySelectorAll("aside #user-info *").forEach((ele, index) => {
    //     if (ele.style.animation) {
    //         ele.style.animation = `Fading .5s ease-in-out backwards ${index / 70 + .03}s`
    //     } else {
    //         ele.style.animation = `Fading .5s ease-in-out forwards ${index / 70 + .03}s`
    //     }
    // })