function Banner (props) {
    return (
      <div className={props.class}>
        <img className="banner__img" src={props.image} alt={props.alt} />
        {props.children}
      </div>  
    );
}
  
export default Banner;