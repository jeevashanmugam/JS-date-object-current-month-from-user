let user = parseInt(prompt("Enter the month in-between(0-11)"))

let dob = new Date();

dob.setMonth(user)
let getAns = dob.getMonth() + 1


if ((user < 0) || (user > 11)) {

    document.write(user + " It's a Invalid month");
}

else if ((getAns >= 0) || (getAns < 4)) {
    document.write(getAns + " Its a winter month");
}

else if ((getAns >= 5) || (getAns < 8)) {
    document.write(getAns + " Its a summer month");
}

else if ((getAns >= 8) || (getAns < 11)) {
    document.write(getAns + " Its a fall month");
}
