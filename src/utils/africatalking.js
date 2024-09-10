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
        message: "I'm a lumberjack and it's ok, I sleep all night and I work all day. \n https://account.africastalking.com/apps/bbdogirnxw",
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
