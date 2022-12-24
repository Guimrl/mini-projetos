const url = 'https://api.github.com/users/';
console.log(url)
async function getUsuario() {
    const data = await axios(url + 'guimrl')
    console.log(data)
}