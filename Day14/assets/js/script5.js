// 5. Fetch and display GitHub user profiles. 

document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  fetchGitHubProfile(username);
});

async function fetchGitHubProfile(username) {
  const profileContainer = document.getElementById('profileContainer');
  profileContainer.innerHTML = '';

  try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Profile not found');

      const profileData = await response.json();
      displayProfile(profileData);
  } catch (error) {
      profileContainer.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayProfile(profile) {
  const profileHTML = `
      <img src="${profile.avatar_url}" alt="Avatar" class="avatar">
      <div class="profile-info">
          <h2>${profile.name}</h2>
          <p><strong>Username:</strong> ${profile.login}</p>
          <p><strong>Followers:</strong> ${profile.followers}</p>
          <p><strong>Following:</strong> ${profile.following}</p>
          <p><strong>Public Repos:</strong> ${profile.public_repos}</p>
          <a href="${profile.html_url}" target="_blank">Visit Profile</a>
      </div>
  `;
  document.getElementById('profileContainer').innerHTML = profileHTML;
}