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

            if (age === "") {

                errorMessage = 'Age is required!'
                error2.textContent = errorMessage;
            }

            if (name === "" || age === "") {
                return;
            }

            const entry = { name, age };
            data.push(entry);

            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            console.log(data);
        }
        
        function updateTable() {
            let tableContent = data.map((item) => {
                return <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                </tr>;
            }).join('');
        
            document.getElementById("table-name").innerHTML = tableContent;
        }