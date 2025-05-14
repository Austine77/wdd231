// Fetch members data from the JSON file
async function fetchMembersData() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Display members as cards
function displayMembers(members) {
    const directory = document.getElementById('members-directory');
    directory.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="membership-level">Membership Level: ${getMembershipLevel(member.level)}</p>
        `;

        directory.appendChild(card);
    });
}

// Return membership level text
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle between grid and list views
document.getElementById('grid-view-btn').addEventListener('click', () => {
    document.getElementById('members-directory').classList.add('grid-view');
    document.getElementById('members-directory').classList.remove('list-view');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    document.getElementById('members-directory').classList.add('list-view');
    document.getElementById('members-directory').classList.remove('grid-view');
});

// Update footer with the current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Load member data
fetchMembersData();
