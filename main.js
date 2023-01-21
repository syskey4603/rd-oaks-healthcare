function getanalysis(entertedsymptoms) {
    var returnedtext = '';
    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/completions");
    oHttp.setRequestHeader("Accept", "application/json");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer " + "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")

    var sModel = "text-davinci-003";
    var iMaxTokens = 2048;
    var sUserId = "1";
    var dTemperature = 0.5;    

    var data = {
        model: sModel,
        prompt: "my symptoms are " + entertedsymptoms + " what are the possible diseases and which specialist should be consulted",
        max_tokens: iMaxTokens,
        user: sUserId,
        temperature:  dTemperature,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,  
        stop: ["#", ";"] 
    }

    document.getElementById('diagnosis').innerHTML = "thinking...";
    oHttp.send(JSON.stringify(data));

}



