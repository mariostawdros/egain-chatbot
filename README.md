![flowchart egain](https://github.com/user-attachments/assets/85bf5d97-6d27-4fe7-86fd-0bc97696e942)# eGain Chatbot: Lost Package Tracker
A simple chatbot that helps customers track their lost packages. Built using vanilla HTML/CSS/JS and powered by OpenAI’s GPT-3.5 Turbo model. Clean design, smart conversation formatting, and real-time interaction—all running client-side.

---

## Demo
[screen-capture (20).webm](https://github.com/user-attachments/assets/371e6d1f-0075-4b14-9ea5-e47715accafb)

## Flowchart
![image](https://github.com/user-attachments/assets/35e9f633-ffea-4b1d-8754-bf68c5af2fbc)

## Installation

> Recommended: Use **Visual Studio Code** + **Live Server** extension for easiest setup

## Steps: What You’ll Need
- Visual Studio Code
- Live Server extension
- OpenAI API Key
- A modern web browser

# 1. Clone the repository
git clone https://github.com/mariostawdros/egain-chatbot.git
cd egain-chatbot

# 2. Open the folder in VS Code

# 3. Install Live Server extension
 - Open the Extensions tab (Ctrl+Shift+X or Cmd+Shift+X)
 - Search for “Live Server” by Ritwick Dey
 - Click Install

 # 4. Add your OpenAI API Key
 - Create a file called config.js in the root directory
 - Paste the following:
  js
  Copy
  Edit
  const CONFIG = {
  API_KEY: "your-openai-api-key",
  SYSTEM_PROMPT: "You are a helpful assistant that helps customers track lost packages."
  };

# 5. Launch the app
- Right-click index.html in VS Code
- Select “Open with Live Server”
- The chatbot should open in your browser

## Brief Explanation of My Approach
For this project, I wanted to create a simple, clean, and functional chatbot that could simulate tracking a lost package — something you'd expect to use on a real e-commerce website. I stuck to using just HTML, CSS, and JavaScript to keep the app lightweight and browser-friendly, while still showcasing thoughtful interaction design and technical depth.

🔹 Conversation Design: 
I started by mapping out the core conversation flow. The goal was to simulate a user asking about a lost package and the bot providing helpful responses like:
 - “Out for delivery”
 - “In transit”
 - “Delayed”
 - “Delivered”
The bot starts with a greeting and a request for a tracking number. From there, it replies based on simulated statuses, using bold formatting and clean spacing to make the replies readable. The conversation tree is kept short and intentional to reflect real-world chatbot patterns.

🔹 Frontend Implementation: 
The frontend was built with no frameworks — just plain HTML, CSS, and JavaScript. This decision made it super easy to run everything in the browser without needing a backend server or any build tools.
- The HTML defines the structure: logo, chat window, input field.
- The CSS styles the layout, including a dark theme, message bubble alignment, and subtle animations.
- The JavaScript powers the interaction:
    * Capturing user input
    * Communicating with OpenAI’s API
    * Rendering messages
    * Showing a typing animation for the bot
Everything was made to feel fast and snappy while being readable and accessible.

🔹 OpenAI Integration: 
I integrated OpenAI’s GPT-3.5 Turbo using the Chat Completions API. Each user input gets added to a conversation history array, which is passed along with every request to keep context. The assistant’s response is then added to the chat window using DOM manipulation.
 - Used fetch() to make the API call
 - Built a loading state that shows animated dots while waiting
 - Displayed the bot’s response once received, with formatting for readability

My goal was to keep the project simple, realistic, and clean. I wanted the chatbot to feel like something you might actually find on a real website. That’s why I avoided using libraries or frameworks — to show that even without them, you can build something responsive, modern, and interactive.

By using just the essentials (HTML, CSS, JS + OpenAI), I was able to focus on writing clear logic, building a smooth user experience, and formatting conversations to look great. I think this shows both design thinking and technical ability, which is exactly what I wanted this internship project to reflect.
