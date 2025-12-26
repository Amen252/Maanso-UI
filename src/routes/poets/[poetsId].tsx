import { useParams } from "react-router-dom";

export default function PoetDetails() {
  const { poetsId } = useParams();
  return <div>Hello "{poetsId}"</div>;
}
