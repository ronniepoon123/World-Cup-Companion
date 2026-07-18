import { Link } from "react-router-dom";

function DashboardActionCard({

  title,

  subtitle,

  icon,

  to,

}) {

  return (

    <Link
      to={to}
      className="dashboard-action-card"
    >

      <div className="action-icon">

        {icon}

      </div>

      <h3>

        {title}

      </h3>

      <p>

        {subtitle}

      </p>

    </Link>

  );

}

export default DashboardActionCard;