import * as textbox from './textbox.js';
let list = '<ul>';

fetch('https://seismic-api.science.unimelb.edu.au/significant-quakes')
    .then(res => res.json())
    .then(data => {
        let quake = [];
        for (let i = 0; i < data.features.length; i++) {
            quake[i] = { mag: data.features[i].properties.mag, place: data.features[i].properties.place };
        }
        quake.sort((a, b) => b.mag - a.mag);
        
        for (let i = 0; i < 10; i++) {
            list += `<li><b>Magnitude:</b> ${quake[i].mag}, <b>Location:</b> ${quake[i].place}</li>`;
        }
        list += "</ul>";

        const quakes = new textbox.TextBox({
            title: "Earthquakes",
            subtitle: "10 biggest earthquakes",
            text: list,
            class: 'solo'
        })
    })
    .catch(err => console.log(err));