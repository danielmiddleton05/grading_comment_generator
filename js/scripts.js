// TITLE
const criteria1 = {
    "1": "The essay has a discussion that is weakly connected to the title and",
    "2": "The essay has a discussion that is weakly connected to the title and",
    "3": "The essay has a discussion is connected to the title and",
    "4": "The essay has a discussion is connected to the title and",
    "5": "The essay has a discussion is mostly focused on the title and",
    "6": "The essay has a discussion is mostly focused on the title and",
    "7": "The essay has a discussion is focused on the title and",
    "8": "The essay has a discussion is focused on the title and",
    "9": "The essay has a discussion has a sustained focus on the title and",
    "10": "The essay has a discussion has a sustained focus on the title and",
};

//LINKS TO AOKS
const criteria2 = {
    "1": "links to AOKs but is not relevant.",
    "2": "links to AOKs but is not relevant.",
    "3": "makes superficial or limited links to the AOKs.",
    "4": "makes superficial or limited links to the AOKs.",
    "5": "developed with some links to the AOKs.",
    "6": "developed with some links to the AOKs.",
    "7": "mostly linked effectively to the AOKs.",
    "8": "mostly linked effectively to the AOKs.",
    "9": "linked effectively to the AOKs.",
    "10": "linked effectively to the AOKs.",
};

//SUPPORTED ARGUMENTS
const criteria3 = {
    "1": "Mostly descriptive with little arguments,",
    "2": "Mostly descriptive with little arguments,",
    "3": "Limited arguments are offered,",
    "4": "Limited arguments are offered,",
    "5": "General arguments are offered,",
    "6": "General arguments are offered,",
    "7": "Arguments are clear, coherent,",
    "8": "Arguments are clear, coherent,",
    "9": "Arguments are clear, coherent, and convincing,",
    "10": "Arguments are clear, coherent, and convincing,",
};

//EXAMPLES
const criteria4 = {
    "1": "and the examples (such as ) are too decriptive and ineffective.",
    "2": "and the examples (such as ) are too decriptive and ineffective.",
    "3": "and the examples (such as ) are not effective in supporting the claims.",
    "4": "and the examples (such as ) are not effective in supporting the claims.",
    "5": "and are mostly supported by examples (such as ).",
    "6": "and are mostly supported by examples (such as ).",
    "7": "and are well supported by examples (such as ).",
    "8": "and are well supported by examples (such as ).",
    "9": "and are effectively supported by specific examples (such as ).",
    "10": "and are effectively supported by specific examples (such as ).",
};

//EVALUATION OF PERSECTIVES
const criteria5 = {
    "1": "There is no awareness of differing viewpoints.",
    "2": "There is no awareness of differing viewpoints.",
    "3": "There is limited awarenss of differing viewpoints.",
    "4": "There is limited awarenss of differing viewpoints.",
    "5": "The student attempts to show awareness of different viewpoints.",
    "6": "The student attempts to show awareness of different viewpoints.",
    "7": "The student does well in presenting an awareness and some evaluation of differing viewpoints.",
    "8": "The student does well in presenting an awareness and some evaluation of differing viewpoints.",
    "9": "The student does excellent in presenting a clear awareness and evaluation of differing viewpoints.",
    "10": "The student does excellent in presenting a clear awareness and evaluation of differing viewpoints.",
};

//Implications
const criteria6 = {
    "1": "The student does not address the implictions of their arguments.",
    "2": "The student does not address the implictions of their arguments.",
    "3": "The student does not address the implictions of their arguments.",
    "4": "The student does not address the implictions of their arguments.",
    "5": "The student does not address the implictions of their arguments.",
    "6": "The student does not address the implictions of their arguments.",
    "7": "The student does not address the implictions of their arguments.",
    "8": "The student attempts to identify the implications.",
    "9": "The student does a good job identifying the implications of the arguments are considered",
    "10": "",
};

function showText1() {
    const userInput = document.getElementById("userInput1").value;
    const outputText = criteria1[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output1").innerHTML = outputText;
}

function showText2() {
    const userInput = document.getElementById("userInput2").value;
    const outputText = criteria2[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output2").innerHTML = outputText;
}

function showText3() {
    const userInput = document.getElementById("userInput3").value;
    const outputText = criteria3[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output3").innerHTML = outputText;
}

function showText4() {
    const userInput = document.getElementById("userInput4").value;
    const outputText = criteria4[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output4").innerHTML = outputText;
}

function showText5() {
    const userInput = document.getElementById("userInput5").value;
    const outputText = criteria5[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output5").innerHTML = outputText;
}

function showText6() {
    const userInput = document.getElementById("userInput6").value;
    const outputText = criteria6[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output6").innerHTML = outputText;
}