import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const URL = `http://localhost:3000/profile/${id}`;
  useEffect(() => {
    axios.get(URL).then((resp) => {
      setUser(resp.data);
      console.log(resp.data);
    });
  }, [URL]);

  // function handleRegistration() {}
  // function handleFeedback() {}

  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center">
        <div>
          <img src="" alt="photo" />
        </div>
        <div>
          {user?.name}
          {user?.rollno}
        </div>
      </div>
      <div>
        <Link to={"/coursereg"}>
          <button>Course Registation</button>
        </Link>
        <Link to={'/feedback'}>
          <button>Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
