import bandSiteApi from "./band-site-api.js"
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
//Get Shows method from bandsiteapi class
const shows = await bandSiteApi.getShows();
// console.log('Shows:', shows);
shows.forEach(show => {
    show.date = formatDate(show.date)
})
// Loop through each show object and create a card element for each
shows.forEach((show) => {
  const cardElement = createCardElement(show)
  showsFirstDiv.appendChild(cardElement)
})
  // Function to format timestamp to DD/MM/YYYY format
function formatDate(timestamp){
    const date = new Date(timestamp);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', ''); 
}
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
    showVenue.innerText = show.place
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
const showsEvent = document.querySelectorAll('.shows__event')
showsEvent.forEach(item => {
  item.addEventListener('click', () => {
      showsEvent.forEach(item => {
        item.classList.remove('selected')
      })

      item.classList.add('selected')
  })
})
