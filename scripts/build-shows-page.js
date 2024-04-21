// Array of show objects
const shows = [
    {
      venue: 'Ronald Lane',
      date: 'Mon Sept 09 2024',
      location: 'San Francisco, CA'

    },
    {
       venue: 'Pier 3 East',
       date: 'Tue Sept 17 2024',
       location: 'San Francisco, CA'
  
    },
    {
        venue: 'View Lounge',
        date: 'Sat Oct 12 2024',
        location: 'San Francisco, CA'
  
    },
    {
        venue: 'Hyatt Agency',
        date: 'Sat Nov 16 2024',
        location: 'San Francisco, CA'
  
    },
    {
        venue: 'Moscow Center',
        date: 'Fri Nov 29 2024',
        location: 'San Francisco, CA'
  
    },
    {
        venue: 'Press Club',
        date: 'Wed Dec 18 2024',
        location: 'San Francisco, CA'
    }
]

// Array of titles for the show details
const titles = ['DATE', 'VENUE', 'LOCATION']

//Reference to the container element wherer shows will be displayed
const showsList = document.querySelector('.shows')




//Heading for the list of shows
const showTitle = createElementWithClass('h2', 'shows-h2')
showTitle.innerText = 'Shows'
showsList.appendChild(showTitle)

const showsFirstDiv = createElementWithClass('div', 'shows__firstDiv')
showsList.appendChild(showsFirstDiv)

  //div only for tablet and desktop view
  const showsTitle = createElementWithClass('div', 'shows-title')
  showsFirstDiv.appendChild(showsTitle)

  //Elements for showTitle
  const showsDateT = createElementWithClass('h4', 'shows--date-t')
  showsDateT.innerText = titles[0]
  showsTitle.appendChild(showsDateT)

  const showsVenueT = createElementWithClass('h4', 'shows-venue-t')
  showsVenueT.innerText = titles[1]
  showsTitle.appendChild(showsVenueT)

  const showsLocationT = createElementWithClass('h4', 'shows--location-t')
  showsLocationT.innerText = titles[2]
  showsTitle.appendChild(showsLocationT)
  /////////////


// Loop through each show object and create a card element for each
shows.forEach((show) => {
 const cardElement = createCardElement(show)
 showsFirstDiv.appendChild(cardElement)
})

function createCardElement(show) {
  //main div for the card
  const cardElement = createElementWithClass('div', 'shows__event')

  const showDateTitle = createElementWithClass('p', 'shows--date-t')
  showDateTitle.innerText = titles[0]
  cardElement.appendChild(showDateTitle) 

  const showDate = createElementWithClass('h3', 'shows--date')
  showDate.innerText = show.date
  cardElement.appendChild(showDate)

  const showVenueTitle = createElementWithClass('p', 'shows--venue-t')
  showVenueTitle.innerText = titles[1]
  cardElement.appendChild(showVenueTitle)

  const showVenue = createElementWithClass('h3', 'shows-venue')
  showVenue.innerText = show.venue
  cardElement.appendChild(showVenue)

  const showsLocationTitle = createElementWithClass('p', 'shows--location-t')
  showsLocationTitle.innerText = titles[2]
  cardElement.appendChild(showsLocationTitle)

  const showsLocation = createElementWithClass('h3', 'shows--location')
  showsLocation.innerText = show.location
  cardElement.appendChild(showsLocation)

  const showButton = createElementWithClass('button', 'shows--button')
  showButton.innerText = 'BUY TICKETS'
  cardElement.appendChild(showButton)

  return cardElement

}

// Function to create an element with a specified class name 
function createElementWithClass(elementName, className){
    const element = document.createElement(elementName)
    element.classList.add(className)

    return element
}

//  <h2 class="shows-h2">Shows</h2>
// <div class="shows__event">
//       <p class="shows--date-t">DATE</p>
//       <h3 class="shows--date">Mon Sept 09 2024</h3>
//       <p class="shows--venue-t">VENUE</p>
//       <h3 class="shows--venue">Ronald Lane</h3>
//       <p class="shows--location-t">LOCATION</p>
//       <h3 class="shows--location">San Francisco, CA</h3>
//       <button class="shows--button">BUY TICKETS</button>
// </div> 