import React, { useState } from "react";

const PopupForm = ({ isOpen, hidePopup }) => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [refereePhone, setRefereePhone] = useState("");
  const [programOfInterest, setProgramOfInterest] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(null); // State to hold error messages

  const programs = [
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      referrerName,
      referrerEmail,
      referrerPhone,
      relationship,
      refereeName,
      refereeEmail,
      refereePhone,
      program: programOfInterest,
      comments,
    };

    try {
      const response = await fetch("https://accredian-frontend-delta.vercel.app/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Referral submitted successfully!");
      console.log("Success:", data);

      // Clear the form fields
      setReferrerName("");
      setReferrerEmail("");
      setReferrerPhone("");
      setRelationship("");
      setRefereeName("");
      setRefereeEmail("");
      setRefereePhone("");
      setProgramOfInterest("");
      setComments("");
      setError(null);
      hidePopup();
    } catch (error) {
      console.error("Error:", error);
      setError("There was a problem with your submission. Please try again.");
    }
  };

  const closePopup = () => {
    // Clear the form fields and error state
    setReferrerName("");
    setReferrerEmail("");
    setReferrerPhone("");
    setRelationship("");
    setRefereeName("");
    setRefereeEmail("");
    setRefereePhone("");
    setProgramOfInterest("");
    setComments("");
    setError(null);
    hidePopup();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-dark">
          Referral Form
        </h2>
        {error && (
          <div className="mb-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="referrer-name"
              className="block text-sm font-medium text-gray-700"
            >
              Referrer's Name
            </label>
            <input
              type="text"
              id="referrer-name"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referrer-email"
              className="block text-sm font-medium text-gray-700"
            >
              Referrer's Email
            </label>
            <input
              type="email"
              id="referrer-email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referrer-phone"
              className="block text-sm font-medium text-gray-700"
            >
              Referrer's Phone Number
            </label>
            <input
              type="tel"
              id="referrer-phone"
              value={referrerPhone}
              onChange={(e) => setReferrerPhone(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="relationship"
              className="block text-sm font-medium text-gray-700"
            >
              Relationship with Referee
            </label>
            <input
              type="text"
              id="relationship"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referee-name"
              className="block text-sm font-medium text-gray-700"
            >
              Referee's Name
            </label>
            <input
              type="text"
              id="referee-name"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referee-email"
              className="block text-sm font-medium text-gray-700"
            >
              Referee's Email
            </label>
            <input
              type="email"
              id="referee-email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="referee-phone"
              className="block text-sm font-medium text-gray-700"
            >
              Referee's Phone Number
            </label>
            <input
              type="tel"
              id="referee-phone"
              value={refereePhone}
              onChange={(e) => setRefereePhone(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700"
            >
              Program of Interest
            </label>
            <select
              id="program"
              value={programOfInterest}
              onChange={(e) => setProgramOfInterest(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm"
            >
              <option value="">Select Program</option>
              {programs.map((program, index) => (
                <option value={program} key={index}>
                  {program}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Comments
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-dark focus:border-blue-dark sm:text-sm bg-slate-100"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={closePopup}
              className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-dark"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
