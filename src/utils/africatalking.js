import africastalking from "africastalking";

// Credentials
const credentials = {
    apiKey: 'atsk_8786e42a0df24531087604a5cbe0014550257dfed211f44224bd2e104ee755786e52403a',
    username: 'ajos',
};

// Initialize the SDK
const africasTalking = africastalking(credentials);

// Get the SMS service
const sms = africasTalking.SMS;

// Function to fetch account info
export async function fetchAccountInfo() {
    try {
        const response = await africasTalking.fetchAccount();
        console.log('Account info:', response);
    } catch (error) {
        console.error('Failed to fetch account info:', error);
    }
}

// Function to send a message
export async function sendMessage(numberList) {
    const options = {
        to: numberList,
        message: "AJOSDATA is celebrating our anniversary with a once-in-a-lifetime bonanza! 🎉 \n Don’t miss out on amazing offers. Visit the link below for more info. \n https://ajosdata.netlify.app",
        // from: 'YourSenderId' // Uncomment this if you have a specific sender ID
    };

    try {
        const response = await sms.send(options);
        return response
    } catch (error) {
        return error
    }
}

// Example usage
// fetchAccountInfo();

// Call sendMessage with a list of phone numbers
// Example: sendMessage(['+254700000000', '+254711000000']);
