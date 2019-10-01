import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const PrivacyButtonStyle = styled.button`
    display: inline-block;
    background:none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: #e45095;

    :hover 
    {
        color: #090909;
    }
`;

const PrivacyHeaderStyle = styled.h1`
    color: #e45095;
`

const PrivacySmallHeaderStyle = styled.h2`
    color: #e45095;
`

const PrivacyLinkStyle = styled.a`
    text-decoration: none;
    color: #e45095;
`

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        fontFamily: '"Open Sans", sans-serif',
        position: 'absolute',
        width: '100%',
        maxWidth: 'calc(100vw - 16rem)',
        minWidth: '75vw',
        maxHeight: '75vh',
        margin: '0',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 4, 0),
        overflow:'scroll',
        overflowX:'hidden'
    },
}));

//this is not quite a class nor
//a functional component

//this is a component export which
//contains class functionalities
export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <PrivacyButtonStyle onClick={handleOpen}>Privacy Policy</PrivacyButtonStyle>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                <PrivacyHeaderStyle>Welcome to our Privacy Policy</PrivacyHeaderStyle>
                <h3>Your privacy is critically important to us.</h3>
                Tommie's Hair Stylist is located at:<br/>
                <address>Tommie's Hair Stylist<br/>8951 Knott Ave. #I<br/>Buena Park, CA<br/>90620 US<br/>714 235 3002</address>

                <p>It is Tommie's Hair Stylist's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <PrivacyLinkStyle href="http://hairextensionsbydolly.com">hairextensionsbydolly.com</PrivacyLinkStyle> (hereinafter, "us", "we", or "hairextensionsbydolly.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
                {/* <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p> */}

                <PrivacySmallHeaderStyle>Website Visitors</PrivacySmallHeaderStyle>
                <p>Like most website operators, Tommie's Hair Stylist collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Tommie's Hair Stylist's purpose in collecting non-personally identifying information is to better understand how Tommie's Hair Stylist's visitors use its website. From time to time, Tommie's Hair Stylist may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
                <p>Tommie's Hair Stylist also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users. Tommie's Hair Stylist only discloses logged in user IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
                
                <PrivacySmallHeaderStyle>Security</PrivacySmallHeaderStyle>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                    
                {/* <PrivacySmallHeaderStyle>Advertisements</PrivacySmallHeaderStyle>
                <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Tommie's Hair Stylist and does not cover the use of cookies by any advertisers.</p> */}
                    

                <PrivacySmallHeaderStyle>Links To External Sites</PrivacySmallHeaderStyle>
                <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
                <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>		
                    
                <PrivacySmallHeaderStyle>Aggregated Statistics</PrivacySmallHeaderStyle>
                <p>Tommie's Hair Stylist may collect statistics about the behavior of visitors to its website. Tommie's Hair Stylist may display this information publicly or provide it to others. However, Tommie's Hair Stylist does not disclose your personally-identifying information.</p>
                    
                <PrivacySmallHeaderStyle>Privacy Policy Changes</PrivacySmallHeaderStyle>
                <p>Although most changes are likely to be minor, Tommie's Hair Stylist may change its Privacy Policy from time to time, and in Tommie's Hair Stylist's sole discretion. Tommie's Hair Stylist encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
                    
                <PrivacySmallHeaderStyle>Credit & Contact Information</PrivacySmallHeaderStyle>
                <p>If you have any questions about this Privacy Policy, please contact us via <PrivacyLinkStyle href="mailto:hcoolhouse56@yahoo.com">email</PrivacyLinkStyle>, or <PrivacyLinkStyle href="tel:7142353002">phone</PrivacyLinkStyle>.</p>
                </div>
            </Modal>
        </div>
    );
}