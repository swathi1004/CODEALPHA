 <script>
            function calculateAge() {
                var dob = document.getElementById("no1").value;
                var dobDate = new Date(dob);
                var now = new Date();
                
                var years = now.getFullYear() - dobDate.getFullYear();
                var months = now.getMonth() - dobDate.getMonth();
                var days = now.getDate() - dobDate.getDate();
                
                if (months < 0 || (months === 0 && now.getDate() < dobDate.getDate())) {
                    years--;
                    months += 12;
                }
                
                if (days < 0) {
                    months--;
                    var tempDate = new Date(now.getFullYear(), now.getMonth(), 0);
                    days += tempDate.getDate();
                }
                
                var ageString = "";
                if (years > 0) {
                    ageString += years + (years === 1 ? " year" : " years") + ", ";
                }
                if (months > 0) {
                    ageString += months + (months === 1 ? " month" : " months") + ", ";
                }
                if (days > 0) {
                    ageString += days + (days === 1 ? " day" : " days");
                }
                
                document.getElementById("result").innerText = "Your age is " + ageString + ".";
            }
        </script>
