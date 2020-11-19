import { Layout, Page, EmptyState } from '@shopify/polaris';
import React from "react";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Modal from 'react-awesome-modal';

const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png';



class Index extends React.Component {
    render() {
        return(
            <img src={img}/>
        );
    }
}


export default Index;
