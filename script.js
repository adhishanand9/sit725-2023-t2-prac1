function changeText()
{
    var textsArray = ["Random Text 1"," New Text 2", " Amazing Text 3", " Great Text 4", "Hello Text 5"]
    var number = getRandomNumberBetween(0,textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
    }
function getRandomNumberBetween(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
    }