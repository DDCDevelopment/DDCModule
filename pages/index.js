import { Layout, Page, EmptyState } from '@shopify/polaris';
import React from "react";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Modal from 'react-awesome-modal';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';



class Index extends React.Component {
    state = { open: false };
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <>
            <div>
                <Page>
                    <TitleBar
                    title="Sample App"
                    primaryAction={{
                        content: 'Select products',
                        onAction: () => this.setState({ open: true }),
                    }}
                    />
                    <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    open={this.state.open}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({ open: false })}
                    />
                    <Layout>
                        <EmptyState
                            heading="Discount your products temporarily"
                            action={{
                            content: 'Select products',
                            onAction: () => this.setState({ open: true }),
                            }}
                            image={img}
                        >
                            <p>Select products to change their price temporarily.</p>
                        </EmptyState>
                        <input type="button" value="Open" onClick={() => this.openModal()} />
                        <Modal 
                            visible={this.state.visible}
                            width="1000"
                            height="600"
                            effect="fadeInUp"
                            onClickAway={() => this.closeModal()}
                        >
                            <div>
                                <h1>Title</h1>
                                <p>Some Contents</p>
                                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                            </div>
                        </Modal>
                    </Layout>
                </Page>
            </div>
            </>
            
        );
    }
    handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({ open: false })
        console.log(idsFromResources)
    };
}


export default Index;