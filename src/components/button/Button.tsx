import "./button.css";

type Props = {
    color: string,
    text: string,
    textColor: string,
};

const Button = (props: Props) => {
  return (
    <div>
      <button className="btn" style={{ backgroundColor: `${props.color}`, color: `${props.textColor}`}}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
