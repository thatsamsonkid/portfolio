const Circle = (props: any) => {
  return (
    <div className={`circle-display p-4 text-center ${props.className}`}>
      <span className="circle-display__title sm-subtitle-2 mb-3">
        {props.title}
      </span>
      <span className="circle-display__description">
        <i>{props.children}</i>
      </span>
    </div>
  );
};

export default Circle;
