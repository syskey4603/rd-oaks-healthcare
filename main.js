function getanalysis(entertedsymptoms) {
    var returnedtext = '';
    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/completions");
    oHttp.setRequestHeader("Accept", "application/json");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer " + "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")

    


}