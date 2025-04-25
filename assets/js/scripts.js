
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}
    