const car = {
    price: 1999,
    color: "red",
    noOfDoors: 5
}

if (car.price === 2000){
    console.log("You can buy this car");
}
else if (car.color === "red" && car.noOfDoors === 4){
    console.log("The color is red so you can buy");
}

else{
    console.log("You cannot buy this car. Keep Looking!!!");
}