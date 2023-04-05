
//get template
export  async function FetchTemplate (htmlRelativeUrl, baseUrl) {
    const htmlUrl = await new URL(htmlRelativeUrl, baseUrl).href;
    return fetch(htmlUrl).then(response => response.text());
   

   
    // const xhr = new XMLHttpRequest();
    
    // // xhr.onreadystatechange = () => {
    // //   if (xhr.readyState == 4 && xhr.status == 200) {
    // //     console.log(xhr.response);
    // //   } else {
    // //     console.log(`Error: ${xhr.status}`);
    // //   }
    // // };
    
    // xhr.open("GET", htmlRelativeUrl);
    // xhr.send();
    // xhr.onload=()=>{
    //     alert(xhr.responseText);
    //  return   xhr.responseText;
    // }
      
}
