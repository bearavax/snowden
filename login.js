// Function to connect the wallet
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        console.log('Wallet connected:', accounts[0]);
        // Enable profile picture change functionality
        enableProfileChange();
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  } else {
    console.log('Ethereum object not found. Install MetaMask.');
  }
}

// Function to enable profile picture change
function enableProfileChange() {
  const avatarElement = document.querySelector('.avatar');
  avatarElement.addEventListener('click', () => {
    // Trigger file input to select a new profile picture
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update avatar's src with the selected image
        avatarElement.src = reader.result;
      };
      reader.readAsDataURL(file);
    };
    fileInput.click();
  });
}

// Example usage: Attach connectWallet to a button click event
document.getElementById('connect-wallet-button').addEventListener('click', connectWallet);