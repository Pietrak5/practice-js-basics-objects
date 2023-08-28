const user = {
	firstName: 'Adam',
	lastName: 'Nowak',
	born: {
		day: '28',
		month: '08',
		year: '1985',
	},
}

function whatDateToday(date) {
	const today = new Date()
	return date.getDate() === today.getDate() && date.getMonth() === today.getMonth()
}

const birthdate = new Date(
	parseInt(user.born.year),
	parseInt(user.born.month -1), 
	parseInt(user.born.day)
)

console.log(birthdate)

if (whatDateToday(birthdate)) {
	console.log(`Dzisiaj są urodziny ${user.firstName} ${user.lastName}`)
} else {
	console.log(`Dzisiaj nie są urodziny ${user.firstName} ${user.lastName}.`)
}
