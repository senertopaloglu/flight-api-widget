const tableBody = document.getElementById('table-body')

const getFlight = () => { // func expression , could also use a func with syntatic differences
    fetch('http://localhost:8000/flights')
        .then(response => response.json()) // chaining
        .then(flights => {
            console.log(flights) // for debugging
            populateTable(flights)
        })
        .catch(err => console.log(err)) // error handling processing json response from API server
}

getFlight()

const populateTable = (flights) => {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')
        const tableIcon = document.createElement('td')

        tableIcon.textContent = '✈'
        tableRow.append(tableIcon)

        const flightDetails = { //dict
            time: flight.programedHour.slice(0, 5), //remove seconds
            origin: flight.origin,
            flight: flight.acronym + flight.flightNumber,
            terminal: flight.terminal,
            remarks: flight.state
        }

        for (const flightDetail in flightDetails) {
            const tableCell = document.createElement('td')
            const word = Array.from(flightDetails[flightDetail])

            for (const [index, letter] of word.entries()) {//.entries() is same as .items() in python 
                const letterElement = document.createElement('div')

                // add letter in set timeout
                setTimeout(() => {
                    letterElement.classList.add('flip') // add class to each letter
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index) // 1st card flip at 0, second at 100

                letterElement.textContent = letter

                tableCell.append(letterElement)

            }

            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
    }

}