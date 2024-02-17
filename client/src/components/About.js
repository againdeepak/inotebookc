const About = () => {
  const style = {
    backgroundColor: 'rgb(98, 0, 255)',
    // background-color: ;
    color: 'white'
  }
  return (
    <div className='aboutstyle abs' style={style}>
      <h1 className="d-flex justify-content-center"> &#128129; About iNotebook &#128211;</h1>
      <hr />
      <p>Welcome to iNotebook, your personal space for organizing and managing your to-do lists seamlessly. iNotebook is a feature-rich application that allows users to create accounts, log in securely, and store their to-do lists effortlessly. Built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, iNotebook combines the power of a robust backend with a dynamic and responsive frontend.</p>
      <h2>Key Features:</h2>
      <ol>
        <li><b>User Authentication:</b>
          <ul>
            <li>Create a secure account to start using iNotebook.
            </li>
            <li>If you already have an account, log in with your credentials.
            </li>
          </ul>
        </li>
        <br />
        <li><b>Todo List Management:</b>
          <ul>
            <li>Create multiple to-do lists to organize tasks based on different categories or priorities.
            </li>
            <li>Add, edit, and delete tasks with ease.
            </li>
            <li>Mark tasks as completed for efficient tracking.
            </li>
          </ul>
        </li>
        <br />
        <li><b>MERN Technology Stack:</b>
          <ul>
            <li><b>MongoDB:</b> A scalable and flexible NoSQL database for storing user data and to-do lists.
            </li>
            <li><b>Express.js:</b> A robust and minimalistic web application framework for building the backend API.
            </li>
            <li><b>React.js:</b> A declarative and efficient JavaScript library for building dynamic user interfaces.
            </li>
            <li>
              <b>Node.js:</b>Node.js: A server-side JavaScript runtime for building scalable and performant backend services.
            </li>
          </ul>
        </li>
        <br />
        <li><b>Responsive Design:</b>
          <ul>iNotebook is designed to provide a seamless experience across devices, whether you're accessing it on your desktop, tablet, or mobile.
          </ul>
        </li>
        <br />
        <li><b>Data Security:</b>
          <ul>
            <li>User passwords are securely hashed and stored.
            </li>
            <li>Communication between the frontend and backend is protected using HTTPS.
            </li>
          </ul>
        </li>
      </ol>
      <br />
      <h2>How to Get Started:
      </h2>
      <ol>
        <li><b>Create an Account:

        </b>
          <ul>
            <li>Click on the "Sign Up" button to create a new account.
            </li>
            <li>Provide a valid email address and a strong password.
            </li>
          </ul>
        </li>
        <br />
        <li><b>Log In:</b>
          <ul>
            <li>If you already have an account, click on the "Log In" button.
            </li>
            <li>
              Enter your email and password to access your iNotebook
            </li>
          </ul>
        </li>
        <br />
        <li>
          <b>Start Organizing:</b>
          <ul>
            <li>Create your first to-do list and start adding tasks.
            </li>
            <li>Enjoy the simplicity and efficiency of iNotebook for managing your tasks.
            </li>
          </ul>
        </li>
      </ol>

      <br />
      <h2>Get in Touch:</h2>
      <p>Have questions or feedback? We'd love to hear from you! Contact our support team at support@inotebook.com.</p>
      <br />
      <h2>Happy Organizing with iNotebook!
      </h2>
      <hr />
      <br />
      <br />

    </div>
  )
}

export default About
