/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const numInput = document.getElementById("num-input")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const btn = document.getElementById("btn")
let lengthmeter = 0
let lengthfeet = 0
let volumeliter = 0
let volumegallons = 0
let masskilo = 0
let masspounds = 0
let val = ""

btn.addEventListener("click", function () {
    val = Number(numInput.value)
    console.log(btn)
    console.log(val)
    lengthmeter = (val / 3.281)
    lengthfeet = val * 3.281
    volumeliter = (val / 0.264)
    volumegallons = val * 0.264
    masskilo = (val / 2.204)
    masspounds = val * 2.204
    render()
})

function render() {
    lengthOutput.textContent = `${val} meters = ${lengthfeet.toFixed(3)} feet | ${val} feet = ${lengthmeter.toFixed(3)} meters`
    volumeOutput.textContent = `${val} liters = ${volumegallons.toFixed(3)} gallons | ${val} gallons = ${volumeliter.toFixed(3)} liters`
    massOutput.textContent = `${val} kilos = ${masspounds.toFixed(3)} pounds | ${val} pounds = ${masskilo.toFixed(3)} kilos`
}

