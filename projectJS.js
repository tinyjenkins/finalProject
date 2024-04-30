function clearForm() {
    const form = document.getElementById("mealPlanForm");
    form.reset(); 
}

function generateMealPlan(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const goal = document.getElementById("goalInput").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }

    const breakfast = document.getElementById("breakfastInput").value;
    const snack1 = document.getElementById("snack1Input").value;
    const lunch = document.getElementById("lunchInput").value;
    const snack2 = document.getElementById("snack2Input").value;
    const dinner = document.getElementById("dinnerInput").value;

    const newWindow = window.open("about:blank", "_blank", "width=800,height=600");

    newWindow.document.write("<html><head><title>Weekly Meal Plan</title></head><body>");
    newWindow.document.write(`<h1>Meal Plan for ${name}</h1>`);
    newWindow.document.write(`<p>Email: ${email}</p>`);
    newWindow.document.write(`<p>Goal for the Week: ${goal}</p>`);
    newWindow.document.write("<h3>Weekly Meal Plan</h3>");
    newWindow.document.write("<table border='1'><tr><th>Day</th><th>Breakfast</th><th>Snack 1</th><th>Lunch</th><th>Snack 2</th><th>Dinner</th></tr>");

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach((day) => {
        newWindow.document.write(`<tr><td>${day}</td>`);
        newWindow.document.write(`<td>${breakfast}</td>`);
        newWindow.document.write(`<td>${snack1}</td>`);
        newWindow.document.write(`<td>${lunch}</td>`);
        newWindow.document.write(`<td>${snack2}</td>`);
        newWindow.document.write(`<td>${dinner}</td></tr>`);
    });

    newWindow.document.write("<button onclick='window.print()'>Print Meal Plan</button>"); 
    newWindow.document.write("<button onclick='downloadMealPlan()'>Download Meal Plan</button>"); 
    newWindow.downloadMealPlan = function() {
        const content = newWindow.document.documentElement.outerHTML; 
        const blob = new Blob([content], { type: 'text/html' }); 
        const link = newWindow.document.createElement('a'); 
        link.href = window.URL.createObjectURL(blob); 
        link.download = 'Meal_Plan.html'; 
        link.click(); 
    };

    newWindow.document.write("</body></html>"); 
    newWindow.document.close(); 

    return true; 
}
