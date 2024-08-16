
// import styles from '../styles/tailwind.css';
// import '../styles/tailwind.css';
import { useEffect } from "react" 
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <img src="/pictures/image.png" className="max-w-full"></img>
      </div>
      <div>
        <p>Are you looking for a new job? I'd be happy to help you find a career path. Let's start by learning a bit more about your interests and skills. I'll ask you a few questions to get a better idea of what you might enjoy. Ready?
        </p>
        <div>
        <p>What subjects or activities do you enjoy the most in school or during your free time?</p>
        </div>

      <div>
        <p>Fantastic! Based on your interests in working with numbers, enjoying collaboration, preferring a structured environment, wanting to help people by solving problems, and having an interest in science and young people, here are three career options that might suit you:</p>
      </div>
      <div>
        <ul>
          <li>Data Analyst: This role involves working with data and numbers to find insights and solve problems. It's structured and often involves collaboration.</li>
          <li>Health and Safety Coordinator: In this role, you can ensure safe environments for people, which can be particularly important in scientific settings like labs or schools. This position also involves problem-solving and helping others.</li>          
          <li>Lab Technician: Working in a scientific environment, you can assist in experiments and research, helping solve scientific problems in a structured setting.</li>
        </ul>
      </div>
      </div>
      </div>
  );
}
