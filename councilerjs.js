function giveinfo(query1) {
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
                returntext += "error: " + ex.message
            }
            if (oJson.choices && oJson.choices[0].text) {
                var s = oJson.choices[0].text;

                
                returntext += "" + s;
                document.getElementById('printinfo').innerHTML = returntext;

                
            }            
        }
    };

    var sModel = "text-davinci-003";
    var iMaxTokens = 2048;
    var sUserId = "1";
    var dTemperature = 0.5;    

    var data = {
        model: sModel,
        prompt: "give me symptoms about " + query1 + " in the next paragraph tell me the specialist needed for the disease and a health plan that includes a diet and daily ruitine to reduce impacts of the disease after you get it ",
        max_tokens: iMaxTokens,
        user: sUserId,
        temperature:  dTemperature,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,  
        stop: ["#", ";"] 
    }

    document.getElementById('printinfo').innerHTML = "thinking...";
    oHttp.send(JSON.stringify(data));

}


function test123() {
    giveinfo(document.getElementById('information1').value);

}