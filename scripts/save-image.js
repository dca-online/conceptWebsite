const fs = require('fs');
const https = require('https');
const path = require('path');

// Create directories if they don't exist
const assetsDir = path.join(process.cwd(), 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  console.log('Creating assets directory...');
  fs.mkdirSync(assetsDir, { recursive: true });
}

// URL of the vaporwave image
const imageUrl = 'https://i.imgur.com/wzPfTq6.jpg';
const imagePath = path.join(assetsDir, 'vaporwave-bg.jpeg');

console.log('Downloading vaporwave background image...');
console.log(`From: ${imageUrl}`);
console.log(`To: ${imagePath}`);

// Download the image
https.get(imageUrl, (response) => {
  // Handle redirects
  if (response.statusCode === 301 || response.statusCode === 302) {
    console.log(`Following redirect to: ${response.headers.location}`);
    https.get(response.headers.location, handleResponse);
    return;
  }

  handleResponse(response);
});

function handleResponse(response) {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    return;
  }

  const fileStream = fs.createWriteStream(imagePath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Download completed successfully!');
    console.log(`You can now run 'npm run dev' to see the site with the vaporwave background.`);
  });

  fileStream.on('error', (err) => {
    fs.unlink(imagePath, () => {}); // Delete the file on error
    console.error(`Error saving the file: ${err.message}`);
  });
}

// Handle errors
process.on('uncaughtException', (err) => {
  console.error(`Error: ${err.message}`);
  console.log('Alternative method: Please save the image manually as described in IMAGE_INSTRUCTIONS.md');
}); 