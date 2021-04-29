//changes heading
const hacked = document.querySelector('h1')
hacked.innerText="hacked"

//adds image to beginning
const image = document.createElement('img')
image.src=`https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png`
document.body.prepend(image)

// Deleting child p's of main
const toDelete = document.querySelectorAll('main > p')
toDelete[0].remove()
toDelete[1].remove()

// add <p> at the end that says my website has been compromised
const youHacked = document.createElement('p')
youHacked.innerText="You've been hacked, sorry not sorry"
document.body.append(youHacked)

// change counter to 0
const zero = document.querySelector('span')
zero.innerText="0"