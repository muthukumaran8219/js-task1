let data = [];

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
            data.push(entry);
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            console.log(data);
            updateTable();
        }
        
        function updateTable(){
            let v=""
          data.map((teim) => {
              v += "<tr>"
              v += "<td>" + item.name + "</td>"
              v += "<td>" + item.age + "</td>"
              v += "</tr>";
   
            });
   
            document.getElementById("table-name").innerHTML = v;
          }
   