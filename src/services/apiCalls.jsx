function createPost(postData){
    return fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    }).then(res=>{res.json()})
    .then(data=>console.log("created post data", data))
}
createPost({})