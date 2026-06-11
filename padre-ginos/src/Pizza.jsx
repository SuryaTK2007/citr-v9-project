// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const Pizza = (props) => {
    return (
      <div className="pizza">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <img 
          src={props.imag ? props.image : "https://picsum.photos/300/200"} 
          alt={props.name} />
      </div>
    );
}

export default Pizza;