import { Component } from 'react';
import * as React from 'react';
import { Image } from 'semantic-ui-react';
import { MainStore } from '../stores/mainStore';
import {typedInject} from "../stores/rootStore";
import SearchDealerOnName from "./SearchDealerOnName";
import renderHTML from 'react-render-html';
import { STRCONSTANT } from '../constant';
import { FormattedMessage } from "react-intl";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPrint} from '@fortawesome/fontawesome-free-solid';

const coupon_tires_icon='img/coupon_tires_icon.png'
const car_repair_logo='img/car_repair_logo.png'
//const spring_tire_event='img/spring_tire_event.png'
const scroll_panel_second_bg='img/scroll_panel_second_bg.jpg'
const scroll_panel_second_bg_tablet='img/scroll_panel_second_bg_tablet.jpg'
const scroll_panel_second_bg_mob='img/scroll_panel_second_bg_mob.jpg'

interface Props {
    mainStore: MainStore,
}

class SpringTireEvent extends Component<Props, {}> {
	constructor(props) {
   		 super(props)
 	 }

	  getOfferID = () => {
	      /*try {
	          this.props.mainStore.setOfferID(offerid);
	          this.props.mainStore.printOffers();
	      }catch(e) {
	          console.log(e.toString());
	      }*/
	  };

	 displaySpringTireImageText = () => {
        if (this.props.mainStore.lang == 'fr')
            return renderHTML('<img src="img/spring_tire_event_french.png" />');

        	return renderHTML('<img src="img/spring_tire_event.png" />');

    };
	render() {
		const { section_2,spring_first_fade } = this.props.mainStore;
  		return (
  			<section className={section_2 ? "two-section-merge spring_tire_event has-fixed z-index-5 now-relative" : "two-section-merge has-fixed z-index-5 spring_tire_event"}>
					    {/*<!--Scroll second panel start-->*/}
					    <section className="scroll-second-panel full-height">
					        <div className="second-panel-top-block">
					            <div className={spring_first_fade ? "bg_cover desktop_view content-animated" : "bg_cover desktop_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                        <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div>
					            <div className={spring_first_fade ? "bg_cover tablet_view content-animated" : "bg_cover tablet_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg_tablet+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                       <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div>
					            <div className={spring_first_fade ? "bg_cover mobile_view content-animated" : "bg_cover mobile_view" } style={{backgroundImage: 'url('+scroll_panel_second_bg_mob+')'}}>
					                <div className="container">
					                    <div className="spring-tire-logo">
					                    	{this.displaySpringTireImageText()}
					                    </div>
					                    <div className="panel-details">
					                       <h3><FormattedMessage id="spring-forward-panel-details-h3"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_h3 } /></h3>
					                        <p><FormattedMessage id="spring-forward-panel-details-p"
                                        		defaultMessage={ STRCONSTANT.springtire.default.spring_forward_panel_details_p} /></p>
					                    </div>
					                </div>
					            </div> 
					        </div>
					        <div className="second-panel-bottom-block">
					            <div className="container text-center">
					                <h1><FormattedMessage id="second-panel-title-h1"
                                        		defaultMessage={ STRCONSTANT.springtire.default.second_panel_title_h1} /></h1>
					                <p> <FormattedMessage id='second-panel-title-p' defaultMessage={ STRCONSTANT.springtire.default.second_panel_title_p} /> <a href="tel:5197352211" title="5197352211">519-735-2211</a></p>
					                <div className="select-dealer">
										<SearchDealerOnName />
                                 
                                    </div>
					                <div className="btn-block">
					                <a href="#" title="Shedule Appoitment" className="btn_normal">schedule appointment</a>
					                </div>
					                <div className="btn-block">
					                <a href="#" title="Quote Your Tires" className="btn_normal">QUOTE YOUR TIRES</a>
					                </div>
					                <div className="btn-block">
					                <a href="#" title="Accessorize Your mazda" className="btn_normal">ACCESSORIZE YOUR MAZDA</a>
					                </div>
					            </div>
					        </div>
					    </section>
					    {/*<!--Scroll second panel end-->*/}
					    
					    {/*<!--Scroll second panel start-->*/}
					    <section className="get-up-block">
					        <div className="container text-center">
					            <div className="get-up-off">
					                <Image src={coupon_tires_icon} />  
					                <h2><FormattedMessage id='get-up-block-h2-off' defaultMessage={STRCONSTANT.springtire.default.get_up_block_h2_off}/></h2>
					                <div className="border-top-bottom">
					                    <h2><FormattedMessage id='get-up-block-h2-border-top-bottom' defaultMessage={STRCONSTANT.springtire.default.get_up_block_h2_border_top_bottom}/></h2>
					                </div>
					                    <FormattedMessage id='get-up-block-span' defaultMessage={STRCONSTANT.springtire.default.get_up_block_span}/>
					                    <p>
					                       <FormattedMessage id='get_up_block_p1' defaultMessage={STRCONSTANT.springtire.default.get_up_block_p1}/>
					                    </p>
					                     <a id='d1' href="#/" style={{letterSpacing: '2px', textTransform: 'uppercase', color: '#101010', fontWeight: 700, fontSize: '18px'}} onClick={ (e) => this.getOfferID()} >
                             <FontAwesomeIcon icon={faPrint} size='xs' />
                             &nbsp;
                             <FormattedMessage id="print-offer" defaultMessage={ STRCONSTANT.common.default.print_offer } />
                         </a>   
					            </div> 
					            <div className="get-up-off">
					                <Image src={car_repair_logo} />  
					                <h2><FormattedMessage id='get_up_off_h2_First' defaultMessage={STRCONSTANT.springtire.default.get_up_off_h2_First}/></h2>

					                <div className="border-top-bottom">
					                <h2><FormattedMessage id='get_up_off_h2_Second' defaultMessage={STRCONSTANT.springtire.default.get_up_off_h2_Second}/></h2>
					                </div>
					                <FormattedMessage id='get_up_off_span' defaultMessage={STRCONSTANT.springtire.default.get_up_off_span}/>
					               <FormattedMessage id='get_up_off_p' defaultMessage={STRCONSTANT.springtire.default.get_up_off_p}/>
					                <a id='d1' href="#/" style={{letterSpacing: '2px', textTransform: 'uppercase', color: '#101010', fontWeight: 700, fontSize: '18px'}} onClick={ (e) => this.getOfferID()} >
                             <FontAwesomeIcon icon={faPrint} size='xs' />
                             &nbsp;
                             <FormattedMessage id="print-offer" defaultMessage={ STRCONSTANT.common.default.print_offer } />
                         </a>
					            </div> 

					        </div>
					    </section>
					    {/*<!--Scroll second panel start-->*/}
					    </section>
  		)
  		}
}
export default typedInject('mainStore')(SpringTireEvent);
