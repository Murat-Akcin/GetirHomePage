export default function Category({ category: { id, title, image } }) {
  return (
    <div className="flex flex-col h-28 w-32 items-center justify-center  rounded-md transition-colors hover:bg-purple-100">
      <a href="#" className="flex flex-col items-center">
        <img src={image} alt="" className="h-14 w-14 border rounded-lg mb-2" />
        <span>{title}</span>
      </a>
    </div>
  );
}
