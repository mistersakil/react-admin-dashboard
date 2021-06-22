import React from "react";
import "./header.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import avatar from "../../images/avatar.jpg";

const Header = () => {
  return (
    <header>
      <main>
        <section>
          <h4>Octapia Admin</h4>
        </section>
        <section>
          <div>
            <NotificationsNone />
            <span>2</span>
          </div>
          <div>
            <Language />
            <span>2</span>
          </div>
          <div>
            <Settings />
          </div>
          <div>
            <img src={avatar} alt="avatar" width="40" height="40" />
          </div>
        </section>
      </main>
    </header>
  );
};

export default Header;
