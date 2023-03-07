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
  
  const criteria3 = {
    "1": "Mostly descriptive with little arguments",
    "2": "Mostly descriptive with little arguments",
    "3": "Limited arguments are offered",
    "4": "Limited arguments are offered",
    "5": "General arguments are offered",
    "6": "General arguments are offered",
    "7": "Arguments are clear, coherent",
    "8": "Arguments are clear, coherent",
    "9": "Arguments are clear, coherent, and convincing",
    "10": "Arguments are clear, coherent, and convincing",
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