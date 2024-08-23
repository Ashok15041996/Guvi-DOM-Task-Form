// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const tableBody = document.getElementById('dataTableBody');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        // Get selected food options
        const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const foodChoices = Array.from(foodCheckboxes).map(cb => cb.value).join(', ');

        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foodChoices}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        
        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear the form fields
        form.reset();
    });
});
