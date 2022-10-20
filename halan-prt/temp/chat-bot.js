// Vars (resuable ones)
const actualChat = document.querySelector("#actual-chat")
const chatInput = document.querySelector("#chat-form input")
let debugRole = "customer"
    // debugRole = "support"

// temp APIs
let counter = -1
const messages = [
    "Um Sir.. You should see a doc",
    "No Sir, We're a cleaning company",
    "",
    "Oh God...."
]
const interSmth = [
    5000,
    3000,
    0,
    4000
]


document.querySelector("#chat-opener").addEventListener("click", _ => {
    document.querySelector("#chat-box").classList.toggle("shown")
    document.querySelector("#start").classList.add("heading")
})

document.querySelector("#chat-form").addEventListener("submit", e => {
    e.preventDefault()

    if (chatInput.value != "") {
        // message element
        let msgEle = document.createElement("p")
        let msgText = document.createTextNode(chatInput.value)
        msgEle.classList.add(debugRole)
        msgEle.appendChild(msgText)

        // append block-div
        let blockDiv = document.createElement("div")
        blockDiv.classList.add("block-div")
        blockDiv.appendChild(msgEle)

        // append message
        actualChat.appendChild(blockDiv)

        // clean input
        chatInput.value = null

        // auto scrool to bottom
        actualChat.scrollTop = actualChat.scrollHeight
    }

    // temp APIs
    setTimeout(_ => {
        counter++
        if (!messages[counter] == "") {
            let msgEle00 = document.createElement("p")
            let msgText00 = document.createTextNode(messages[counter])
            msgEle00.classList.add("support")
            msgEle00.appendChild(msgText00)
            let blockDiv00 = document.createElement("div")
            blockDiv00.classList.add("block-div")
            blockDiv00.appendChild(msgEle00)
            actualChat.appendChild(blockDiv00)
            actualChat.scrollTop = actualChat.scrollHeight
        }
    }, 5000)
})