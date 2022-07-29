import Header from "../components/Header";
import { wording } from "../constants/interview.js";
export default function DefaultPage() {
  return <Header headerList={wording.headerList} />;
}
