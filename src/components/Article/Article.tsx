import { CommonInformation } from "./CommonInformation/CommonInformation";
import { Description } from "./Description/Description";
import { Images } from "./Images/Images";

export function Article() {
  return (
    <div>
        <CommonInformation/>
        <Description/>
        <Images/>
    </div>
  )
}
