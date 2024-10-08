// import styles from '../styles/tailwind.css';
// import '../styles/tailwind.css';
import { useEffect, useState } from "react";
export default function Home() {
  async function getData() {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const myHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    };
    const myBody = {
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "can you help me explore my next step" },
      ],
      temperature: 0.7,
    };

    const url = "https://api.openai.com/v1/chat/completions";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(myBody),
        headers: myHeaders,
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  // useEffect(() => {
  //   getData();
  // }, []);

  const [currentQuestion, setCurrentQuestion] = useState(
    "What subjects or activities do you enjoy the most in school or during your free time?"
  );

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const questionArray = [
    "What subjects or activities do you enjoy the most in school or during your free time?",
    "Do you prefer working alone on tasks, or do you enjoy collaborating with others?",
    "When thinking about a job, do you prefer a structured environment with clear guidelines, or do you like having some flexibility and creativity in how you complete your work?",
    "What kind of impact do you want to make in your job? For example, do you want to help people, solve problems, create something new, or something else",
    "Do you have any specific industries or fields that you are particularly interested in, or are you open to exploring various options?",
  ];

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");

    if (inputValue.trim() === "") {
      alert("Please enter a reply");
      return;
    }

    setCount((previousCount) => {
      const newCount = previousCount + 1;
      console.log(newCount);
      if (newCount < questionArray.length) {
        setCurrentQuestion(questionArray[newCount]);
      }
      return newCount;
    });

    setInputValue("");
  }

  function handleClick(event) {
    event.preventDefault();
    console.log("clicked");
    setCount(0);
    setCurrentQuestion(questionArray[0]);
  }

  return (
    <div className="bg-[#00637F] ">
      <div>
        <img src="/pictures/image.png" className="max-w-full"></img>
      </div>
      <div className="max-w-4xl m-auto text-3xl/relaxed ">
        {count < 5 ? (
          // if user has not answered all questions:
          <>
            <p className="text-white py-8">
              Are you looking for a new job? I'd be happy to help you find a
              career path.
            </p>
            <p className="text-white">
              Let's start by learning a bit more about your interests and
              skills. I'll ask you a few questions to get a better idea of what
              you might enjoy. Ready?
            </p>
            <form
              onSubmit={handleSubmit}
              className="pt-4 pb-8 m-4 bg-[#EE9800] px-8 rounded-3xl"
            >
              <p>{count + 1}/5</p>
              <p className="text-black py-4">{currentQuestion}</p>
              <input
                type="text"
                className="bg-white rounded-3xl p-8 min-w-full"
                placeholder="Your Answer"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="mt-8 bg-[#00637F] text-white rounded-3xl p-4 cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black">
                Submit
              </button>
            </form>
          </>
        ) : (
          // if all questions answered, shows the job reccommendations
          <>
            <div className="mt-24 mb-16">
              <p className="text-white">
                Fantastic! Based on your interests in working with numbers,
                enjoying collaboration, preferring a structured environment,
                wanting to help people by solving problems, and having an
                interest in science and young people, here are three career
                options that might suit you:
              </p>
            </div>
            <div className="text-white ml-32">
              <ul className="space-y-8">
                <li>
                  <b> &rArr; Data Analyst:</b> This role involves working with
                  data and numbers to find insights and solve problems. It's
                  structured and often involves collaboration.
                </li>
                <li>
                  <b> &rArr; Health and Safety Coordinator:</b> In this role,
                  you can ensure safe environments for people, which can be
                  particularly important in scientific settings like labs or
                  schools. This position also involves problem-solving and
                  helping others.
                </li>
                <li>
                  <b> &rArr; Lab Technician:</b> Working in a scientific
                  environment, you can assist in experiments and research,
                  helping solve scientific problems in a structured setting.
                </li>
              </ul>
            </div>
            <div className="pt-4 pb-8 m-4 bg-[#EE9800] px-8 rounded-3xl">
              If none of the options appeal please click button to reset
              <button
                onClick={handleClick}
                className="bg-[#00637F] text-white rounded-3xl p-4 cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-black"
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
