async function fetchData () {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    return data
}

let a = fetchData()
a.then(data => console.log(data)).catch(err => console.log(err))