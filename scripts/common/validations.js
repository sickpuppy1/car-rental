import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/esm-browser/index.js';
import { addUser } from '../../data/database-schema.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            addUserToDB();
        }
    });

    function validateForm() {
        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();
        const mobile = document.querySelector('input[name="mobile"]').value.trim();

        if (!name) {
            alert('Name is required');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Invalid email address');
            return false;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter');
            return false;
        }

        if (!validateMobile(mobile)) {
            alert('Invalid mobile number');
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        const re = /^(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateMobile(mobile) {
        const re = /^[0-9]{10}$/;
        return re.test(mobile);
    }

    function addUserToDB() {
        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();
        const mobile = document.querySelector('input[name="mobile"]').value.trim();
        const user = {
            user_id: uuidv4(),
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            role: 'customer'
        };
        addUser(user)
        alert('User registered successfully!');
    }
});