const querySelected = function() {
  return document.querySelector('li.js-notification[aria-selected=true]')
}

const open = function(selected) {
  var target = selected.querySelector('a.js-notification-target')
  window.open(target.href, '_blank')
}

const mute = function(selected) {
  var muteButton = selected.querySelector('button.mute-note')
  muteButton.click()
}

document.body.addEventListener('keydown', function(ev) {
  var selected = querySelected()
  if (selected) {
    if (ev.key == 'w') open(selected)
    if (ev.key == 'q') mute(selected)
  }
})
