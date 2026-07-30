import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern — 714 Inventory & Ticket Ops Platform</h4>
                <h5>HydraSoft</h5>
              </div>
              <h3>Oct 2025 – Mar 2026</h3>
            </div>
            <p>
              Built admin dashboard features — including detail views,
              tagging, and status tracking — as part of a 10-person team,
              integrated purchase order and sales order data into a
              statistics dashboard for reporting and analytics, and built
              bulk-action functionality (select-all, status handling, input
              validation) that streamlined event processing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern — Ticket Scraper</h4>
                <h5>HydraSoft</h5>
              </div>
              <h3>Oct 2025 – Mar 2026</h3>
            </div>
            <p>
              Built backend APIs for retrieving and filtering ticket
              marketplace data as part of a 6-person team, built admin
              dashboard features giving visibility into ticket listings and
              pricing, and redesigned the database schema to make data
              retrieval faster and more reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
