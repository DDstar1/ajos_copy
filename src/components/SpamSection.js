"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import DetailPage from "./DetailPage";

// Function to handle the button click
const handleSubmit = async (list, setLoading, setResponseData) => {
  setLoading(true);
  const listString = list.join("-");
  console.log(listString);

  try {
    const sms_response = await fetch(
      `/api/send_message/${encodeURIComponent('+2349035360809')}`
    );

    if (!sms_response.ok) {
      throw new Error("Network response was not ok");
    }

    const response = await sms_response.json();
    if(response.SMSMessageData){
    setResponseData(response.SMSMessageData);}
    else{toast.error(`Failed to send message: ${response.error}`);}
    console.log("finished");
  } catch (error) {
    toast.error(`Failed to send message: ${error.message}`);
    console.error(error);
  } finally {
    setLoading(false);
  }
};

// Component definition
function SpamSection({ mtn_list }) {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    handleSubmit(mtn_list, setLoading, (data) => {
      setResponseData(data);
      setIsModalOpen(true);
    });
  };

  return (
    <div className="mb-12 flex gap-5 justify-center items-center flex-col text-center">
      <button
        onClick={handleButtonClick} // Handle button click
        className={`bg-blue-500 flex gap-3 justify-center items-center text-white px-4 py-2 rounded w-fit hover:bg-blue-600 ${
          loading ? "cursor-wait" : ""
        }`}
        disabled={loading} // Disable button while loading
      >
        <div>Spam MTN Users</div>
        {loading ? <ReactLoading type="spin" height={20} width={20} /> : null}
      </button>

      {loading
        ? null
        : responseData &&
          isModalOpen && (
            <DetailPage
              responseData={responseData}
              onClose={() => setIsModalOpen(false)}
            />
          )}

      {mtn_list.length > 0 && !loading && !responseData && (
        <div className="mt-4 flex gap-8 justify-center items-center flex-wrap">
          {mtn_list.map((user, index) => (
            <div key={index} className="border-b py-2">
              {user}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SpamSection;
