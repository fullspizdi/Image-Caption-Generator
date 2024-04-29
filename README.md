# Image Caption Generator

This project is a simple application that generates text captions for uploaded images using the OpenAI API and Node.js.

## Technologies Used
- **Node.js:** JavaScript runtime environment for the backend.
- **OpenAI API:** AI API for generating text captions.
- **Express.js:** Node.js web framework for API creation and frontend serving.
- **Multer:** Node.js middleware for handling image uploads.

## Project Structure
The project consists of the following files:
- **index.js:** Contains the backend server code.
- **package.json:** Manages project dependencies and scripts.
- **.env:** Stores the OpenAI API key.
- **README.md:** Project documentation.
- **.gitignore:** Specifies files and directories to be ignored by Git.

## Getting Started
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Obtain an API key from OpenAI and update the `.env` file with your key.
4. Start the server using `npm start`.

## API Endpoints
- **POST /generate-caption:** Endpoint for uploading an image and generating a caption.

## Usage
1. Upload an image using the provided form.
2. The server will generate a text caption for the image using the OpenAI API.
3. The caption will be displayed alongside the original image.

## Important Notes
- Ensure you have obtained an API key from OpenAI and updated the `.env` file.
- Additional error handling and frontend development can be implemented for a more robust application.

Feel free to reach out for any questions or suggestions!

