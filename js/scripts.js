function showText1() {
    var userInput = document.getElementById("userInput1").value;
    var outputText = "";
    switch (userInput) {
        case "1":
            outputText = "The essay has a discussion is weakly connected to the title and";
            break;
        case "2":
            outputText = "The essay has a discussion is weakly connected to the title and";
            break;
        case "3":
            outputText = "The essay has a discussion is connected to the title and";
            break;
        case "4":
            outputText = "The essay has a discussion is connected to the title and";
            break;
        case "5":
            outputText = "The essay has a discussion is mostly focused on the title and";
            break;
        case "6":
            outputText = "The essay has a discussion is mostly focused on the title and";
            break;
        case "7":
            outputText = "The essay has a discussion is focused on the title and";
            break;
        case "8":
            outputText = "The essay has a discussion is focused on the title and";
            break;
        case "9":
            outputText = "The essay has a discussion has a sustained focus on the title and";
            break;
        case "10":
            outputText = "The essay has a discussion has a sustained focus on the title and";
            break;
        default:
            outputText = "Please enter a number between 1 and 10!";
            break;
    }
    document.getElementById("output1").innerHTML = outputText;
}

function showText2() {
    var userInput = document.getElementById("userInput2").value;
    var outputText = "";
    switch (userInput) {
        case "1":
            outputText = "links to AOKs but is not relevant.";
            break;
        case "2":
            outputText = "links to AOKs but is not relevant.";
            break;
        case "3":
            outputText = "makes superficial or limited links to the AOKs.";
            break;
        case "4":
            outputText = "makes superficial or limited links to the AOKs.";
            break;
        case "5":
            outputText = "developed with some links to the AOKs.";
            break;
        case "6":
            outputText = "developed with some links to the AOKs.";
            break;
        case "7":
            outputText = "mostly linked effectively to the AOKs.";
            break;
        case "8":
            outputText = "mostly linked effectively to the AOKs.";
            break;
        case "9":
            outputText = "linked effectively to the AOKs.";
            break;
        case "10":
            outputText = "linked effectively to the AOKs.";
            break;
        default:
            outputText = "Please enter a number between 1 and 10!";
            break;
    }
    document.getElementById("output2").innerHTML = outputText;
}

function showText3() {
    var userInput = document.getElementById("userInput3").value;
    var outputText = "";
    switch (userInput) {
        case "1":
            outputText = "Mostly descriptive with little arguments";
            break;
        case "2":
            outputText = "Mostly descriptive with little arguments";
            break;
        case "3":
            outputText = "Limited arguments are offered";
            break;
        case "4":
            outputText = "Limited arguments are offered";
            break;
        case "5":
            outputText = "Generic arguments are offered";
            break;
        case "6":
            outputText = "Generic arguments are offered";
            break;
        case "7":
            outputText = "Arguments are clear, coherent";
            break;
        case "8":
            outputText = "Arguments are clear, coherent";
            break;
        case "9":
            outputText = "Arguments are clear, coherent, and convincing";
            break;
        case "10":
            outputText = "Arguments are clear, coherent, and convincing";
            break;
        default:
            outputText = "Please enter a number between 1 and 10!";
            break;
    }
    document.getElementById("output3").innerHTML = outputText;
}