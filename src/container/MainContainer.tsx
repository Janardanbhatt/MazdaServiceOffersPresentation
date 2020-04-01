import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';
import { Responsive} from 'semantic-ui-react';
import { MainStore } from '../stores/mainStore';
/*import Offers from './Offers';
//import Important from './Important';
import Tires from './Tires';
import Accessories from './Accessories';
import AuthorizeDealer from './AuthorizeDealer';
import AuthorizeDealerBottom from './AuthorizeDealerBottom';*/
//import Myths from './Myths';
//import  DesktopCarousel  from '../components/DesktopCarousel';
import  HeroBannerBlock  from '../components/HeroBannerBlock';
import  SpringTireEvent  from '../components/SpringTireEvent';
import  GenuineBreakMaintain  from '../components/GenuineBreakMaintain';
import  BenifitsOfMazdaBrake  from '../components/BenifitsOfMazdaBrake';
import  GenuineMazdaAccessories  from '../components/GenuineMazdaAccessories';
import  MaintainYourJoy  from '../components/MaintainYourJoy';
//import  MobileCarousel  from '../components/MobileCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { typedInject } from '../stores/rootStore';

// const StyledMainContainerComponent = styled.div``;
interface Props {
  mainStore: MainStore;
}
@observer
class MainContainer extends Component<Props, {}> {       
  render () {

    //const { isDealerInfoAvailable } = this.props.mainStore;
    const { scrollTop,section_2,spring_first_fade,now_relative_scrolled_bottom,section_3_transform,benifits_of_mazda_brake_fade_text,setParallex,setParallex_independent_left,setParallex_independent_right,bodyMaxHeight,genuine_mazda_accessories_fade_text,maintain_your_joy_fade_text} = this.props.mainStore;
    console.log(scrollTop,section_2,spring_first_fade,now_relative_scrolled_bottom,section_3_transform,benifits_of_mazda_brake_fade_text,setParallex, setParallex_independent_left,setParallex_independent_right,bodyMaxHeight,genuine_mazda_accessories_fade_text,maintain_your_joy_fade_text);
    return (
        <div>
        <Responsive minWidth={769}>
            <div className="mid_container" style={{paddingTop: '0'}}>
                {/*<DesktopCarousel />*/}    
                 <HeroBannerBlock/>        
            </div>
            </Responsive>
        <Responsive maxWidth={768}>
            <div className="mid_container" style={{paddingTop: '0'}}>
            {/*<MobileCarousel />*/}
            <HeroBannerBlock/>  
            </div>
        </Responsive>
        <SpringTireEvent/>
        <GenuineBreakMaintain/>
        <BenifitsOfMazdaBrake/>
        <GenuineMazdaAccessories/>
        <MaintainYourJoy/>
       {/* {isDealerInfoAvailable &&  <AuthorizeDealer />}
              <Offers />        
               <Accessories />
               <Tires />
               { isDealerInfoAvailable &&  <AuthorizeDealerBottom /> }*/}
        </div>
    );
  }
}
export default typedInject('mainStore')(MainContainer);