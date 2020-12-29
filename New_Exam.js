var question = 2;


function addQuestion(){
    var stg_ques = question.toString()
    var formID = document.getElementById("ques_form");

    var ques_div = document.createElement("div");
    ques_div.setAttribute("class","ques_div");

    var ques_no_div = document.createElement("div");
    ques_no_div.setAttribute("class","ques_no_div");
    ques_no_div.innerText = "Q" + stg_ques;

    // ---------creating question input field------------
    var ques = document.createElement("div");
    ques.setAttribute("class","ques");
    
    var ques_input = document.createElement("input");
    ques_input.setAttribute("type","text");
    ques_input.setAttribute("id","ques_input"+stg_ques);
    ques_input.setAttribute("class","ques_input");
    ques_input.setAttribute("placeholder","Enter a question.......");
    ques.appendChild(ques_input);

    //---------------- creating answer_type field--------------
    var array = ["checkbox","radio","text"];
    var text_array = ["Multiple Ans", "Single Ans", "Paragraph"]

    var sel = document.createElement("select");
    sel.setAttribute("class","ans");
    sel.setAttribute("id","ques_type"+stg_ques);

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

    var option_1 = document.createElement("input");
    option_1.setAttribute("type","text");
    option_1.setAttribute("class","answer");
    option_1.setAttribute("id","ans-"+stg_ques+"1");

    var option_2 = document.createElement("input");
    option_2.setAttribute("type","text");
    option_2.setAttribute("class","answer");
    option_2.setAttribute("id","ans-"+stg_ques+"2");

    var option_3 = document.createElement("input");
    option_3.setAttribute("type","text");
    option_3.setAttribute("class","answer");
    option_3.setAttribute("id","ans-"+stg_ques+"3");

    var option_4 = document.createElement("input");
    option_4.setAttribute("type","text");
    option_4.setAttribute("class","answer");
    option_4.setAttribute("id","ans-"+stg_ques+"4");

    // // var myParent = document.body;text

    question = question + 1;

    // --------------- appending child to parents--------------------
    ques_div.appendChild(ques_no_div);
    ques_div.appendChild(ques);
    ques_div.append(sel);
    formID.appendChild(ques_div);
    formID.append(option_1);
    formID.append(option_2);
    formID.append(option_3);
    formID.append(option_4);
}

// function submitted(){
//     alert("Form Submitted");
// }