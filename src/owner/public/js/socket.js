(async () => {
    var ws_url = await fetch('/get_url_ws').then(res=>res.json())
    const socket = io(ws_url.url);
    executeScript()
    socket.on('receivedMessage', async (message) => {
        var element = `<tr>
        <td>${message.number}</td>
        <td>${message.isGroup ? message.groupName : 'Não'}</td>
        <td>${message.date}</td>
        <td>${message.cmd ? message.cmd : 'Não'}</td>
        <td>${message.works}</td>
    </tr>`
        element += document.getElementsByClassName('table-logs')[0].children[1].innerHTML 
        document.getElementsByClassName('table-logs')[0].children[1].innerHTML = element
    })
})()