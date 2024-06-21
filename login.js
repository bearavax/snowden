// Example user object, possibly retrieved from a login system or API
const user = {
    login: "username",
    profilePictureUrl: "https://example.com/path/to/profile-picture.jpg"
  };
  
  // Function to update the avatar background image based on user details
  function updateUserAvatar(user) {
    const avatarElement = document.querySelector('.avatar');
    if (avatarElement) {
      avatarElement.style.backgroundImage = `url('${user.profilePictureUrl}')`;
      avatarElement.style.backgroundSize = 'cover'; // Ensure the image covers the whole element
      avatarElement.style.backgroundPosition = 'center'; // Center the background image
    }
  }
  
  //refresh the avatar
  // Call the function with the user object
  updateUserAvatar(user);

  <script>
  document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
      const playerName = row.querySelector('.name').textContent;
      const avatarElement = row.querySelector('.avatar');
      const profilePictureUrl = getPlayerProfilePictureUrl(playerName); // Implement this function based on your application's logic

      if (avatarElement && profilePictureUrl) {
        avatarElement.style.backgroundImage = `url('${profilePictureUrl}')`;
        avatarElement.style.backgroundSize = 'cover';
        avatarElement.style.backgroundPosition = 'center';
        // Ensure .avatar has dimensions in CSS or set them here
      }
    });
  });

  // Example function to get profile picture URL (replace with your actual logic)
  function getPlayerProfilePictureUrl(playerName) {
    // Placeholder: Return a URL based on the player's name
    const profilePictures = {
      'Player1': 'https://example.com/path/to/player1.jpg',
      'Player2': 'https://example.com/path/to/player2.jpg',
      // Add mappings for each player
    };
    return profilePictures[playerName];
  }
</script>