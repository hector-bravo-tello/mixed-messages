//
// Hecto Bravo  Feb 12th, 2024
// Random Inspirational Message with Call to Action and Benefit
//

// Expanded array of inspirational quotes
const quotes = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to do great work is to love what you do.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Difficult roads often lead to beautiful destinations.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "You do not find the happy life. You make it.",
    "The power of imagination makes us infinite.",
    "Set your goals high, and don't stop till you get there.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does."
];

//
// Hector Bravo   Feb 12th 2024
// Random Insipirational Message Generator
//

// Expanded array of daily actions
const actions = [
    "taking a moment to breathe deeply",
    "writing down three things you're grateful for",
    "spending 30 minutes reading a book",
    "going for a 20-minute walk in nature",
    "calling a friend or family member you haven't spoken to in a while",
    "organizing your workspace for better clarity",
    "trying a new hobby or activity you've been interested in",
    "reflecting on your achievements at the end of the day",
    "planning your day first thing in the morning",
    "doing a random act of kindness for someone"
];

// Expanded array of benefits
const benefits = [
    "It will clear your mind and increase focus.",
    "This can significantly boost your mood and perspective.",
    "This enhances knowledge and relaxes the mind.",
    "It boosts your physical and mental health.",
    "Strengthening relationships brings long-term happiness.",
    "A tidy space helps reduce stress and increase productivity.",
    "Learning new skills can boost confidence and mental acuity.",
    "Acknowledging success fosters a sense of accomplishment and motivation.",
    "Planning helps manage stress and improve time management.",
    "Kindness promotes empathy and emotional well-being."
];

// Function to randomly select an item from an array remains the same
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generating the message function remains the same
function generateInspirationalMessage() {
    const quote = getRandomElement(quotes);
    const action = getRandomElement(actions);
    const benefit = getRandomElement(benefits);

    // Combine the data into a message
    const message = `${quote} Today, consider ${action}. ${benefit}`;
    console.log(message);
}

// Run the program to see a new, randomized output
generateInspirationalMessage();
