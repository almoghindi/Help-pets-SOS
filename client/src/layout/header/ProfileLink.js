import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth-context';

export default function ProfileLink() {
      const auth = useContext(AuthContext);
      return (
        <li className="nav-item dropdown m-4">
          <span
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className="fa-solid fa-user"
              style={{ width: "16px", height: "16px", fontSize: "1.5em" }}
            >
              {" "}
            </i>
          </span>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <Link to="/profile">
              <li>
                <span className="dropdown-item">
                  <i className="fa-regular fa-id-card m-1"></i>Profile
                </span>
              </li>
            </Link>
            <Link>
              <li>
                <span className="dropdown-item">
                  <i className="fa-solid fa-gear m-1"></i>Settings
                </span>
              </li>
            </Link>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <Link>
              <li onClick={() => auth.logout()}>
                <span className="dropdown-item">
                  <i className="fa-solid fa-right-from-bracket m-1"></i>Logout
                </span>
              </li>
            </Link>
          </ul>
        </li>
      );
}