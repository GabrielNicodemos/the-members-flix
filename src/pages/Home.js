import { useEffect, useState } from "react";
import "./Home.css";

import BannerCustom from "../components/BannerCustom";
import ListVertical from "../components/ListVertical";
import ListHorizontal from "../components/ListHorizontal";
import Header from "../components/Header";

const Home = ({ token }) => {
  const url = "http://api.themembers.dev.br/api/auth/home";
  const [bannerCustom, setBannerCustom] = useState({});
  const [user, setUser] = useState({});
  const [listVertical, setListVertical] = useState([]);
  const [listHorizontal, setlistHorizontal] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const data = await res.json();
      let listVertical = await data.array_carrosseis.data.filter(
        (item) => item.type === 1
      );
      let listHorizontal = await data.array_carrosseis.data.filter(
        (item) => item.type === 3
      );
      setBannerCustom(data.banner_custom);
      setUser(data.user);
      setListVertical(listVertical);
      setlistHorizontal(listHorizontal);
    }
    fetchData();
  }, [token]);

  return (
    <div className="home">
      {/* Header */}
      <Header user={user} />
      {/* Banner */}
      {bannerCustom && <BannerCustom banner={bannerCustom} />}
      {/* Listas */}
      <section className="lists">
        {listVertical &&
          listVertical.map((item, key) => (
            <ListVertical key={key} title={item.title} items={item.items} />
          ))}
        {listHorizontal &&
          listHorizontal.map((item, key) => (
            <ListHorizontal key={key} title={item.title} items={item.items} />
          ))}
      </section>
    </div>
  );
};

export default Home;
