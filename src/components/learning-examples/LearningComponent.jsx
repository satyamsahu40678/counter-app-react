import FirstComponent, { FifthComponent } from "./FirstComponent";
import FourthComponent from "./FourthComponent";
import LearningJavaScript from "./LeaningJavaScript";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";


export default function LearningComponent() {
    return (
        <div className="LearningComponent">
            <FirstComponent />
            <FifthComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <LearningJavaScript />
        </div>
    )
}