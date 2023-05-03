// Get the modal
var sliderModal = document.getElementById('mySliderModal')

// Get the modal
var shareModal = document.getElementById('myShareModal')

// Get the modal
var zoomModal = document.getElementById('myZoomModal')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the modal
function openZoomModal() {
  zoomModal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
function closeZoomModal() {
  zoomModal.style.display = 'none'
}

// When the user clicks the button, open the modal
function openSliderModal() {
  sliderModal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
function closeSliderModal() {
  sliderModal.style.display = 'none'
}

// When the user clicks the button, open the modal
function openShareModal() {
  shareModal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
function closeShareModal() {
  shareModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sliderModal) {
    sliderModal.style.display = 'none'
  }

  if (event.target == shareModal) {
    shareModal.style.display = 'none'
  }

  if (event.target == zoomModal) {
    zoomModal.style.display = 'none'
  }
}

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: (index, className) => {
      const slideImg = document.querySelectorAll('.swiper-slide img')[index]
      const imgSrc = slideImg.getAttribute('src')
      return `<img class="${className}" title="property photo ${index}" src="${imgSrc}"/ alt="swiper-image-slide-pagination - ${index}">`
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// Copy to clipboard functionallity
function copyToClipboard() {
  var copyText = document.createElement('input')
  copyText.setAttribute('value', window.location.href)
  document.body.appendChild(copyText)
  copyText.select()
  document.execCommand('copy')
  document.body.removeChild(copyText)
  alert('Link copied to clipboard!')
}

/* Zoom Image Grid */
const zoomableImages = document.querySelectorAll('.zoomable-image')
zoomableImages.forEach((image) => {
  if (image.dataset.zoomable) {
    image.addEventListener('click', () => {
      const previewImage = document.querySelector('#image-preview img')
      previewImage.src = image.src
      previewImage.alt = image.alt
      openZoomModal()
    })
  }
})
