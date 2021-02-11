// const closeModal = document.getElementById("close-modal")
// const openModal = document.getElementById("open-modal")
// const modal = document.getElementById("modal")
// const overlay = document.getElementById("overlay")

// openModal.addEventListener("click", () => {
//   overlay.style.display = "block"
// })

// closeModal.addEventListener("click", () => {
//   overlay.style.display = "none"
// })

//

document.getElementById("open-modal").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "block"
})
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none"
})
