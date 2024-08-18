import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Section from './Components/Section/Section'

function App() {

  return (
    <div className="font-sans mx-auto bg-gray-200">
      <Header />
      <Hero />
      <Section
        id="web-development"
        title="Web Development"
        description="We build dynamic, responsive websites tailored to your needs using the latest technologies."
        cards={[
          { title: "Frontend Development", text: "Creating engaging and responsive user interfaces with modern frameworks." },
          { title: "Backend Development", text: "Building robust server-side applications and APIs to support your business." },
          { title: "Full Stack Web Development", text: "Combining frontend and backend development for complete, integrated solutions." }
        ]}
      />
      <Section
        id="topographic-survey"
        title="Topographic Survey"
        description="Accurate and detailed topographic surveys to support your planning and development projects."
        cards={[
          { title: "Detailed Mapping", text: "Providing comprehensive maps to aid in your project planning." },
          { title: "Site Analysis", text: "Analyzing site conditions to ensure accurate and effective project execution." },
          { title: "Land Use Planning", text: "Helping you make informed decisions on land utilization and development." }
        ]}
      />
      <Section
        id="rtk-survey"
        title="RTK Survey"
        description="Leveraging Real-Time Kinematic (RTK) technology for high-precision surveying and data collection."
        cards={[
          { title: "Precision Mapping", text: "Achieving high-accuracy mapping for engineering and construction projects." },
          { title: "Real-Time Data", text: "Providing instantaneous data for time-sensitive projects." },
          { title: "Advanced Equipment", text: "Utilizing state-of-the-art RTK equipment for reliable and precise results." }
        ]}
      />
      <Footer />
    </div>
  )
}

export default App;
