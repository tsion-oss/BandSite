const comments = [
    {
      name: 'Victor Pinto',
      timestamps: '11/02/2023',
      text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'

    },
    {
        name: 'Christina Cabrera',
        timestamps: '10/28/2023',
        text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Isaac Tadesse',
        timestamps: '10/20/2023',
        text: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
    }
]


const commentsList = document.querySelector('.comments-list')
console.log(commentsList)


comments.forEach((comment) => {

 // Create the main card div
 const cardElement = createCardElement(comment)
 commentsList.appendChild(cardElement)

})

function createCardElement(comment) {

const cardElement = createElementWithClass('div', 'card')

 //Create img element that is inside the main card div
 const imgElement = createElementWithClass('img', 'card__comments-avatar')
  cardElement.appendChild(imgElement)

 
 const cardCommentContent = createElementWithClass('div', 'card__comment-content')
  cardElement.appendChild(cardCommentContent)

  // 
 const cardCommentMeta = createElementWithClass('div', 'card__comment-meta')
 cardCommentContent.appendChild(cardCommentMeta)

 //
 const cardCommentText = createElementWithClass('p', 'card__comment-text')
 cardCommentText.innerText = comment.text
 cardCommentContent.appendChild(cardCommentText)

 //creating h3 element that goes inside cardCommentMeta div
 const cardCommentAuthor = createElementWithClass('h3', 'card__comment--author')
 cardCommentAuthor.innerText = comment.name
 cardCommentMeta.appendChild(cardCommentAuthor)

 //Creating p element that goes inside cardCommentMeta div
 const cardCommentDate = createElementWithClass('p', 'card__comment-date')
 cardCommentDate.innerText = comment.timestamps
 cardCommentMeta.appendChild(cardCommentDate)

 return cardElement
  
}


function createElementWithClass(elementName, className) {
   const element = document.createElement(elementName)
   element.classList.add(className)

   return element
}

//function for form section | submitting

const form = document.querySelector('.comment__form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

    const time = Date.now()

    const date = new Date(time)

    //Extract day, month, and year
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    const formattedDate = `${formattedMonth}/${formattedDay}/${year}`

   
    //Create a new comment object
    const newObject = {
      name: form.elements.name.value,
      timestamps: formattedDate,
      text: form.elements.comment.value
    }

    // Push the comment object into the 'comments' array
    comments.push(newObject)

    //Create a new card element for the new comment and append it to the comments list
    const newCardElement = createCardElement(newObject)
    commentsList.appendChild(newCardElement)

    form.reset() 

  
})


//  <div class="card">
// <img src="" alt="card__avatar" class="card__comments-avatar">
// <div class="card__comment-content">
//     <div class="card__comment-meta">
//         <h3 class="card__comment--author">Victor Pinto</h3>
//         <p class="card__comment-date">11/02/2023</p>
//     </div>
// <p class="card__comment-text">
//         This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
// </div>
// </div> 

