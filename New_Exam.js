var question = 1;

function addQuestion(){
    var formID = document.getElementById("ques_form");

    var ques_div = document.createElement("div");
    ques_div.setAttribute("class","ques_div");

    var ques_no_div = document.createElement("div");
    ques_no_div.setAttribute("class","ques_no_div");
    ques_no_div.innerText = "Q" + question.toString();

    // ---------creating question input field------------
    var ques = document.createElement("div");
    ques.setAttribute("class","ques");
    
    var ques_input = document.createElement("input");
    ques_input.setAttribute("type","text");
    ques_input.setAttribute("id","ques_input"+question.toString());
    ques_input.setAttribute("class","ques_input");
    ques_input.setAttribute("placeholder","    Enter a question.......");
    ques.appendChild(ques_input);

    //---------------- creating answer_type field--------------
    var array = ["checkbox","radio","text"];
    var text_array = ["Multiple Ans", "Single Ans", "Paragraph"]

    var sel = document.createElement("select");
    sel.setAttribute("class","ans");
    sel.setAttribute("id","ques_type"+question.toString());

    var option = document.createElement("option");
    option.setAttribute("disabled","");
    option.setAttribute("selected","");
    option.text="Answer Type";
    sel.appendChild(option);

    for(var i=0;i<array.length;i++){
        var option = document.createElement("option");
        option.setAttribute("value",array[i]);
        option.text = text_array[i];
        sel.appendChild(option);
    }

    // var ques = document.createElement("input");
    // ques.setAttribute("type","text");
    // ques.setAttribute("placeholder","Enter Question.....");
    // ques.setAttribute("class","questions-"+question);

    // var ques_class = document.createElement("div");
    // ques_class.setAttribute("class","Question");
    // ques_class.appendChild(ques);
    // // formID.appendChild(ques_class);

    // var option_1 = document.createElement("input");
    // option_1.setAttribute("type","text");
    // option_1.setAttribute("class","answer");

    // var option_2 = document.createElement("input");
    // option_2.setAttribute("type","text");
    // option_2.setAttribute("class","answer");

    // var option_3 = document.createElement("input");
    // option_3.setAttribute("type","text");
    // option_3.setAttribute("class","answer");
    
    // var option_4 = document.createElement("input");
    // option_4.setAttribute("type","text");
    // option_4.setAttribute("class","answer");

    // var ques_ans_div = document.getElementById("Question-Answer");
    // ques_ans_div.append(ques);
    // ques_ans_div.append(option_1);
    // ques_ans_div.append(option_2);
    // ques_ans_div.append(option_3);
    // ques_ans_div.append(option_4);

    // // var myParent = document.body;text

    question = question + 1;

    // --------------- appending child to parents--------------------
    ques_div.appendChild(ques_no_div);
    ques_div.appendChild(ques);
    ques_div.append(sel);
    formID.appendChild(ques_div);

}