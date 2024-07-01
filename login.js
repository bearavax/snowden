// Function to connect the wallet
let isWalletConnected = false; // Track wallet connection status

document.getElementById('connect-button').addEventListener('click', async () => {
  if (!isWalletConnected) {
    try {
      // Check if Ethereum object is available in window
      if (window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account); // Log the connected account

        // Update button text with account address
        document.getElementById('connect-button').textContent = `${account.substring(0, 6)}...${account.slice(-4)}`;

        isWalletConnected = true; // Update connection status

      } else {
        console.log('Ethereum wallet is not available');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  } else {
    // Toggle modal visibility
    const modal = document.getElementById('walletModal');
    modal.style.display = "block";

    // Close modal when the user clicks on <span> (x)
    document.querySelector('.close').onclick = function() {
      modal.style.display = "none";
    }

    // Close modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Add event listeners for modal functionality (e.g., changing profile picture, disconnecting wallet) here
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Variables to store the profile picture and username
  let profilePicture = 'default_avatar.jpg';
  let username = '';

  // Get references to the DOM elements
  const profilePictureInput = document.getElementById('profilePictureInput');
  const usernameInput = document.getElementById('usernameInput');
  const saveChangesButton = document.getElementById('saveChanges');

  // Event listener for the Save Changes button
  saveChangesButton.addEventListener('click', function() {
    // Update the variables with the input values
    profilePicture = profilePictureInput.files[0]; // This will store the File object
    username = usernameInput.value;

    // Example of how to use these variables
    console.log('Saved Profile Picture:', profilePicture);
    console.log('Saved Username:', username);

    // Here you can also add code to update the UI with the new profile picture and username
    // and/or send these values to a server for persistence.
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const saveChangesButton = document.getElementById('saveChanges');
  const disconnectWalletButton = document.getElementById('disconnectWallet');

  if (saveChangesButton) {
    saveChangesButton.addEventListener('click', function() {
      console.log('Save Changes button clicked');
      // Implement save changes logic here
    });
  } else {
    console.log('Save Changes button not found');
  }

  if (disconnectWalletButton) {
    disconnectWalletButton.addEventListener('click', function() {
      console.log('Disconnect Wallet button clicked');
      // Implement disconnect wallet logic here
    });
  } else {
    console.log('Disconnect Wallet button not found');
  }
});