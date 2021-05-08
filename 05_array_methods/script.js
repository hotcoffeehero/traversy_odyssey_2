const main = document.getElementById('main')
const add_user_btn = document.getElementById('add-user')
const double_btn = document.getElementById('double')
const show_mllnrs_btn = document.getElementById('show-millionaires')
const sort_btn = document.getElementById('sort')
const calc_wealth_btn = document.getElementById('calculate-wealth')

let data = []

//Add new object to the data array

let add_data = async (obj) => {
  data.push(obj)
}

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

get_ran_user()
get_ran_user()
get_ran_user()
