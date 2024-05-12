interface CardItem {
  price: number;
  header: string;
  content: string;
  list: string;
  id: number;
  textStyle: any;
  buttonStyle: any;
}

export default function Card(props: CardItem) {
  return (
    <div className="card nav-link">
      <div className="flex items-center">
        <div className="text-[25px] m-1 font-bold	">${props.price}</div>
        <div className="text-[10px]"> /Month</div>
      </div>
      <p className={props.textStyle}>{props.header}</p>
      <p className="mt-5 text-[10px]">{props.content}</p>
      <hr className="my-3" />
      {props.list.map((item, index) => (
        <div className="text-[8px] m-1" key={index}>
          <img
            src="/check.svg"
            alt=""
            width={10}
            height={10}
            loading="lazy"
            className="inline"
            fetchpriority="high"
          />
          {item}
        </div>
      ))}
      <div className="flex justify-center mt-5">
        <button type="button" className={props.buttonStyle}>
          {props.button}
        </button>
        {/* row-end text-[8px] flex items-center text-white uppercase text-[10px]
        rounded-lg px-5 py-2.5 me-2 mb-2 */}
        {/* <button className={button}>asdksjkd</button> */}
      </div>
    </div>
  );
}
