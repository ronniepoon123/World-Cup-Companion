function DashboardSection({

  title,

  children,

}) {

  return (

    <section className="dashboard-section">

      <h2>

        {title}

      </h2>

      <div className="dashboard-grid">

        {children}

      </div>

    </section>

  );

}

export default DashboardSection;