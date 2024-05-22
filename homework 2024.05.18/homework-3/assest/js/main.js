const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const shift_btn = document.querySelector('.shift')
const shift_btn2 = document.querySelector('.shift-2')
const space_btn = document.querySelector('.space')
const space_btn1 = document.querySelector('.space-1')

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

space_btn1.addEventListener('click', () => {
  chars.push('  ')
  textarea.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

shift_btn2.addEventListener('click', () => {
  buttons.forEach(btn2 => {
      btn2.classList.toggle('upper')
  })
})