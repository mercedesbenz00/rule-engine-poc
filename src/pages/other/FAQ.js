import React from 'react';
import { Row, Col } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

// FAQ component
const FAQ = () => {
    // chunk the list to display in two columns
    const rawFaqs1 = [
        {
            id: 1,
            question: 'Can I use this template for my client?',
            answer:
                'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, contact us',
        },
        {
            id: 2,
            question: 'Can this theme work with Wordpress?',
            answer:
                "No. This is a static react template. It won't directly with wordpress, though you can avail html version of the same and convert this into wordpress compatible theme",
        },
    ];

    const rawFaqs2 = [
        {
            id: 3,
            question: 'How do I get help with the theme?',
            answer:
                'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime',
        },
        {
            id: 4,
            question: 'Will you regularly give updates of Hyper?',
            answer:
                'Yes, We will update the Hyper regularly. All the future updates would be available without any cost',
        },
    ];

    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[{ label: 'Pages', path: '/pages/faq' }, { label: 'FAQ', active: true }]}
                title={'FAQ'}
            />

            <Row>
                <Col>
                    <div className="text-center">
                        <h3 className="">Frequently Asked Questions</h3>
                        <p className="text-muted mt-3">
                            {' '}
                            Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem temporibus
                            ea inventore alias!
                            <br /> Beatae animi nemo ea tempora, temporibus laborum facilis ut!
                        </p>

                        <button type="button" className="btn btn-success btn-sm mt-2">
                            <i className="mdi mdi-email-outline mr-1"></i> Email us your question
                        </button>
                        <button type="button" className="btn btn-info btn-sm mt-2 ml-1">
                            <i className="mdi mdi-twitter mr-1"></i> Send us a tweet
                        </button>
                    </div>
                </Col>
            </Row>

            <Row className="pt-5">
                <Col lg={5} className="offset-lg-1">
                    {rawFaqs1.map((ques, idx) => {
                        return (
                            <div key={idx}>
                                <div className="faq-question-q-box">Q.</div>
                                <h4 className="faq-question" data-wow-delay=".1s">
                                    {ques.question}
                                </h4>
                                <p className="faq-answer mb-4">{ques.answer}</p>
                            </div>
                        );
                    })}
                </Col>
                <Col lg={5}>
                    {rawFaqs2.map((ques, idx) => {
                        return (
                            <div key={idx}>
                                <div className="faq-question-q-box">Q.</div>
                                <h4 className="faq-question" data-wow-delay=".1s">
                                    {ques.question}
                                </h4>
                                <p className="faq-answer mb-4">{ques.answer}</p>
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FAQ;
