import React, { useState, useEffect, useRef } from "react";

function Contact() {
  const ref = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL((window.location.href + "thanks").toString());
    console.log(window.location.href + "formsubmitted");
  }, []);

  const SendEmail = () => {
    // console.log("Sending Email...");
    // Axios.post("http://localhost:3001/api/sendemail", {
    //   firstNameText: firstName,
    //   lastNameText: lastName,
    //   emailText: senderEmail,
    //   emailMessage: emailMessage,
    // }).then((response) => {
    //   console.log("Email Success!", response);
    // });
    //create a smoooooth timed animated dropdown
  };

  return (
    <section className="h-auto bg-lime-100 pb-8">
      <div className="text-center text-5xl py-8 font-hand">Give Us A Bell</div>
      <div id="contact" ref={ref} className="flex px-4 md:px-0">
        <form
          action="https://formsubmit.co/96becf8beb1ec0831ca17a33df08fc4e"
          method="POST"
          className="w-full max-w-lg mx-auto my-auto"
          onSubmit={() => SendEmail()}
        >
          <input type="hidden" name="_next" value={currentURL}></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className="flex flex-wrap mb-6 md:mb-0">
            <div className="w-full md:w-1/2 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold md:mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
              />
            </div>
            <div className="w-full md:w-1/2 md:px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="jane@example.com"
                onChange={(e) => setSenderEmail(e.target.value)}
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                rows="5"
                placeholder="Enter your message"
                onChange={(e) => setEmailMessage(e.target.value)}
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
