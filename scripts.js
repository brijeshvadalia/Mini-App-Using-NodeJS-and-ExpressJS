async function loadTasks() {
    res = await fetch('get-tasks', {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    jsonRes = await res.json()

    ulEL = document.getElementById("tasks")
    for (task of jsonRes.tasks) {
        liEL = document.createElement("li")
        liEL.textContent = task
        ulEL.appendChild(liEL)
    }
}
async function handleSaveTask() {
    ulEl = document.getElementById("tasks")
    inputEl = document.getElementById("task")

    liEl = document.createElement("li")
    liEl.textContent = inputEl.value
    ulEl.appendChild(liEl)

    payload = {
        task: inputEl.value
    }

    res = await fetch('save-task', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    

    jsonRes = await res.json()
    console.log(jsonRes)
}
