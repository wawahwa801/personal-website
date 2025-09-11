import React from 'react';

const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="card">
        <div className="card-title">Calgary Track and Field Athletic Association</div>
        <div className="card-subtitle">Competition Volunteer and Official | June 2023 – Present | Calgary, AB</div>
        <div className="card-content">
          <ul>
            <li>Managed registration and check-in of over a thousand athletes to increase organization and efficiency in the flow of events.</li>
            <li>Addressed concerns of athletes and parents both online and at the front desk.</li>
            <li>Monitored and arranged the distribution of lunch and other food items to officials at various track and field competitions.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Jugo Juice</div>
        <div className="card-subtitle">Food Service Staff | April 2024 – August 2024 | Calgary, AB</div>
        <div className="card-content">
          <ul>
            <li>Facilitated customer service interactions and processed orders at the front counter.</li>
            <li>Prepared and packaged food and drinks to deliver to consumers in accordance with customer requests.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Calgary Public Library</div>
        <div className="card-subtitle">Program Volunteer | April 2023 – June 2024 | Calgary, AB</div>
        <div className="card-content">
          <ul>
            <li>Guided over 10 students with elementary-level math through challenges and activities to help them excel academically.</li>
            <li>Collaborated with a diverse group of volunteers to lead activities designed to encourage young children to engage in math.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
