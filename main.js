

    // GET REQUEST
function getTodos() {
   axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/todos',
    params:{
        _limit:5
    }
   }).then(a=>showOutput(a))
   .catch((err)=>console.log(err));
  }
  
  // POST REQUEST
  function addTodo() {
    axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            name:"pr",
            title:"raj",
            completed:true
        }
       }).then(a=>showOutput(a));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
       axios({
        method:'patch',
        url:'https://jsonplaceholder.typicode.com/todos/1',
        data:{
            name:"prj",
            title:"raksjj",
            completed:true
        }
       }).then(a=>showOutput(a));
       axios({
        method:'put',
        url:'https://jsonplaceholder.typicode.com/todos/1',
        data:{
            name:"pr",
            title:"rakj",
            completed:true
        }
       }).then(a=>showOutput(a));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios({
        method:'delete',
        url:'https://jsonplaceholder.typicode.com/todos/1'
       }).then(a=>showOutput(a));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/todos',
        params:{
            _limit:5
        }}),
            axios({
                method:'get',
                url:'https://jsonplaceholder.typicode.com/posts',params:{
                    _limit:3
                }})

    ]).then(axios.spread((todos,posts)=>showOutput(posts)));    
    }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const p={
        headers:{
            'content-type':'application/json'
        }
    }
    axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            name:"pr",
            title:"raj",
            completed:true
        }
       },p).then(a=>showOutput(a)); 
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const option={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            name:"pr",
            title:"raj",
            completed:true
        },
        transformResponse:axios.defaults.transformResponse.concat(data=>{
            data.name=data.name.toUpperCase()
            return data
        })
    }
        axios(option).then(a=>showOutput(a)); 
  
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use(
    config=>{
        return config;
    }
  )
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
