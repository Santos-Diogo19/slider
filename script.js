const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')

const container = document.querySelector('.container')
const list = document.querySelector('.container .list')
const thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => movItemsOnClick('next')
btnBack.onclick = () => movItemsOnClick('back')


function movItemsOnClick(type) {

    const listItems = document.querySelectorAll('.list .list-item')
    const thumbItems = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[listItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000)
}

