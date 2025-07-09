"use strict";

const NUMBER_OF_CELLS = 10;
let tableShown = false;

function handleClick() {
    // this.classList.toggle('clicked');
    if (tableShown) {
        ourButton.textContent = 'показати таблицю';
        ourTable.innerHTML = '';
        tableShown = !tableShown;
    }
    else {
        let tableString = '<table> <caption>Таблиця Пифагора</caption> <tr><th> </th>';
        // forming the first row (header)
        for (let i = 1; i <= NUMBER_OF_CELLS; i++) {
            tableString += `<th> ${i} </th>`;
        }
        tableString += '</tr>';
        // -----------------------------------
        for (let i = 1; i <= NUMBER_OF_CELLS; i++) {
            tableString += `<tr> <th> ${i} </th>`;
            for (let j = 1; j <= NUMBER_OF_CELLS; j++) {
                if (i === j) {
                    tableString += `<td class="diagonal-element"> ${i * j} </td>`;
                }
                else {
                    tableString += `<td> ${i * j} </td>`;
                }
            }
            tableString += '</tr>';
        }
        tableString += '</table>';
        ourTable.innerHTML = tableString;
        this.textContent = 'сховати таблицю';
        tableShown = !tableShown;
    }
}  

const ourButton = document.querySelector('button');
const ourTable = document.getElementById('place_for_table');
if (ourButton && ourTable) {
        ourButton.addEventListener('click', handleClick);
    } 
