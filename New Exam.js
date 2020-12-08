function addQuestion(){
    var ques = document.createElement("input");
    ques.setAttribute("type","text");
    ques.setAttribute("placeholder","Enter Question.....");
    ques.setAttribute("class","questions");

    var option_1 = document.createElement("input");
    option_1.setAttribute("type","text");
    option_1.setAttribute("class","answer");

    var option_2 = document.createElement("input");
    option_2.setAttribute("type","text");
    option_2.setAttribute("class","answer");

    var option_3 = document.createElement("input");
    option_3.setAttribute("type","text");
    option_3.setAttribute("class","answer");
    
    var option_4 = document.createElement("input");
    option_4.setAttribute("type","text");
    option_4.setAttribute("class","answer");

    var ques_ans_div = document.getElementById("Question-Answer");
    ques_ans_div.append(ques);
    ques_ans_div.append(option_1);
    ques_ans_div.append(option_2);
    ques_ans_div.append(option_3);
    ques_ans_div.append(option_4);
}