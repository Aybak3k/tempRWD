// Vars (resuable ones)
const actualChat = document.querySelector("#actual-chat")
const chatInput = document.querySelector("#chat-form input")
let debugRole = "customer"
    // debugRole = "support"


document.querySelector("#chat-opener").addEventListener("click", _ => {
    document.querySelector("#chat-box").classList.toggle("shown")
    document.querySelector("#start").classList.add("heading")
})

document.querySelector("#chat-form").addEventListener("submit", e => {
    e.preventDefault()

    if (chatInput.value != "") {
        // message element
        let msgEle = document.createElement("p")
        let msgText = document.createTextNode(document.querySelector("#chat-form input").value)
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
})