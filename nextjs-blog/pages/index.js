import Head from 'next/head';
// import styles from '../styles/tailwind.css';
// import '../styles/tailwind.css';

export default function Home() {
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
