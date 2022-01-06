// @flow
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import campaignSvg from '../../../assets/images/email-campaign.svg';

const CampaignWidget = () => {
    return (
        <React.Fragment>
            <Card className="cta-box bg-primary text-white">
                <CardBody>
                    <div className="text-center">
                        <h3 className="m-0 font-weight-normal">
                            Enhance your <b>Campaign</b> for better outreach
                        </h3>

                        <img className="my-4" src={campaignSvg} width="224" alt="" />
                        <br />
                        <a href="/" className="mt-4 btn btn-light btn-rounded">
                            Know More <i className="mdi mdi-arrow-right"></i>
                        </a>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default CampaignWidget;
