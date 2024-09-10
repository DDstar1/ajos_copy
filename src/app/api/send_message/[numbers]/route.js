import { sendMessage } from "@/utils/africatalking";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // Extract the `numbers` parameter from the URL
  const { numbers } = params;
  const numbersArray = numbers.split('-'); // Assuming `numbers` is a hyphen-separated string

  console.log('Numbers Array:', numbersArray);

  try {
    // Send the message and await the response
    const sms_response = await sendMessage(numbersArray);
    console.log('MY SMS Response:', sms_response);

    // Return the response as JSON
    return NextResponse.json(sms_response, {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending message:', error);

    // Return error response as JSON
    return NextResponse.json({ error: 'Failed to process message' }, {
      status: 500,
    });
  }
}
