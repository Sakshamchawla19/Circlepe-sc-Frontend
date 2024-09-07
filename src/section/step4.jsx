import '../App.css'
import Rectangle from '../components/rectangle.jsx'
import Circle from '../components/circle/elipse.jsx';
import Phone from '../components/phone/phone.jsx';
import Arrow from '../components/arrow/arrow.jsx';
import AnimatedText from '../components/format_text.jsx';
import VerticalLine from '../components/vertical_line/vertical_line.jsx';
import Phone_small from './phone_small.jsx';
import Text_small from './text_small.jsx';

function Step4() {
  return (
    <>
      <section>
        <div className="row m-0">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center">
            <Circle />
            <Phone_small />
            <Text_small/>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 p-0 d-flex justify-content-center">
            <AnimatedText  />
          </div>
          <div className="col-lg-1 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
            <Arrow />
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
            <Phone />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 p-0 d-flex justify-content-end">
            <Rectangle />
            <VerticalLine />
          </div>
        </div>
      </section>
    </>
  );
}

export default Step4;
