const main = document.getElementById('main')
const add_user_btn = document.getElementById('add-user')
const double_btn = document.getElementById('double')
const show_mllnrs_btn = document.getElementById('show-millionaires')
const sort_btn = document.getElementById('sort')
const calc_wealth_btn = document.getElementById('calculate-wealth')

let data = []

//Fetch a random user and add money

let get_ran_user = async () => {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  const user = data.results[0]

  const new_user = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  }
  //   console.log(new_user)
  //   console.log(data)

  add_data(new_user)
}

//Add new object to the data array

let add_data = async (obj) => {
  data.push(obj)

  update_DOM()
}

// Update DOM with new random data
let update_DOM = (provided_data = data) => {
  //clear what's in the main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'
  provided_data.forEach((item) => {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<strong>${item.name}</strong>${format_money(
      item.money
    )}`
    main.appendChild(element)
  })
}

//Format the number as money
let format_money = (number) => {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

get_ran_user()
get_ran_user()
get_ran_user()

//Event listeners

add_user_btn.addEventListener('click', get_ran_user)
