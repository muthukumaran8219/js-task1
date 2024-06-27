let data = [];
let editIndex = -1;

        function save() {
            const name = document.getElementById('name').value.trim();
            const age = document.getElementById('age').value.trim();
            const error1 = document.getElementById('error1');
            const error2 = document.getElementById('error2');

            let errorMessage =''

            if (name === "") {

                errorMessage = 'Name is required!'
                error1.textContent = errorMessage;
            }
            
            else{
                error1.textContent = '';

            }

            if (age === "") {

                errorMessage = 'Age is required!'
                error2.textContent = errorMessage;
            }
            
            else{
                error2.textContent = '';

            }

            if (name === "" || age === "") {
                return;
            }

            const entry = { name, age };

            if(editIndex >=0){
                data[editIndex] = entry;
                editIndex = -1;
            }else{
                data.push(entry);
            }
        
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            console.log(data);
            updateTable();
        }
        
        function updateTable(){
            let v=""
          data.forEach((item,index) => {
              v += "<tr>"
              v += "<td>" + item.name + "</td>"
              v += "<td>" + item.age + "</td>"
              v += '<td><button type="button" class="et" onclick="edit(' + index + ')">Edit</button> <button type="button" class="de" onclick="deleteEntry(' + index + ')">Delete</button></td>';
              v += "</tr>";
   
            });
   
            document.getElementById("table-name").innerHTML = v;
          }

          function edit(index) {
            const entry = data[index];
            document.getElementById('name').value = entry.name;
            document.getElementById('age').value = entry.age;
            editIndex = index;
          }
        
          function deleteEntry(index) {
            data = data.filter((entry, i) => i !==index);
            updateTable();
          }
   