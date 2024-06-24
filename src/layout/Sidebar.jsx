import { useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-details">
          {/* <i className="bx bxl-codepen icon" /> */}
          {isOpen === false && (
            <i
              className="pi pi-bars bx bxl-codepen"
              onClick={() => setIsOpen(true)}
              style={{ cursor: "pointer" }}
            />
          )}
          <div className="logo_name">SideMenu</div>
          {/* <i className="bx bx-menu" id="btn" /> */}
          {isOpen === true && (
            <i
              className="pi pi-angle-left bx bx-menu"
              id="btn"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt">
                <MdOutlineDashboardCustomize />
              </i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user" />
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chat" />
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2" />
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-folder" />
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cart-alt" />
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart" />
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog" />
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <i className="bx bx-export" />
              <div className="name_job">
                <div className="name">Logout</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out" />
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="text">Dashboard</div>
      </section>
    </>
  );
};

export default Sidebar;
