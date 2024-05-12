interface CardItem {
  id: number;
  thumbnail: string;
  description: string;
  price: number;
  unit: string;
  discountPercentage: number;
}

export default function CardItem(props: CardItem) {
  return (
    <div className="product-card" key={props.id}>
      <div className="h-56 grid grid-cols-1 gap-4 content-between  ">
        <div>
          <img
            id={props.id}
            src={props.thumbnail}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "100px" }}
            fetchpriority="high"
            className="mt-4object-cover"
          />
          <div className="font-bold text-[10px]">
            {props.description.substring(0, 50)}
          </div>
        </div>

        <div>
          {props.discountPercentage ? (
            <div className="flex items-center">
              <p className="mr-2 font-bold text-red-400">
                {(
                  props.price -
                  (props.discountPercentage * props.price) / 100
                ).toFixed(2)}
              </p>
              <p className="text-[12px] line-through font-bold text-gray-500">
                {props.price}
              </p>
              <p className="text-[12px] font-bold text-gray-500">/ ชิ้น</p>
            </div>
          ) : (
            <p>{props.price}</p>
          )}
        </div>
        <div>
          <img
            src="/heart.svg"
            alt=""
            width={10}
            height={10}
            loading="lazy"
            className="inline"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
}
