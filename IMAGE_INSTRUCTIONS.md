# How to Add the Vaporwave Background Image

To use the holographic/vaporwave image you provided as a background:

1. **Save the image:**
   - Right-click on the image you shared and select "Save Image As"
   - Name it `vaporwave-bg.jpg`
   - Save it to the `public/assets` folder in your project

2. **Alternative approach:**
   - Download the image to any location on your computer
   - Create or ensure the folder `public/assets` exists in your project
   - Copy the downloaded image to the `public/assets` folder
   - Rename it to `vaporwave-bg.jpg` if needed

3. **Verify the file path:**
   The CSS is already configured to look for the image at:
   ```
   /assets/vaporwave-bg.jpg
   ```

Once you've saved the image to the correct location, the site will automatically use it as a parallax background when you run the development server.

## Running the Website Locally

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

The website should now display with your vaporwave image as a parallax background, and the navigation menu should have the proper z-index and blur effect when opened.

# How to Save the Vaporwave Background Image

If the automatic script doesn't work, follow these instructions to save the vaporwave background image manually:

## Option 1: Using the URL

1. Open this URL in your browser: [https://i.imgur.com/wzPfTq6.jpg](https://i.imgur.com/wzPfTq6.jpg)
2. Right-click on the image and select "Save Image As..."
3. Navigate to the `public/assets` folder in your project
4. Save the file as `vaporwave-bg.jpeg` (make sure to use .jpeg extension)
5. Verify that the image was saved correctly by checking that the file exists at `public/assets/vaporwave-bg.jpeg`

## Option 2: Using an Existing Image

If you already have a vaporwave/holographic image you'd like to use:

1. Make sure your image is in a high-quality format (JPEG or PNG)
2. Rename the image to `vaporwave-bg.jpeg`
3. Copy it to the `public/assets` folder in your project
4. Update the CSS in `src/app/globals.css` if your image has a different file extension

## Verifying It Works

After saving the image:

1. Run your development server: `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. You should now see the vaporwave background with parallax scrolling effect

## Troubleshooting

If the background still doesn't appear:

1. Check that the image file is in the correct location: `public/assets/vaporwave-bg.jpeg`
2. Verify the file extension matches what's in the CSS (currently `.jpeg`)
3. Try hard-refreshing your browser (Ctrl+F5 or Cmd+Shift+R)
4. Check browser console for any errors related to loading the image 