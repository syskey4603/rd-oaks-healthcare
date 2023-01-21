function analyzesymptoms(query) {
    var returntext = '';
    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/completions");
    oHttp.setRequestHeader("Accept", "application/json");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer " + "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")

    oHttp.onreadystatechange = function () {
        if (oHttp.readyState === 4) {
            var oJson = {}

            try {
                oJson = JSON.parse(oHttp.responseText);
            } catch (ex) {
                returntext += "Error: " + ex.message
            }
            if (oJson.choices && oJson.choices[0].text) {
                var s = oJson.choices[0].text;

                if (s == "") s = "No response";
                returntext += "" + s;
                document.getElementById('diagnosis').innerHTML = returntext;

                
            }            
        }
    };

    var sModel = "text-davinci-003";
    var iMaxTokens = 2048;
    var sUserId = "1";
    var dTemperature = 0.5;    

    var data = {
        model: sModel,
        prompt: "my symptoms are " + query + " what are the possible diseases and which specialist should be consulted",
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


function diagnoseproblem() {
    analyzesymptoms(document.getElementById('symptoms').value);

}