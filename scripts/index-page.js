import bandSiteApi from "./band-site-api.js";

//Main box for the comments
const commentsList = document.querySelector('.comments-list')
// console.log(commentsList)

    //Get comments method from bandsiteapi class
    let comments = await bandSiteApi.getComments();
    // console.log('Comments:', comments);

   // Sort the comments array by timestamp in descending order (latest comment first)
  comments.sort((a, b) => b.timestamp - a.timestamp);

  comments.forEach(comment => {
    comment.timestamp = formatDate(comment.timestamp);
  });

  comments.forEach(comment => {
    // Create the main card div
    const cardElement = createCardElement(comment);
    commentsList.appendChild(cardElement);
  });

// Function to format timestamp to DD/MM/YYYY format
function formatDate(timestamp){
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`
}


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
 cardCommentText.innerText = comment.comment
 cardCommentContent.appendChild(cardCommentText)

 //Create a div for like and delete
 const likeNDeleteDiv = createElementWithClass('div', 'likeNdelete--div')
 cardCommentContent.appendChild(likeNDeleteDiv)

 //like and delete div
//  const likeElement = createElementWithClass('button', 'like--el')
//  likeElement.innerText = 'Like'
//  likeNDeleteDiv.appendChild(likeElement)

 const deleteElement = createElementWithClass('button', 'delete--el')
 deleteElement.setAttribute('data-comment-id', comment.id)
 deleteElement.innerText = 'Delete'
 likeNDeleteDiv.appendChild(deleteElement)

 //creating h3 element that goes inside cardCommentMeta div
 const cardCommentAuthor = createElementWithClass('h3', 'card__comment--author')
 cardCommentAuthor.innerText = comment.name
 cardCommentMeta.appendChild(cardCommentAuthor)
 //Creating p element that goes inside cardCommentMeta div
 const cardCommentDate = createElementWithClass('p', 'card__comment-date')
 cardCommentDate.innerText = comment.timestamp
 cardCommentMeta.appendChild(cardCommentDate)

 return cardElement
  
}

//Function for deleting comments
// const deleteButton = document.querySelector('.delete--el')

//Function for deleting comments
commentsList.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete--el')) {
    const commentId = event.target.getAttribute('data-comment-id');

    try {
      let deletedComments = await bandSiteApi.deleteComments(commentId);
      // console.log(deletedComments);

      if (deletedComments){
         commentsList.innerHTML = ''
         
         comments = comments.filter(comment => comment.id !== deletedComments.id)
         comments.sort((a, b) => b.timestamp - a.timestamp);
         comments.timestamp = formatDate(comments.timestamp)

         comments.forEach(comment => {
          comment.timestamp = formatDate(comment.timestamp)
          const cardElement = createCardElement(comment);
          commentsList.appendChild(cardElement);
        });
        
      }
      
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  }
});








function createElementWithClass(elementName, className) {
   const element = document.createElement(elementName)
   element.classList.add(className)

   return element
}

//function for form section | submitting

const form = document.querySelector('.comment__form')
const input = document.querySelector('.comment__input')
const textarea = document.querySelector('.comment__textarea')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
    //Create a new comment object
    const newObject = {
      "name": form.elements.name.value,
      "comment": form.elements.comment.value
    }
    try{
    //Post comment method from bandsiteapi class
    const commentResponse = await  bandSiteApi.postComment(newObject);
    console.log('Comment response:', commentResponse);

    comments = await bandSiteApi.getComments();
    comments.sort((a, b) => b.timestamp - a.timestamp);
  

    try{
      if(commentResponse){
        commentResponse.timestamp = formatDate(commentResponse.timestamp)
        const newResponse = createCardElement(commentResponse)
        commentsList.prepend(newResponse)
      }
    }catch(error){
      console.log('error here')
    }
   

    // Reset the form after successful submission
    form.reset();
    

    }catch(error){
      console.error(`Error posting comment: ${error}`) 
    }
    
    form.reset()   
})










