import React, { useState } from "react";

const ManageSupport = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questionsAndAnswers = [
    {
      question: "How do I know I am using a legit url?",
      answer:
        "Ensure that the URL starts with 'https://' and ends with '.onion'. Double-check the URL with official sources.",
    },
    {
      question: "I made a deposit but it is not showing in my balance",
      answer:
        "Please allow some time for the deposit to be processed. If the issue persists, contact support with your transaction details.",
    },
    {
      question:
        "I want to view sale information but it no longer shows in my sales",
      answer:
        "Sales information might be archived. Check the archive section or contact support for more details.",
    },
    {
      question: "I want to cancel an order",
      answer:
        "To cancel an order, go to your orders page and select the order you wish to cancel. Follow the prompts to cancel the order.",
    },
    {
      question: "I want to change feedback on my order",
      answer:
        "You can change feedback on an order by going to the order details page and selecting 'Edit Feedback'. Make the necessary changes and save.",
    },
  ];

  return (
    <div className=" min-h-screen p-4 text-white">
      {/* Header */}
      <div className=" bg-[#4aa0ba] text-white text-center py-3 text-xl font-bold rounded">
        ⚙ ABACUS HELPDESK
      </div>

      {/* Most Popular Questions */}
      <h2 className="  bg-[#4aa0ba] text-white text-center text-lg font-bold mt-6 ">
        MOST POPULAR QUESTIONS
      </h2>
      <div className="w-full max-w-2xl mx-auto mt-4">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="mb-2">
            <button
              className="bg-blue-100 w-full text-left p-3 rounded-md flex items-center text-black "
              onClick={() =>
                setSelectedQuestion(selectedQuestion === index ? null : index)
              }
            >
              <span className="mr-2">
                {selectedQuestion === index ? "▼" : "▶"}
              </span>{" "}
              {item.question}
            </button>
            {selectedQuestion === index && (
              <div className="bg-[#0f3b5c] p-3 mt-2 rounded-md">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Need Help */}
      <div className="text-center mt-6">
        <p className="font-bold">STILL NEED HELP?</p>
        <button className="bg-blue-100 text-black px-4 py-2 rounded mt-2">
          Choose a topic
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {[
          "Orders",
          "Sales",
          "Deposits",
          "Withdrawal",
          "Account",
          "Vendor",
          "Other",
        ].map((category, index) => (
          <button
            key={index}
            className={` bg-[#4aa0ba] text-white  px-4 py-2 rounded flex items-center text-white ${
              category === "Other" ? " bg-[#4aa0ba] text-white" : " bg-[#4aa0ba] text-white"
            }`}
          >
            {category === "Orders" && <span className="mr-2">🛒</span>}
            {category === "Sales" && <span className="mr-2">🛒</span>}
            {category === "Deposits" && <span className="mr-2">↳</span>}
            {category === "Withdrawal" && <span className="mr-2">↱</span>}
            {category === "Account" && <span className="mr-2">🏠</span>}
            {category === "Vendor" && <span className="mr-2">🌟</span>}
            {category === "Other" && <span className="mr-2">⚫⚫⚫</span>}
            {category}
          </button>
        ))}
      </div>

      {/* Media Contact */}
      <div className="w-full max-w-2xl mx-auto mt-6">
        <button className="bg-blue-100 text-black w-full p-3 rounded-md">
          I am from the media and would like to contact you.
        </button>
      </div>

      {/* Open Ticket */}
      <div className="text-center mt-6 border-t border-gray-500 pt-4">
        <p className="font-bold">STILL NEED HELP?</p>
        <button className=" bg-[#4aa0ba] text-white px-4 py-2 rounded mt-2">
          Open a ticket
        </button>
      </div>
    </div>
  );
};

export default ManageSupport;
