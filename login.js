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