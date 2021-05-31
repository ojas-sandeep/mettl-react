//get all Assessment
export const getAllAssessments = () =>{
    return fetch(`http://localhost:8090/mettl-api-intg/v1/getAllAssessments`,{
        method: "GET",
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}

export const SetAssessment = (formData) =>{
    return fetch(`http://localhost:8090/mettl-api-intg/v1/assessments`,{
        method: "POST",body: JSON.stringify(formData) ,headers: {'Content-type':'application/json'}
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}