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
  const walletModal = document.getElementById('walletModal');
  const connectWalletButton = document.getElementById('connectWalletButton');

  // Debugging: Check if elements are found
  console.log('Modal:', walletModal);
  console.log('Connect Wallet Button:', connectWalletButton);

  saveChangesButton?.addEventListener('click', () => {
    console.log('Save Changes button clicked');
    // Implement save changes logic here
  });

  disconnectWalletButton?.addEventListener('click', () => {
    console.log('Disconnect Wallet button clicked');
    // Disconnect the wallet
    disconnectWallet(); // Hypothetical function to disconnect the wallet
    // Close the modal window
    if (walletModal) {
      walletModal.style.display = 'none';
      console.log('Modal should be closed now');
    } else {
      console.log('Failed to find modal');
    }
    // Reset the connect wallet button text
    if (connectWalletButton) {
      connectWalletButton.textContent = 'Connect Wallet';
      console.log('Connect Wallet button text reset');
    } else {
      console.log('Failed to find Connect Wallet button');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const saveChangesButton = document.getElementById('saveChanges');
  const disconnectWalletButton = document.getElementById('disconnectWallet');
  const walletModal = document.getElementById('walletModal');
  const connectWalletButton = document.getElementById('connectWalletButton');

  // Debugging: Check if elements are found
  console.log('Modal:', walletModal);
  console.log('Connect Wallet Button:', connectWalletButton);

  saveChangesButton?.addEventListener('click', () => {
    console.log('Save Changes button clicked');
    // Implement save changes logic here
  });

  disconnectWalletButton?.addEventListener('click', () => {
    console.log('Disconnect Wallet button clicked');
    // Disconnect the wallet
    disconnectWallet(); // Hypothetical function to disconnect the wallet
    // Close the modal window
    if (walletModal) {
      walletModal.style.display = 'none';
      console.log('Modal should be closed now');
    } else {
      console.log('Failed to find modal');
    }
    // Reset the connect wallet button text
    if (connectWalletButton) {
      connectWalletButton.textContent = 'Connect Wallet';
      console.log('Connect Wallet button text reset');
    } else {
      console.log('Failed to find Connect Wallet button');
    }
  });
});

function disconnectWallet() {
  console.log('Disconnecting the wallet...');

  // Example: Clear wallet connection details from local storage
  localStorage.removeItem('walletConnected');
  localStorage.removeItem('walletAddress');

  // If your wallet integration involves a backend or needs to notify the wallet provider
  // you might need to make an API call here to properly disconnect.
  // Example API call (hypothetical):
  // fetch('/api/disconnectWallet', { method: 'POST' })
  //   .then(response => response.json())
  //   .then(data => console.log('Wallet disconnected:', data))
  //   .catch(error => console.error('Error disconnecting wallet:', error));
  // pp

  console.log('Wallet disconnected successfully.');
}

// Add this function to login.js
async function updateLeaderboardScore(walletAddress) {
  console.log('Updating leaderboard score for wallet:', walletAddress);

  try {
    // Fetch the transaction history for the wallet
    // This URL is hypothetical and will depend on the API you're using
    const response = await fetch(`https://api.blockchain.com/v3/eth/transactions?address=${walletAddress}`);
    if (!response.ok) {
      throw new Error('Failed to fetch transaction history');
    }
    const transactions = await response.json();

    // Find the first transaction date
    const firstTransaction = transactions.reduce((earliest, current) => {
      const currentTimestamp = new Date(current.timeStamp * 1000); // Assuming the timestamp is in seconds
      return currentTimestamp < earliest ? currentTimestamp : earliest;
    }, new Date());

    console.log('First transaction date:', firstTransaction);

    // Here, convert the firstTransaction date to a score
    // This is a placeholder for whatever logic you use to convert dates to leaderboard scores
    const score = convertDateToScore(firstTransaction);

    // Update the leaderboard with the new score
    // This is a placeholder - replace it with your actual logic to update the leaderboard
    updateLeaderboard(walletAddress, score);
  } catch (error) {
    console.error('Error updating leaderboard score:', error);
  }
}

// Placeholder function to convert a date to a leaderboard score
// Replace this with your actual conversion logic
function convertDateToScore(date) {
  // Example conversion logic
  return date.getTime(); // This is just an example and likely not what you want
}

// Placeholder function to update the leaderboard
// Replace this with your actual logic to update the leaderboard
function updateLeaderboard(walletAddress, score) {
  console.log(`Updating leaderboard for ${walletAddress} with score ${score}`);
  // Actual logic to update the leaderboard goes here
}