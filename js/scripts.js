// THIS SECTION IS FOR THE ESSAY FUNCTIONS -----------------------------------------------------------------


const criteria = {
    1: "This is an example of rudimentary work,",
    2: "This is an example of rudimentary work,",
    3: "This is an example of basic work,",
    4: "This is an example of basic work,",
    5: "This is an example of satisfactory work,",
    6: "This is an example of satisfactory work,",
    7: "This is an example of good work,",
    8: "This is an example of good work,",
    9: "This is an example of excellent work,",
    10: "This is an example of excellent work,",
};

// TITLE
const criteria1 = {
    1: "the essay has a discussion that is weakly connected to the title and",
    2: "the essay has a discussion that is weakly connected to the title and",
    3: "the essay has a discussion that is connected to the title and",
    4: "the essay has a discussion that is connected to the title and",
    5: "the essay has a discussion that is mostly focused on the title and",
    6: "the essay has a discussion that is mostly focused on the title and",
    7: "the essay has a discussion that is focused on the title and",
    8: "the essay has a discussion that is focused on the title and",
    9: "the essay has a discussion that has a sustained focus on the title and",
    10: "the essay has a discussion that has a sustained focus on the title and",
};

//LINKS TO AOKS
const criteria2 = {
    1: "links to AOKs but is not relevant.",
    2: "links to AOKs but is not relevant.",
    3: "makes superficial or limited links to the AOKs.",
    4: "makes superficial or limited links to the AOKs.",
    5: "is developed with some links to the AOKs.",
    6: "is developed with some links to the AOKs.",
    7: "is mostly linked to the AOKs.",
    8: "is mostly linked to the AOKs.",
    9: "is linked effectively to the AOKs.",
    10: "is linked effectively to the AOKs.",
};

//SUPPORTED ARGUMENTS
const criteria3 = {
    1: "The student is mostly descriptive with little arguments,",
    2: "The student is mostly descriptive with little arguments,",
    3: "Limited arguments are offered by the student,",
    4: "Limited arguments are offered by the student,",
    5: "General arguments are offered by the student,",
    6: "General arguments are offered by the student,",
    7: "Arguments are clear, coherent,",
    8: "Arguments are clear, coherent,",
    9: "Arguments that are offered are clear, coherent, and convincing,",
    10: "Arguments that are offered are clear, coherent, and convincing,",
};

//EXAMPLES
const criteria4 = {
    1: "and the examples (such as ) are ineffective.",
    2: "and the examples (such as ) are ineffective.",
    3: "and the examples (such as ) are not effective in supporting the claims.",
    4: "and the examples (such as ) are not effective in supporting the claims.",
    5: "and are mostly supported by examples (such as ).",
    6: "and are mostly supported by examples (such as ).",
    7: "and are well supported by examples (such as ).",
    8: "and are well supported by examples (such as ).",
    9: "and are effectively supported by specific examples (such as ).",
    10: "and are effectively supported by specific examples (such as ).",
};

//EVALUATION OF PERSECTIVES
const criteria5 = {
    1: "There is no awareness of differing viewpoints and the only offers vague descriptions of examples.",
    2: "There is no awareness of differing viewpoints and the only offers vague descriptions of examples..",
    3: "There is limited awarenss of differing viewpoints.",
    4: "There is limited awarenss of differing viewpoints.",
    5: "The student attempts to show some awareness of different viewpoints, though lacks in certain areas.",
    6: "The student attempts to show some awareness of different viewpoints, though lacks in certain areas.",
    7: "The student does well in presenting an awareness and shows some evaluation of differing viewpoints.",
    8: "The student does well in presenting an awareness and shows some evaluation of differing viewpoints.",
    9: "The student does excellent in presenting a clear awareness and evaluation of differing viewpoints.",
    10: "The student does excellent in presenting a clear awareness and evaluation of differing viewpoints.",
};

//Implications
const criteria6 = {
    1: "The student does not address the implications of their arguments.",
    2: "The student does not address the implications of their arguments.",
    3: "The student does not address the implications of their arguments.",
    4: "The student does not address the implications of their arguments.",
    5: "The student does not address the implications of their arguments.",
    6: "The student does not address the implications of their arguments.",
    7: "The student attempts to identify the implications.",
    8: "The student attempts to identify the implications.",
    9: "The student does a good job identifying the implications of the arguments are considered",
    10: "The student does a good job identifying the implications of the arguments are considered",
};

function showText() {
    const userInput = document.getElementById("userInput").value;
    const outputText = criteria[userInput] || "Please enter a number between 1 and 10!";
    document.getElementById("output").innerHTML = outputText;
}

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

function calculateAverage() {
    const userInput1 = document.getElementById("userInput1").value;
    const userInput2 = document.getElementById("userInput2").value;
    const userInput3 = document.getElementById("userInput3").value;
    const userInput4 = document.getElementById("userInput4").value;
    const userInput5 = document.getElementById("userInput5").value;
    const userInput6 = document.getElementById("userInput6").value;
  
    const totalScore = parseInt(userInput1) + parseInt(userInput2) + parseInt(userInput3) + parseInt(userInput4) + parseInt(userInput5) + parseInt(userInput6);
    const averageScore = Math.floor(totalScore / 6);
  
    document.getElementById("averageOutput").innerHTML = `Based on the feedback, this essay earned a ${averageScore}.`;
  }

function resetButton() {
    document.getElementById("userInput").value = "";
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput2").value = "";
    document.getElementById("userInput3").value = "";
    document.getElementById("userInput4").value = "";
    document.getElementById("userInput5").value = "";
    document.getElementById("userInput6").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output1").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
    document.getElementById("output3").innerHTML = "";
    document.getElementById("output4").innerHTML = "";
    document.getElementById("output5").innerHTML = "";
    document.getElementById("output6").innerHTML = "";
    document.getElementById("averageOutput").innerHTML = "";
  }


// THIS SECTION IS FOR THE EXHIBIT FUNCTIONS -----------------------------------------------------------------


const exhibitCriteria = {
    1: "The exhibit does a rudimentary job at showing how TOK manifests in the world around us.",
    2: "The exhibit does a rudimentary job at showing how TOK manifests in the world around us.",
    3: "The exhibit does a basic job at showing how TOK manifests in the world around us.",
    4: "The exhibit does a basic job at showing how TOK manifests in the world around us.",
    5: "The exhibit does a satisfactory job at showing how TOK manifests in the world around us.",
    6: "The exhibit does a satisfactory job at showing how TOK manifests in the world around us.",
    7: "The exhibit does a good job at showing how TOK manifests in the world around us.",
    8: "The exhibit does a good job at showing how TOK manifests in the world around us.",
    9: "The exhibit does an excellent job at showing how TOK manifests in the world around us.",
    10: "The exhibit does an excellent job at showing how TOK manifests in the world around us.",
};

// OBJECTS AND RLS
const exhibitCriteria1 = {
    1: "The student presents three objects, but the real-world context of these objects are not stated, and the images presented (such as) may be highly generic images of types of objects rather than a specific real-world object.",
    2: "The student presents three objects, but the real-world context of these objects are not stated, and the images presented (such as) may be highly generic images of types of objects rather than a specific real-world object.",
    3: "The student identifies three objects (), although the real-world contexts of the objects are implied rather than explicitly stated.",
    4: "The student identifies three objects (), although the real-world contexts of the objects are implied rather than explicitly stated.",
    5: "The student identifies three objects (), although the real-world context of these objects are vaguely and imprecisely stated.",
    6: "The student identifies three objects (), although the real-world context of these objects are vaguely and imprecisely stated.",
    7: "The student identified three objects () and their real-world context.",
    8: "The student identified three objects () and their real-world context.",
    9: "The student clearly identifies three objects () and their specific real-world context.",
    10: "The student clearly identifies three objects () and their specific real-world context.",
};

//LINKS BETWEEN OBJECTS AND PROMPT
const exhibitCriteria2 = {
    1: "Links between the objects and the selected IA prompt are made, but these are minimal and tenuous; additionally, it is not clear what the student is trying to convey.",
    2: "Links between the objects and the selected IA prompt are made, but these are minimal and tenuous; additionally, it is not clear what the student is trying to convey.",
    3: "Basic links between the objects and the selected IA prompt are made, but the explanation of these links is unconvincing and a bit unfocused.",
    4: "Basic links between the objects and the selected IA prompt are made, but the explanation of these links is unconvincing and a bit unfocused.",
    5: "There is some explanation of the links between the three objects and the selected IA prompt.",
    6: "There is some explanation of the links between the three objects and the selected IA prompt.",
    7: "Links between each of the three objects and the selected IA prompt are explained, although this explanation may lack precision and clarity in parts (such as).",
    8: "Links between each of the three objects and the selected IA prompt are explained, although this explanation may lack precision and clarity in parts (such as).",
    9: "Links between each of the three objects and the selected IA prompt are clearly made and well-explained.",
    10: "Links between each of the three objects and the selected IA prompt are clearly made and well-explained.",
};

//JUSTIFICATION FOR INCLUSION
const exhibitCriteria3 = {
    1: "The student offers very little justification offered for the inclusion of each object in the exhibition.",
    2: "The student offers very little justification offered for the inclusion of each object in the exhibition.",
    3: "The student offers superficial justification for the inclusion of each object in the exhibition.",
    4: "The student offers superficial justification for the inclusion of each object in the exhibition.",
    5: "The student offers some justification for the inclusion of each object in the exhibition.",
    6: "The student offers some justification for the inclusion of each object in the exhibition.",
    7: "The student offers justification for the contribution that each individual object makes to the exhibition.",
    8: "The student offers justification for the contribution that each individual object makes to the exhibition.",
    9: "The student offers strong justification of a particular contribution that each individual object makes to the exhibition.",
    10: "The student offers strong justification of a particular contribution that each individual object makes to the exhibition.",
};

//EVIDENCE
const exhibitCriteria4 = {
    1: "The commentary on the object is highly descriptive and consists only of unsupported assertions. Overall, the exhibition is",
    2: "The commentary on the object is highly descriptive and consists only of unsupported assertions. Overall, the exhibition is",
    3: "Reasons for the inclusion of the objects are offered, but these are not supported by appropriate evidence and lack of relevance to the selected IA prompt; additionally, there is repetition across the justifications of the different objects. Overall, the exhibition is",
    4: "Reasons for the inclusion of the objects are offered, but these are not supported by appropriate evidence and lack of relevance to the selected IA prompt; additionally, there is repetition across the justifications of the different objects. Overall, the exhibition is",
    5: "Some of the sutdnet's points are supported by evidence and reference to the selected IA prompt. Overall, the exhibition is",
    6: "Some of the student's points are supported by evidence and reference to the selected IA prompt. Overall, the exhibition is",
    7: "Many of the studnet's points are supported by appropriate evidence and references to the selected IA prompt. Overall, the exhibition is",
    8: "Many of the student's points are supported by appropriate evidence and references to the selected IA prompt. Overall, the exhibition is",
    9: "All of the student's points are well-supported by appropriate evidence and explicit reference to all selected IA prompts. Overall, the exhibition is",
    10: "All of the student's points are well-supported by appropriate evidence and explicit reference to all selected IA prompts. Overall, the exhibition is",
};

function showExhibitText() {
    const userExhibitInput = document.getElementById("userExhibitInput").value;
    const outputExhibitText = exhibitCriteria[userExhibitInput] || "Please enter a number between 1 and 10!";
    document.getElementById("outputExhibit").innerHTML = outputExhibitText;
}

function showExhibitText1() {
    const userExhibitInput = document.getElementById("userExhibitInput1").value;
    const outputExhibitText = exhibitCriteria1[userExhibitInput] || "Please enter a number between 1 and 10!";
    document.getElementById("outputExhibit1").innerHTML = outputExhibitText;
}

function showExhibitText2() {
    const userExhibitInput = document.getElementById("userExhibitInput2").value;
    const outputExhibitText = exhibitCriteria2[userExhibitInput] || "Please enter a number between 1 and 10!";
    document.getElementById("outputExhibit2").innerHTML = outputExhibitText;
}

function showExhibitText3() {
    const userExhibitInput = document.getElementById("userExhibitInput3").value;
    const outputExhibitText = exhibitCriteria3[userExhibitInput] || "Please enter a number between 1 and 10!";
    document.getElementById("outputExhibit3").innerHTML = outputExhibitText;
}

function showExhibitText4() {
    const userExhibitInput = document.getElementById("userExhibitInput4").value;
    const outputExhibitText = exhibitCriteria4[userExhibitInput] || "Please enter a number between 1 and 10!";
    document.getElementById("outputExhibit4").innerHTML = outputExhibitText;
}

function calculateExhibitAverage() {
    const userExhibitInput1 = document.getElementById("userExhibitInput1").value;
    const userExhibitInput2 = document.getElementById("userExhibitInput2").value;
    const userExhibitInput3 = document.getElementById("userExhibitInput3").value;
    const userExhibitInput4 = document.getElementById("userExhibitInput4").value;
  
    const totalExhibitScore = parseInt(userExhibitInput1) + parseInt(userExhibitInput2) + parseInt(userExhibitInput3) + parseInt(userExhibitInput4);
    const averageExhibitScore = Math.floor(totalExhibitScore / 4);
  
    document.getElementById("averageExhibitOutput").innerHTML = `Based on the feedback, this exhibit should earned a ${averageExhibitScore}.`;
  }

function resetExhibitButton() {
    document.getElementById("userExhibitInput").value = "";
    document.getElementById("userExhibitInput1").value = "";
    document.getElementById("userExhibitInput2").value = "";
    document.getElementById("userExhibitInput3").value = "";
    document.getElementById("userExhibitInput4").value = "";
    document.getElementById("outputExhibit").innerHTML = "";
    document.getElementById("outputExhibit1").innerHTML = "";
    document.getElementById("outputExhibit2").innerHTML = "";
    document.getElementById("outputExhibit3").innerHTML = "";
    document.getElementById("outputExhibit4").innerHTML = "";
    document.getElementById("averageExhibitOutput").innerHTML = "";
  }