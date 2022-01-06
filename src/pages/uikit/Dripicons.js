import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import PageTitle from '../../components/PageTitle';

const Dripicons = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Icons', path: '/ui/icons/dripicons' },
                    { label: 'Dripicons', path: '/ui/icons/dripicons', active: true },
                ]}
                title={'Dripicons'}
            />

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <h4 className="m-t-0 header-title">Examples</h4>
                            <p className="text-muted font-14">
                                Use Class <code>&lt;i className="dripicons-alarm">&lt;/i></code>
                            </p>

                            <Row className="icons-list-demo">
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-alarm"></i> dripicons-alarm
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-align-center"></i> dripicons-align-center
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-align-justify"></i> dripicons-align-justify
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-align-left"></i> dripicons-align-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-align-right"></i> dripicons-align-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-anchor"></i> dripicons-anchor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-archive"></i> dripicons-archive
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-down"></i> dripicons-arrow-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-left"></i> dripicons-arrow-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-right"></i> dripicons-arrow-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-thin-down"></i> dripicons-arrow-thin-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-thin-left"></i> dripicons-arrow-thin-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-thin-right"></i> dripicons-arrow-thin-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-thin-up"></i> dripicons-arrow-thin-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-arrow-up"></i> dripicons-arrow-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-article"></i> dripicons-article
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-backspace"></i> dripicons-backspace
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-basket"></i> dripicons-basket
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-basketball"></i> dripicons-basketball
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-battery-empty"></i> dripicons-battery-empty
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-battery-full"></i> dripicons-battery-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-battery-low"></i> dripicons-battery-low
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-battery-medium"></i> dripicons-battery-medium
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-bell"></i> dripicons-bell
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-blog"></i> dripicons-blog
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-bluetooth"></i> dripicons-bluetooth
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-bold"></i> dripicons-bold
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-bookmark"></i> dripicons-bookmark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-bookmarks"></i> dripicons-bookmarks
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-box"></i> dripicons-box
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-briefcase"></i> dripicons-briefcase
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-brightness-low"></i> dripicons-brightness-low
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-brightness-max"></i> dripicons-brightness-max
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-brightness-medium"></i> dripicons-brightness-medium
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-broadcast"></i> dripicons-broadcast
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-browser"></i> dripicons-browser
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-browser-upload"></i> dripicons-browser-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-brush"></i> dripicons-brush
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-calendar"></i> dripicons-calendar
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-camcorder"></i> dripicons-camcorder
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-camera"></i> dripicons-camera
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-card"></i> dripicons-card
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cart"></i> dripicons-cart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-checklist"></i> dripicons-checklist
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-checkmark"></i> dripicons-checkmark
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-chevron-down"></i> dripicons-chevron-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-chevron-left"></i> dripicons-chevron-left
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-chevron-right"></i> dripicons-chevron-right
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-chevron-up"></i> dripicons-chevron-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-clipboard"></i> dripicons-clipboard
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-clock"></i> dripicons-clock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-clockwise"></i> dripicons-clockwise
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cloud"></i> dripicons-cloud
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cloud-download"></i> dripicons-cloud-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cloud-upload"></i> dripicons-cloud-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-code"></i> dripicons-code
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-contract"></i> dripicons-contract
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-contract-2"></i> dripicons-contract-2
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-conversation"></i> dripicons-conversation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-copy"></i> dripicons-copy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-crop"></i> dripicons-crop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cross"></i> dripicons-cross
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-crosshair"></i> dripicons-crosshair
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-cutlery"></i> dripicons-cutlery
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-device-desktop"></i> dripicons-device-desktop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-device-mobile"></i> dripicons-device-mobile
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-device-tablet"></i> dripicons-device-tablet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-direction"></i> dripicons-direction
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-disc"></i> dripicons-disc
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-document"></i> dripicons-document
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-document-delete"></i> dripicons-document-delete
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-document-edit"></i> dripicons-document-edit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-document-new"></i> dripicons-document-new
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-document-remove"></i> dripicons-document-remove
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-dot"></i> dripicons-dot
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-dots-2"></i> dripicons-dots-2
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-dots-3"></i> dripicons-dots-3
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-download"></i> dripicons-download
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-duplicate"></i> dripicons-duplicate
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-enter"></i> dripicons-enter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-exit"></i> dripicons-exit
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-expand"></i> dripicons-expand
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-expand-2"></i> dripicons-expand-2
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-experiment"></i> dripicons-experiment
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-export"></i> dripicons-export
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-feed"></i> dripicons-feed
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-flag"></i> dripicons-flag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-flashlight"></i> dripicons-flashlight
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-folder"></i> dripicons-folder
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-folder-open"></i> dripicons-folder-open
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-forward"></i> dripicons-forward
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-gaming"></i> dripicons-gaming
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-gear"></i> dripicons-gear
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-graduation"></i> dripicons-graduation
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-graph-bar"></i> dripicons-graph-bar
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-graph-line"></i> dripicons-graph-line
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-graph-pie"></i> dripicons-graph-pie
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-headset"></i> dripicons-headset
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-heart"></i> dripicons-heart
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-help"></i> dripicons-help
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-home"></i> dripicons-home
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-hourglass"></i> dripicons-hourglass
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-inbox"></i> dripicons-inbox
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-information"></i> dripicons-information
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-italic"></i> dripicons-italic
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-jewel"></i> dripicons-jewel
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-lifting"></i> dripicons-lifting
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-lightbulb"></i> dripicons-lightbulb
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-link"></i> dripicons-link
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-link-broken"></i> dripicons-link-broken
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-list"></i> dripicons-list
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-loading"></i> dripicons-loading
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-location"></i> dripicons-location
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-lock"></i> dripicons-lock
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-lock-open"></i> dripicons-lock-open
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-mail"></i> dripicons-mail
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-map"></i> dripicons-map
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-loop"></i> dripicons-media-loop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-next"></i> dripicons-media-next
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-pause"></i> dripicons-media-pause
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-play"></i> dripicons-media-play
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-previous"></i> dripicons-media-previous
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-record"></i> dripicons-media-record
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-shuffle"></i> dripicons-media-shuffle
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-media-stop"></i> dripicons-media-stop
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-medical"></i> dripicons-medical
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-menu"></i> dripicons-menu
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-message"></i> dripicons-message
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-meter"></i> dripicons-meter
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-microphone"></i> dripicons-microphone
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-minus"></i> dripicons-minus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-monitor"></i> dripicons-monitor
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-move"></i> dripicons-move
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-music"></i> dripicons-music
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-network-1"></i> dripicons-network-1
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-network-2"></i> dripicons-network-2
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-network-3"></i> dripicons-network-3
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-network-4"></i> dripicons-network-4
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-network-5"></i> dripicons-network-5
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-pamphlet"></i> dripicons-pamphlet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-paperclip"></i> dripicons-paperclip
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-pencil"></i> dripicons-pencil
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-phone"></i> dripicons-phone
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-photo"></i> dripicons-photo
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-photo-group"></i> dripicons-photo-group
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-pill"></i> dripicons-pill
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-pin"></i> dripicons-pin
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-plus"></i> dripicons-plus
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-power"></i> dripicons-power
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-preview"></i> dripicons-preview
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-print"></i> dripicons-print
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-pulse"></i> dripicons-pulse
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-question"></i> dripicons-question
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-reply"></i> dripicons-reply
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-reply-all"></i> dripicons-reply-all
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-return"></i> dripicons-return
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-retweet"></i> dripicons-retweet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-rocket"></i> dripicons-rocket
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-scale"></i> dripicons-scale
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-search"></i> dripicons-search
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-shopping-bag"></i> dripicons-shopping-bag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-skip"></i> dripicons-skip
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-stack"></i> dripicons-stack
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-star"></i> dripicons-star
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-stopwatch"></i> dripicons-stopwatch
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-store"></i> dripicons-store
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-suitcase"></i> dripicons-suitcase
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-swap"></i> dripicons-swap
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-tag"></i> dripicons-tag
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-tag-delete"></i> dripicons-tag-delete
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-tags"></i> dripicons-tags
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-thumbs-down"></i> dripicons-thumbs-down
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-thumbs-up"></i> dripicons-thumbs-up
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-ticket"></i> dripicons-ticket
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-time-reverse"></i> dripicons-time-reverse
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-to-do"></i> dripicons-to-do
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-toggles"></i> dripicons-toggles
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-trash"></i> dripicons-trash
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-trophy"></i> dripicons-trophy
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-upload"></i> dripicons-upload
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-user"></i> dripicons-user
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-user-group"></i> dripicons-user-group
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-user-id"></i> dripicons-user-id
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-vibrate"></i> dripicons-vibrate
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-view-apps"></i> dripicons-view-apps
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-view-list"></i> dripicons-view-list
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-view-list-large"></i> dripicons-view-list-large
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-view-thumb"></i> dripicons-view-thumb
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-volume-full"></i> dripicons-volume-full
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-volume-low"></i> dripicons-volume-low
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-volume-medium"></i> dripicons-volume-medium
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-volume-off"></i> dripicons-volume-off
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-wallet"></i> dripicons-wallet
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-warning"></i> dripicons-warning
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-web"></i> dripicons-web
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-weight"></i> dripicons-weight
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-wifi"></i> dripicons-wifi
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-wrong"></i> dripicons-wrong
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-zoom-in"></i> dripicons-zoom-in
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <i className="dripicons-zoom-out"></i> dripicons-zoom-out
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Dripicons;
