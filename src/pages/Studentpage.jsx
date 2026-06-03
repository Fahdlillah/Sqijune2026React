import React from "react";
import Students from "../components/Students";

const Studentpage = () => {
  return (
    <div style={{color:'red'}}>
      <Students name="Shola" age={30} isStudent={true} />
      <Students name="Tunji" age={30} isStudent={false} />
      <Students name="Ayo" age={10} isStudent={true} />
    </div>
  );
};

export default Studentpage;
