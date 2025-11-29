async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create list
        const userList = document.createElement('ul');

        // Loop through users and add names
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Clear and show error
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.style.color = '#e74c3c';
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', fetchUserData);