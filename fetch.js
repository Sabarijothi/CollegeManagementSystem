

function dataStudent(){
    let student1 = document.characterSet('String');
}

function td_func() {
    var td = document.createElement('tr');
    td.innerHTML = `
    <td>
        <div class="data">sabari</div>
    </td>
    <td>
        <div class="data">sabari@gmail.com</div>
    </td>
    <td>
        <div class="data">25000</div>
    </td>
    <td>
        <div class="data">16/06/2000</div>
    </td>
    `;
    return td
}

// var tbody = document.getElementById('tbod')

// tbody.append(td_func());
// // data_fetch()

// fetch("http://localhost:3000/students")
// .then(response=>console.log(response))
// .then(json=>{
//     json.map(data=>{
//         console.log(data)
//     })
// })

fetch("http://localhost:3000/students")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#tbod");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.name}</td>
            <td>${product.email}</td>
            <td>${product.fees}</td>
            <td>${product.dob}</td>
            <td>${product.productCode}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});