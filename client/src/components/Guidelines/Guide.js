// import logo from './logo.svg';
import './Guide.css';


function Guide() {
  const divStyle = {
    margin: '50px'   
  };
  
  return (
    
    <div>
      <h1>How can you build a standard resue?</h1>
      <p>Welcome to our CV generator application built with React.js!</p>
      <h2>Getting Started</h2>
      <p>To get started with the application, follow these steps:</p>
      <ol>
        <li>Install the necessary dependencies</li>
        <li>Set up the development environment</li>
        <li>Create an account to access the application</li>
      </ol>
      <h2>Components</h2>
      <p>The application is made up of several components, including:</p>
      <ul>
        <li>Header</li>
        <li>Footer</li>
        <li>CV sections</li>
      </ul>
      <p>Each component is structured using React.js and interacts with other components to generate the final CV.</p>
      <h2>State Management</h2>
      <p>The application uses state management to store user input and generate the CV. The state is updated whenever the user makes changes to the input, and the components are re-rendered based on the updated state.</p>
      <h2>Routing</h2>
      <p>The application uses routing to allow users to navigate between different pages, including:</p>
      <ul>
        <li>Sign-up page</li>
        <li>CV creation page</li>
        <li>CV preview page</li>
      </ul>
      <p>The routing is handled using React Router.</p>
      <h2>Styling</h2>
      <p>The application is styled using CSS, with additional styling applied using third-party libraries such as Bootstrap or Material-UI.</p>
      <h2>Previewing and Exporting</h2>
      <p>Users can preview their CVs within the application before exporting them. Export options include downloading the CV as a PDF or sharing it with others.</p>
      <h2>Help and Support</h2>
      <p>If you need help or have questions about the application, please consult our FAQ or contact our support team for assistance.</p>
      <div>
        <button color='Blue'>Get Started</button>
      </div>
    
    </div>
    
  );
}



export default Guide;
