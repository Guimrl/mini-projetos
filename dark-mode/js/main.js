const input = document.querySelector('#theme');
const root = document.documentElement;

const lightTheme = {
    '--main-color': '#0b5ed7',
    '--main-text-color': '#333333',
    '--main-bg-color': '#eeeeee',
    '--bg-color': '#FFFFFF'
}

const darkTheme = {
    '--main-color': '#F39C12',
    '--main-text-color': '#EEEEEE',
    '--main-bg-color': '#333333',
    '--bg-color': '#262626'
}

input.addEventListener('change', () => {
    const check = input.checked;
    let getTheme;
    if (check) {
        getTheme = 'DARK';
        changeTheme(darkTheme);
    } else {
        getTheme = 'LIGHT'; 
        changeTheme(lightTheme);
    }

    localStorage.setItem("PageTheme", JSON.stringify(getTheme));
})

function changeTheme(theme) {
    for (let prop in theme) {
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value) {
    root.style.setProperty(property, value);
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme === 'DARK') {
    changeTheme(darkTheme);
} 