import Ballpit from "../../../Reactbits/Ballpit/Ballpit";
import SplashCursor from "../../../Reactbits/SplashCursor/SplashCursor";






const Live = () => {
    return (
        <div className="my-20">
          
          {/* <SplashCursor /> */}


<div className="container mx-auto underline border" style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%', }}>
  <Ballpit  count={50}
    gravity={2}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}></Ballpit>
</div>
        </div>
    );
};

export default Live;