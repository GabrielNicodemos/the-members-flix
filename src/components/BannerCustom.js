import "./BannerCustom.css";

const BannerCustom = ({ banner }) => {
  return (
    <section
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${banner.url_image})`,
      }}
    >
      <div className="banner--vertical">
        <div className="banner--horizontal">
          <div className="bannner--info">
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
            <a href="/play">▶ Começar</a>
            <p>
              <strong>Categoria: </strong>
              {banner.category}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCustom;
