async function getApiData() {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=mWJYZJKIIS9hEpmUJulsdTgalF4rxd7Kc6fjtPag")
        .then((data) => data.json());
    // console.log(res.url);
    // console.log(res.title);
    // console.log(res)
    // console.log(res.explanation)
    const main = document.getElementById("main");
    main.innerHTML = `
        <h1>${res.title}</h1>
        <img alt="${res.title}" src="${res.url}">
        <a href="${res.hdurl}">HD image</a>
        <a type="image/jpg" href="${res.url}" title="${res.title}" download>download</a>
        <p>${res.explanation}</p>
    `;
}

getApiData();
