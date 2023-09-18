import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="helpLayout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        earum.
      </p>

      <nav>
        {/* dosnt need to be /help/faq because it has is a child of help */}
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
