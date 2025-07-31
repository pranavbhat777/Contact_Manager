import React from "react";
import user from "../images/user.png"; // Make sure this image exists
import { MdDelete } from "react-icons/md";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item" style={styles.card}>
      <img src={user} alt="user" style={styles.avatar} />
      <div style={styles.content}>
        <div style={styles.name}>{name}</div>
        <div style={styles.email}>{email}</div>
      </div>
      <MdDelete
        style={styles.icon}
        onClick={() => clickHandler(id)}
        title="Delete Contact"
      />
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: "1rem",
    marginBottom: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    justifyContent: "space-between",
  },
  avatar: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    marginRight: "1rem",
  },
  content: {
    flexGrow: 1,
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "0.2rem",
  },
  email: {
    fontSize: "14px",
    color: "#555",
  },
  icon: {
    fontSize: "24px",
    color: "#dc3545",
    cursor: "pointer",
  },
};

export default ContactCard;
