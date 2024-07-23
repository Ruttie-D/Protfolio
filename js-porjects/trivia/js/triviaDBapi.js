let apiUrl;
let questions;

async function setUrl(type, level) {
    apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=${type}`
    const loadQuestions = await getData(apiUrl);
    questions = [...loadQuestions];

    // console.log(loadQuestions);
    console.log(loadQuestions[0].question);

    return questions;
};

async function getData(apiUrl) {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        return data.results;
    } catch (err) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


export { setUrl, getData };


