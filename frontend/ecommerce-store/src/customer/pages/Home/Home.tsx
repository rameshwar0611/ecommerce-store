import React from "react";
import ElectronicCategory from "./ElectronicCategory/ElectronicCategory";
import Grid from "./Grid/Grid";
import Deal from "./Deal/Deal";

const Home = () => {
  return (
    <div className="space-y-10">
      <ElectronicCategory />
      <section>
        {/* <Grid  /> */}
      </section>
      <section>
        <Deal/>
      </section>
    </div>
  );
};

export default Home;
