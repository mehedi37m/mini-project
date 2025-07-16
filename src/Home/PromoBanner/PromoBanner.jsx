import { Link } from "react-router-dom";
import promo from "../../assets/hello.jpg"
import "./PromoBanner.css"
import ShapeBlur from "../../ShapeBlur/ShapeBlur";



const PromoBanner = () => {
    return (
        <div className="mt-16 py-12 border px-4 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 leading-snug">2024 National Book Awards for Fiction Shortlist</h1>

                    
                    <Link to='/shop' ><button className='bttn '>Explore More</button></Link>
                    
                </div>

                <div>
                    {/* <img src={promo} alt="" className="w-96 " /> */}
                    <div style={{position: 'relative', height: '500px', overflow: 'hidden'}}>
<ShapeBlur
  variation={0}
  pixelRatioProp={window.devicePixelRatio || 1}
  shapeSize={1.5}
  roundness={0.5}
  borderSize={.05}
  circleSize={.05}
  circleEdge={1}
/>
</div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;