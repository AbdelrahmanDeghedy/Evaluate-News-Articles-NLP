async function handleSubmit() {
  let articleUrl = document.getElementById('article-url').value;
 

  if(Client.checkURL (articleUrl)) {
    console.log("::: Form Submitted :::")
    let fetchedData = await fetch('http://localhost:8081/api',{
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        body: JSON.stringify({articleUrl})    
    });
    fetchedData = await fetchedData.json ();
    document.getElementById('agreement').textContent = `Agreement: ${fetchedData.agreement}`;
        document.getElementById('confidence').textContent = `Confidence: ${fetchedData.confidence}`;
        document.getElementById('score_tag').textContent = `Score tag: ${fetchedData.score_tag}`;  
        document.getElementById('subjectivity').textContent = `Subjectivity ${fetchedData.subjectivity}`;
        document.getElementById('irony').textContent = `Irony: ${fetchedData.irony}`;
 }
 else {
     alert('Enter a correct URL');
 }
}

export { handleSubmit }